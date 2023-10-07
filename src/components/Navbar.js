import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <Link to="/"className="family">We Can Code</Link>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className="navbar-menu flex nav justify-center text-center">
        
        <li>
        <Link to="/about">About</Link>
          
        </li>
        <li>
          <a href="#vision">Vision</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        
        <li>
        <Link to="/event">Events</Link>
        </li>
        <li>
        <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <a href="#ContactUs">Contact Us</a>
        </li>
        <li>
        <Link to="/joinus">Join Us</Link>
        </li>
        <li>
        <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
