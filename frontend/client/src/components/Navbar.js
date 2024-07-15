import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ searchDispatch }) {
  const [navSearch, setNavSearch] = useState("");

  const handleNavSearch = (e) => {
    const inputValue = e.target.value;
    searchDispatch({ type: "INPUT", payload: inputValue });
    setNavSearch(e.target.value);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              className="home-img"
              src="homechin.png"
              alt="home"
              onMouseOver={(e) => (e.currentTarget.src = "homechinHover.png")}
              onMouseOut={(e) => (e.currentTarget.src = "homechin.png")}
            />
          </Link>
        </li>
        <li className="nav-item">dummy1</li>
        <li className="nav-item">dummy2</li>
        <li className="nav-item">dummy3</li>
        <li className="nav-search">
          <input
            type="text"
            placeholder="Enter productname ..."
            value={navSearch}
            onChange={handleNavSearch}
            className="search-input"
          ></input>
        </li>
        <li className="nav-item">dummy5</li>
        <li>
          <Link to="/login">
            <img
              className="route-img"
              src="logIn.png"
              alt="log-in"
              onMouseOver={(e) => (e.currentTarget.src = "logInHover.png")}
              onMouseOut={(e) => (e.currentTarget.src = "logIn.png")}
            />
          </Link>
        </li>

        <li className="navbar-cart">
          <Link to="/warenkorb">
            <img
              className="route-img"
              src="cart.png"
              alt="cart"
              onMouseOver={(e) => (e.currentTarget.src = "cartHover.png")}
              onMouseOut={(e) => (e.currentTarget.src = "cart.png")}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
