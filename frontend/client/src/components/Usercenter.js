import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsercenterItem from "./UsercenterItem";

export default function Usercenter({ user_name, setUser, user_data }) {
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser([]);
  };

  useEffect(() => {
    if (!user_name) {
      navigate("/");
    }
  }, [user_name]);

  return (
    <div>
      <h1>{user_name}</h1>
      <p>(Für Detailinfo auf Bestellung klicken)</p>

      <div className="usercenter-card userheader">
        <p>Datum</p>
        <p>Bestellnummer</p>
        <p>Artikelanzahl</p>
        <p>Gesamtsumme</p>
      </div>
      {user_name && (
        <div>
          {user_data.map((order) => {
            return <UsercenterItem orderdata={order} />;
          })}
        </div>
      )}
      <button className="payment-button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}
