import React from "react";

export default function OrderviewItem({ order }) {
  return (
    <div className="orderview-card">
      <img
        className="productimage-warenkorb"
        src={`/images/${order.pid}.png`}
        alt={`${order.name}`}
      />
      <p>{order.name}</p>
      <p>
        {order.mengenanzahl} {order.mengeneinheit}
      </p>
      <p>{order.preis} €</p>
      <p>{order.menge}</p>
    </div>
  );
}
