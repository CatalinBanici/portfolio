import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
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
        <BsSun />
        <label className="switch">
          <input readOnly type="checkbox" />
          <span className="slider round"></span>
        </label>
        <BsMoon />
      </div>
    </>
  );
}
