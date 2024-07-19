import React from "react";

export default function Payment({ payment, changePayment, user, setUser }) {
  function handleInput(event) {
    const { value, name } = event.target;

    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  const today = new Date();
  let deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);
  deliveryDate = deliveryDate.toISOString().split("T")[0];

  let delivery = "";

  payment === "Nachname"
    ? (delivery = deliveryDate)
    : (delivery = "Nach Bezahlung");

  return (
    <div>
      <h2>Zahlungsmethoden und Lieferadresse</h2>
      <div>
        <fieldset
          value={payment}
          onChange={(e) => changePayment(e.target.value)}
        >
          <legend>Wählen Sie Ihre Bezahlmethode:</legend>

          <div>
            <input
              type="radio"
              id="vk"
              name="drone"
              value="Vorkasse"
              checked={payment === "Vorkasse"}
              onChange={(e) => changePayment(e.target.value)}
            />
            <label for="vk">Vorkasse</label>
          </div>

          <div>
            <input
              type="radio"
              id="nk"
              name="drone"
              value="Nachname"
              checked={payment === "Nachname"}
              onChange={(e) => changePayment(e.target.value)}
            />
            <label for="nk">Nachname</label>
          </div>
        </fieldset>
      </div>
      <div className="user-data">
        <fieldset>
          <legend>Geben Sie bitte die Lieferdaten ein:</legend>
          <div className="delivery-box">
            <input
              type="text"
              value={user.firstname}
              onChange={handleInput}
              name="firstname"
              placeholder="Vorname"
            />
          </div>
          <div className="delivery-box">
            <input
              type="text"
              value={user.lastname}
              onChange={handleInput}
              name="lastname"
              placeholder="Nachname"
            />
          </div>
          <div className="delivery-box">
            <input
              type="text"
              value={user.adress}
              onChange={handleInput}
              name="adress"
              placeholder="Strasse und Hausnummer"
            />
          </div>
          <div className="delivery-box">
            <input
              type="text"
              value={user.zip}
              onChange={handleInput}
              name="zip"
              placeholder="Postleitzahl"
            />
          </div>
          <div className="delivery-box">
            <input
              type="text"
              value={user.city}
              onChange={handleInput}
              name="city"
              placeholder="Ort"
            />
          </div>
        </fieldset>
      </div>
      <div>
        <h3>Voraussichtliche Lieferung:</h3>
        <p>{delivery}</p>
      </div>
    </div>
  );
}
