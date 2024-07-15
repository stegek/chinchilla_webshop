import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h2>Einloggen</h2>

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
            />{" "}
            <br />
            <input type="submit" value="Abschicken" />
          </form>

          <p>Neu bei Chinshop? </p>
          <Link to="../register">
            <p>Jetzt registrieren</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
