import React from "react";
import Navbar from "../root-page/components/Navbar";
import { Outlet } from "react-router-dom";

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
