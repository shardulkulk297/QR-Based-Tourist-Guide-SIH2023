import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import FontAwesome hamburger icon
import "../index.css";
import Login from './Login.js'

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <FaBars />
      </div>
      <Link to="" className="nav-link">
        HOME
      </Link>
      <Link to="https://www.makemytrip.com/" className="nav-link">
        TRAVEL
      </Link>
      <Link to="https://www.airbnb.co.in/" className="nav-link">
        HOTELS
      </Link>
      <Link to="http://10.10.14.221:3001/" className="nav-link login-link">
        EXPLORE
      </Link>
    </nav>
  );
};

export default NavigationBar;
