import React, { useState } from "react";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleRegisterData = (e) => {
    const { value, name } = e.target;

    setRegisterData((prev) => {
      return { ...prev, [name]: value };
    });
  };

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
              onChange={handleRegisterData}
              value={registerData.email}
            />{" "}
            <br />
            <input
              placeholder="Password eingeben..."
              type="text"
              name="password"
              onChange={handleRegisterData}
              value={registerData.password}
            />
            <br />
            <input
              placeholder="Password wiederholen..."
              type="text"
              name="password2"
              onChange={handleRegisterData}
              value={registerData.password2}
            />
            <br />
            <input type="submit" value="Abschicken" />
          </form>
        </div>
      </div>
    </div>
  );
}
