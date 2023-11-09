import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import 'animate.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-brand ">
        <Link to="/"className="family">We Can Code</Link>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className="navbar-menu flex nav justify-center text-center ">
        
        <li className="animate__animated animate__flip">
        <Link to="/about">About</Link>
          
        </li>
        <li className="animate__animated animate__flip">
          <a href="#vision">Vision</a>
        </li>
        <li className="animate__animated animate__flip">
          <a href="#team">Team</a>
        </li>
        
        <li className="animate__animated animate__flip">
        <Link to="/event">Events</Link>
        </li>
        <li className="animate__animated animate__flip ">
        <Link to="/gallery">Gallery</Link>
        </li>
        <li className="animate__animated animate__flip">
          <a href="#ContactUs">Contact Us</a>
        </li>
        <li className="animate__animated animate__flip">
        <Link to="/joinus">Join Us</Link>
        </li>
        <li className="animate__animated animate__flip">
        <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
