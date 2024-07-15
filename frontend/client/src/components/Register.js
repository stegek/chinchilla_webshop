import React, { useState } from "react";

export default function Register() {
  return (
    <div>
      <div className="register-container">
        <div className="register">
          <h2>Registrierung</h2>

          <form>
            <input
              placeholder="E-Mail Adresse eingeben..."
              type="text"
              name="email"
            />{" "}
            <br />
            <input
              placeholder="Password eingeben..."
              type="text"
              name="password"
            />
            <br />
            <input
              placeholder="Password wiederholen..."
              type="text"
              name="password2"
            />
            <br />
            <input type="submit" value="Abschicken" />
          </form>
        </div>
      </div>
    </div>
  );
}
