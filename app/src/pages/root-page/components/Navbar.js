import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { AppContext } from "../../../App";

export default function Navbar() {
  const { theme, setTheme, themeChanger } = useContext(AppContext);
  return (
    <>
      <div className="logo">
        <NavLink to="/">
          <span>catalin</span>
          <span>banici</span>
          <span>.portfolio</span>
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="about">About</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <div className="theme-container">
        <button className="theme-button" onClick={() => setTheme("light")}>
          <BsSun
            className={theme === "light" ? "sun-icon active" : "sun-icon"}
          />
        </button>

        <label className="switch">
          <input
            checked={theme === "dark"}
            onClick={themeChanger}
            readOnly
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        <button className="theme-button" onClick={() => setTheme("dark")}>
          <BsMoon
            className={theme === "dark" ? "moon-icon active" : "moon-icon"}
          />
        </button>
      </div>
    </>
  );
}
