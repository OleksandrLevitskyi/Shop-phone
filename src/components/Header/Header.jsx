import React from "react";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
import Price from "../Price/Price";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="container">
            <div className="home">
              <NavLink to="/">Home</NavLink>
            </div>
            <Price />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
