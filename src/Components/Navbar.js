import React from "react";
import "../assets/scss/navbar.scss"
export default function Navbar(props) {
  return (
    <nav className="nav">
    <div className="nav__wrapper">
    <a href="#" className="nav__brand">
        Gourmet au Catering
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#menu" className="nav__link">
            Menu
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
    
      <div className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
