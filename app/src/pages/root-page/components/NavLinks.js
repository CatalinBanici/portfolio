import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </>
  );
}
