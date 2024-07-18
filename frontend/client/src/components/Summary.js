import React from "react";
import { useNavigate } from "react-router-dom";
import SummaryItem from "./SummaryItem";
import { saveData } from "../utilities/savingUtilities";

export default function Summary({
  products,
  warenkorb,
  payment,
  orders,
  user,
  reset,
  logUser,
}) {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalOrder = {
      orderdata: orders,
      paymentdata: payment,
      userdata: user,
      loguser: logUser,
    };

    saveData(finalOrder);

    reset();

    navigate("/final");
  };

  return (
    <div>
      <h1>Summary</h1>
      <div className="warenkorb">
        {warenkorb.map((id) => {
          const product = products.find((product) => product.id === id);
          const order = orders.find((order) => order.id === id);
          return <SummaryItem key={order.id} product={product} order={order} />;
        })}
      </div>
      <div>
        <p>{payment}</p>
      </div>
      <button className="payment-button" onClick={handleSubmit}>
        Bestellung abschicken
      </button>
    </div>
  );
}
