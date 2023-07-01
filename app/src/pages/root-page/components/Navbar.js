import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  return (
    <>
      <div>
        <Logo />
      </div>
      <nav>
        <NavLinks />
      </nav>
      <div>
        <ThemeSelector />
      </div>
    </>
  );
}
