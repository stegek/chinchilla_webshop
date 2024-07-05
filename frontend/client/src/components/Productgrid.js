import React, { useState } from "react";
import Productitem from "./Productitem";

export default function Productgrid({
  products,
  warenkorb,
  toggleWarenkorb,
  dispatch,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const matchSearchTerm = (product, searchTerm) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    matchSearchTerm(product, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter productname ..."
        value={searchTerm}
        onChange={handleSearchTerm}
        className="search-input"
      ></input>
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
