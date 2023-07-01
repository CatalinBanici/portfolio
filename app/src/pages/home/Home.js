import React from "react";
import HomeCard from "./components/HomeCard";
import { Link } from "react-router-dom";

export default function Home() {
  const links = ["about", "projects", "contact"];
  return (
    <>
      <h1>Welcome</h1>
      {links.map((element, index) => (
        <Link to={element} key={index}>
          <HomeCard link={element} />
        </Link>
      ))}
    </>
  );
}
