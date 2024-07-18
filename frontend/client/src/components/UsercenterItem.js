import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UsercenterItem({ orderdata }) {
  const [order, setOrder] = useState([]);
  let navigate = useNavigate();

  const oid = JSON.stringify({ oid: orderdata.oid });

  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: oid,
  })
    .then((response) => response.json())
    .then((data) => setOrder(data))
    .catch((err) => console.log(err));

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/orderview", { state: { data: { order } } });
  };

  return (
    <div className="usercenter-card" onClick={(e) => handleClick(e)}>
      <p>{orderdata.datum}</p>
      <p>{orderdata.oid}</p>
      <p>{orderdata.artikelanzahl_gesamt}</p>
      <p>{orderdata.gesamtsumme} €</p>
    </div>
  );
}
