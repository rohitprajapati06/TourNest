import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./NavBar.css";
import {
  FaCameraRetro,
  FaClipboardList,
  FaHome,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaUmbrellaBeach,
} from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleRedirect = (path) => {
    navigate(path); // Redirect to the specified path
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="mylogo.jpg" alt="Logo" className="logo-image" />
        <span className="logo-text">
          Tour<span className="logo-highlight">Nest</span>
        </span>
      </div>

      <ul className="nav-links">
        <li className={`nav-home ${activeLink === "home" ? "active" : ""}`}>
          <a href="#home" onClick={() => handleLinkClick("home")}>
            <FaHome className="nav-icon" /> Home
          </a>
        </li>
        <li className={`nav-tours ${activeLink === "tours" ? "active" : ""}`}>
          <a href="#tours" onClick={() => handleLinkClick("tours")}>
            <FaUmbrellaBeach className="nav-icon" /> Tours
          </a>
        </li>
        <li className={`nav-flights ${activeLink === "flights" ? "active" : ""}`}>
          <a href="#flights" onClick={() => handleLinkClick("flights")}>
            <FaPlaneDeparture className="nav-icon" /> Flights
          </a>
        </li>
        <li className={`nav-blogs ${activeLink === "blogs" ? "active" : ""}`}>
          <a href="#blogs" onClick={() => handleLinkClick("blogs")}>
            <FaCameraRetro className="nav-icon" /> Blogs
          </a>
        </li>
        <li
          className={`nav-emergency ${
            activeLink === "emergency" ? "active" : ""
          }`}
        >
          <a
            href="./EmergencyContact"
            onClick={() => handleLinkClick("emergency")}
          >
            <FaPhoneAlt className="nav-icon" /> Emergency Contact
          </a>
        </li>
        <li
          className={`nav-insurance ${
            activeLink === "insurance" ? "active" : ""
          }`}
        >
          <a href="#travel-insurance" onClick={() => handleLinkClick("insurance")}>
            <FaClipboardList className="nav-icon" /> Travel Insurance
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="signup-btn" onClick={() => handleRedirect("/register")}>
          Sign Up
        </button>
        <button className="login-btn" onClick={() => handleRedirect("/login")}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
