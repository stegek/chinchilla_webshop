import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="route-img" src="home.png" alt="home" />
          </Link>
        </li>
        <li className="nav-item">dummy1</li>
        <li className="nav-item">dummy2</li>
        <li className="nav-item">dummy3</li>
        <li className="nav-item">dummy4</li>
        <li className="nav-item">dummy5</li>
        <li className="nav-item">dummy6</li>

        <li className="navbar-cart">
          <Link to="/warenkorb">
            <img className="route-img" src="cart.png" alt="cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
