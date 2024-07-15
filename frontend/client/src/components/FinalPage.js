import React from "react";
import "../styles.css";

export default function FinalPage(payment) {
  return (
    <div>
      <h2>
        {payment.payment === "Nachname"
          ? "Bestellung ist unterwegs"
          : "Bitte überweisen Sie den Betrag auf folgendes Konto:"}
      </h2>
      {payment.payment === "Vorkasse" && (
        <div>
          <p>IBAN</p>
          <p>BIC</p>
          <p>Kontoinhaber</p>
        </div>
      )}
      <img
        className="final-img"
        src="final_nachname.jpg"
        alt="grey Chinchilla"
      />
      <h3>Vielen Dank für Ihren Einkauf !</h3>
    </div>
  );
}
