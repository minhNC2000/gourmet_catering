import React from "react";
import  hamburger  from "../assets/imgs/hamburger.jpg";
import "../assets/scss/header.scss"
export default function Header() {
  return (
    <header id="home" className="home">
      <img src={hamburger} alt="hamburger"  />
      <div className="home__title">
        <h1>Le catering</h1>
      </div>
    </header>
  );
}
