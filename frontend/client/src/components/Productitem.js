import React from "react";

export default function Productitem({
  product,
  toggleWarenkorb,
  isInWarenkorb,
  dispatch,
}) {
  const { id, preis } = product;

  const handleToggleWarenkorb = (e) => {
    e.preventDefault();

    const order = {
      id: id,
      preis: preis,
      menge: 1,
      total: 1 * preis,
    };
    toggleWarenkorb(product.id, order);
    isInWarenkorb
      ? dispatch({ type: "REMOVE", payload: { id } })
      : dispatch({ type: "ADD", payload: order });
  };

  return (
    <div className="product-card">
      <img
        className="productimage"
        src={`/images/${product.id}.png`}
        alt={`${product.name}`}
      />
      <div className="product-data">
        <p>{product.name}</p>
        <span>
          {product.mengenanzahl} {product.mengeneinheit}
        </span>
        <span>{product.preis} €</span>
        <div>
          <span
            className={`${
              product.lagerstand > 0 ? "lieferbar" : "nicht-lieferbar"
            }`}
          >
            {product.lagerstand > 0 ? "lieferbar" : "nicht auf Lager"}
          </span>
          <input
            type="checkbox"
            checked={isInWarenkorb}
            onChange={handleToggleWarenkorb}
          />
        </div>
      </div>
    </div>
  );
}
