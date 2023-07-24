import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../root-page/components/Navbar";

import "./RootPage.css";

export default function RootPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
