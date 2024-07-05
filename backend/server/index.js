import express from "express";
import env from "dotenv";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;
env.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
});

db.connect();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const result = await db.query("select * from productdata");
    const data = JSON.stringify(result.rows);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send("Internal Server Error");
  }
});

app.post("/saveOrder", async (req, res) => {
  try {
    const data = req.body;
    const { orderdata, paymentdata, userdata } = data;

    const oid = await db.query("select count(*) from orders");
    let ordernumber = parseInt(oid.rows[0].count) + 1;

    const cid = await db.query("select count(*) from customer");
    let customernumber = parseInt(cid.rows[0].count) + 1;

    const orderdate = new Date().toISOString().split("T")[0];

    await db.query(
      "insert into customer(cid, firstname, lastname, adress, zip, city) values ($1, $2, $3, $4, $5, $6)",
      [
        customernumber,
        userdata.firstname,
        userdata.lastname,
        userdata.adress,
        parseInt(userdata.zip),
        userdata.city,
      ]
    );

    for (const order of orderdata) {
      const savedata = await db.query(
        "insert into orders (cid, oid, pid, menge, einzelpreis, zahlungsmethode, datum) values ($1, $2, $3, $4, $5, $6, $7) returning *",
        [
          customernumber,
          ordernumber,
          order.id,
          order.menge,
          order.preis,
          paymentdata,
          orderdate,
        ]
      );
      console.log(savedata);
    }

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
