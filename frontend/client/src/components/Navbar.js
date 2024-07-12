import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navSearch, setNavSearch] = useState("");

  const handleNavSearch = (e) => {
    setNavSearch(e.target.value);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="home-img" src="homechin.png" alt="home" />
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
        <li className="nav-item">dummy6</li>

        <li className="navbar-cart">
          <Link to="/warenkorb">
            <img className="route-img" src="whitecart.png" alt="cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
