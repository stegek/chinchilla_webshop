import React from "react";

export default function SummaryItem({ product, order }) {
  return (
    <div className="summary-card">
      <img
        className="productimage-warenkorb"
        src={`/images/${product.id}.png`}
        alt={`${product.name}`}
      />

      <p>{product.name}</p>
      <p>
        {product.mengenanzahl} {product.mengeneinheit}
      </p>
      <p>{product.preis} €</p>
      <p>Bestellmenge: {order.menge}</p>
      <p>{order.total} €</p>

      <p
        className={`${
          product.lagerstand > 0 ? "lieferbar" : "nicht-lieferbar"
        }`}
      >
        {product.lagerstand > 0 ? "lieferbar" : "nicht auf Lager"}
      </p>
    </div>
  );
}
