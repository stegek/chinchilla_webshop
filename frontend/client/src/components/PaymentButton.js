import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentButton({ link, buttonInfo }) {
  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(link);
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonInfo}</button>
    </div>
  );
}
