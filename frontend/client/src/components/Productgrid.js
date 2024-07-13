import React, { useState } from "react";
import Productitem from "./Productitem";

export default function Productgrid({
  products,
  warenkorb,
  toggleWarenkorb,
  dispatch,
  searchState,
}) {
  const searchStateValue = searchState.searchState;

  const matchSearchTerm = (product, searchStateValue) => {
    return product.name.toLowerCase().includes(searchStateValue.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    matchSearchTerm(product, searchStateValue)
  );

  return (
    <div>
      <div className="product-grid">
        {filteredProducts.map((product) => {
          return (
            <Productitem
              product={product}
              toggleWarenkorb={toggleWarenkorb}
              isInWarenkorb={warenkorb.includes(product.id)}
              key={product.id}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    </div>
  );
}
