import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

import { AppContext } from "../../../App";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

export default function Navbar() {
  const { theme, setTheme, themeChanger } = useContext(AppContext);

  const [toggleNavClass, setToggleNavClass] = useState("nav-close");
  const navRef = useRef();

  function toggleNav() {
    if (toggleNavClass === "nav-close") {
      setToggleNavClass("nav-open");
    } else {
      setToggleNavClass("nav-close");
    }
  }

  useEffect(() => {
    function closeNavOnOutsideClick(e) {
      if (
        toggleNavClass === "nav-open" &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setToggleNavClass("nav-close");
      }
    }
    document.addEventListener("mousedown", closeNavOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeNavOnOutsideClick);
    };
  }, [toggleNavClass]);

  return (
    <>
      <div className="logo">
        <NavLink to="/">
          <span>catalin</span>
          <span>banici</span>
          <span>.portfolio</span>
        </NavLink>
        <button onClick={toggleNav}>
          {toggleNavClass === "nav-close" ? (
            <AiOutlineMenu />
          ) : (
            <AiOutlineClose />
          )}
        </button>
      </div>
      <div ref={navRef} className={"nav-links-container " + toggleNavClass}>
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
              tabIndex="-1"
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
      </div>
    </>
  );
}
