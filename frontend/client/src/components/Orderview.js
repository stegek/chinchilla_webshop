import React from "react";
import { useLocation } from "react-router-dom";
import OrderviewItem from "./OrderviewItem";

export default function Orderview() {
  const location = useLocation();
  const data = location.state.data.order.data;

  console.log(data);

  return (
    <div>
      <h1> Bestelldatum: {data[0].datum}</h1>
      <h3>Zahlungsmethode: {data[0].zahlungsmethode}</h3>
      <div className="orderview-card">
        <p> </p>
        <p>Artikelbezeichnung</p>
        <p>Menge pro Einheit</p>
        <p>Einzelpreis €</p>
        <p>Bestellmenge</p>
      </div>
      <div>
        {data.map((order) => {
          return <OrderviewItem order={order} key={order.idx} />;
        })}
      </div>
    </div>
  );
}
