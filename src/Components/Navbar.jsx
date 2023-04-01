import React, { useState } from "react";
import { FaCocktail } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState("#0096FF");
  return (
    <nav>
      <div className="nav">
        <div className="left">
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              if (isActive) setColor("#0096FF");
              else setColor("black");
              return { color: isActive ? "black" : "#0096FF" };
            }}
          >
            <h1>
              {" "}
              <FaCocktail />
              The
              <span style={{ color: color }}>Cocktail</span>
              DB
            </h1>
          </NavLink>
        </div>
        <div className="right">
          <NavLink
            to={"/categories"}
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "#0096FF",
                fontSize: "1.5rem",
              };
            }}
          >
            Categories
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "#0096FF",
                fontSize: "1.5rem",
              };
            }}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
