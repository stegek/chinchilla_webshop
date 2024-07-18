import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ loginData, setLoginData }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleCredentials = (e) => {
    const { value, name } = e.target;

    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const bodyData = JSON.stringify(credentials);

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    })
      .then((response) => response.json())
      .then((data) => setLoginData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (loginData.uid) {
      navigate("/user");
    }
  }, [loginData]);

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
              type="password"
              name="password"
              onChange={handleCredentials}
              value={credentials.password}
            />
            <br />
            {loginData && (
              <p
                className={
                  loginData.message === "Login erfolgreich" ? "true" : "false"
                }
              >
                {loginData.message}
              </p>
            )}
            <input
              className="submit"
              type="submit"
              value="Abschicken"
              onClick={(e) => handleLogin(e)}
            />
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
