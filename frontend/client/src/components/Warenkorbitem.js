import React from "react";

export default function Warenkorbitem({
  product,
  toggleWarenkorb,
  isInWarenkorb,
  order,
  dispatch,
}) {
  const handleMengeChange = (e) => {
    const newOrder = {
      id: order.id,
      preis: order.preis,
      menge: e.target.value,
      total: Math.round(e.target.value * order.preis * 100) / 100,
    };

    dispatch({ type: "UPDATE", payload: newOrder });
  };

  return (
    <div className="warenkorb-card">
      <img
        className="productimage-warenkorb"
        src={`/images/${product.id}.png`}
        alt={`${product.name}`}
      />
      <input
        type="number"
        value={order.menge}
        onChange={handleMengeChange}
        min={1}
        max={product.lagerstand}
      />

      <p>{product.name}</p>
      <p>
        {product.mengenanzahl} {product.mengeneinheit}
      </p>
      <p>{product.preis} €</p>

      <p
        className={`${
          product.lagerstand > 0 ? "lieferbar" : "nicht-lieferbar"
        }`}
      >
        {product.lagerstand > 0 ? "lieferbar" : "nicht auf Lager"}
      </p>
      <input
        className="checkbox-warenkorb"
        type="checkbox"
        checked={isInWarenkorb}
        onChange={() => {
          toggleWarenkorb(product.id);
        }}
      />
    </div>
  );
}
