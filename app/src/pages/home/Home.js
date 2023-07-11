import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import { FiInfo } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-message-container">
        <h1>Hello!</h1>
        <h2>My name is Catalin</h2>
        <h3>Welcome to my portfolio website!</h3>
      </div>
      <div className="home-cards-container">
        <div className="about-contact-cards">
          <div className="about-card">
            <Link to="about">
              <div>
                <p>Find out about me and my skills.</p>
                <FiInfo className="svg" />
              </div>
              <h2>About</h2>
            </Link>
          </div>
          <div className="contact-card">
            <Link to="contact">
              <div>
                <p>Do you have any questions? Send me a message!</p>
                <FiSend className="svg" />
              </div>
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
        <div className="projects-card">
          <Link to="projects">
            <div>
              <p>Check out my work so far.</p>
              <FiBriefcase className="svg" />
            </div>
            <h2>Projects</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
