import React, { useEffect, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./styles.css";
import Productgrid from "./components/Productgrid";
import { Routes, Route } from "react-router-dom";
import Warenkorb from "./components/Warenkorb";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import PaymentButton from "./components/PaymentButton";

import Summary from "./components/Summary";
import orderReducer from "./reducers/orderReducers";
import FinalPage from "./components/FinalPage";

function App() {
  const [products, setProducts] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);
  const [payment, setPayment] = useState("Vorkasse");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    adress: "",
    zip: "",
    city: "",
  });

  const initialState = {
    orders: [],
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(JSON.parse(data)));
  }, [products]);

  const toggleWarenkorb = (productId, order) => {
    setWarenkorb((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const changePayment = (value) => {
    setPayment(value);
  };

  const resetOrderProcess = () => {
    dispatch({ type: "RESET" });
    setWarenkorb([]);

    setUser({
      firstname: "",
      lastname: "",
      adress: "",
      zip: "",
      city: "",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Productgrid
                products={products}
                warenkorb={warenkorb}
                toggleWarenkorb={toggleWarenkorb}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/warenkorb"
            element={
              <div>
                <div>
                  <Warenkorb
                    products={products}
                    warenkorb={warenkorb}
                    toggleWarenkorb={toggleWarenkorb}
                    orders={state.orders}
                    dispatch={dispatch}
                  />
                </div>
                {warenkorb.length > 0 && (
                  <div>
                    <PaymentButton link={"/payment"} buttonInfo={"Zur Kasse"} />
                  </div>
                )}
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div>
                <Payment
                  payment={payment}
                  changePayment={changePayment}
                  user={user}
                  setUser={setUser}
                />
                <PaymentButton
                  link={"/summary"}
                  buttonInfo={"Zur Bestellübersicht"}
                />
              </div>
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                products={products}
                warenkorb={warenkorb}
                payment={payment}
                orders={state.orders}
                user={user}
                reset={resetOrderProcess}
              />
            }
          />
          <Route path="/final" element={<FinalPage payment={payment} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
