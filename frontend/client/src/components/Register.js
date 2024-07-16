import React, { useState } from "react";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [registerInfo, setRegisterInfo] = useState([]);

  const handleRegisterData = (e) => {
    const { value, name } = e.target;

    setRegisterData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyData = JSON.stringify(registerData);
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    })
      .then((response) => response.json())
      .then((data) => setRegisterInfo(data))
      .catch((error) => console.log(error));

    setRegisterData({
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div>
      <div className="register-container">
        <div className="register">
          <h2>Registrierung</h2>
          <h4>(Passwort min. 10 Zeichen)</h4>

          <form>
            <input
              placeholder="E-Mail Adresse eingeben..."
              type="text"
              name="email"
              onChange={handleRegisterData}
              value={registerData.email}
            />
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
            {registerInfo && (
              <p className={registerInfo.result === true ? "true" : "false"}>
                {registerInfo.message}
              </p>
            )}

            <input
              className="submit"
              type="submit"
              value="Abschicken"
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
