import React from "react";

import Warenkorbitem from "./Warenkorbitem";

export default function Warenkorb({
  products,
  warenkorb,
  toggleWarenkorb,
  orders,
  dispatch,
}) {
  return (
    <div>
      {warenkorb.length !== 0 ? (
        <h2>Warenkorb</h2>
      ) : (
        <h2>Warenkorb ist leer</h2>
      )}
      <div className="warenkorb">
        {warenkorb.map((id) => {
          const product = products.find((product) => product.id === id);
          const order = orders.find((order) => order.id === id);
          return (
            <div>
              <Warenkorbitem
                product={product}
                toggleWarenkorb={toggleWarenkorb}
                isInWarenkorb={true}
                key={product.id}
                order={order}
                dispatch={dispatch}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
