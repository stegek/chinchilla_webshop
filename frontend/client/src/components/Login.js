import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleCredentials = (e) => {
    const { value, name } = e.target;

    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

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
              onChange={handleCredentials}
              value={credentials.email}
            />{" "}
            <br />
            <input
              placeholder="Password eingeben..."
              type="text"
              name="password"
              onChange={handleCredentials}
              value={credentials.password}
            />
            <br />
            <input className="submit" type="submit" value="Abschicken" />
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
