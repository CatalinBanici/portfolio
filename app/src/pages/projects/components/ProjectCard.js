import React from "react";
import { Link } from "react-router-dom";

import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-logo">
        <img src={project?.preview} alt="project placeholder" />
        <div className="project-links">
          <Link target="blank" to={project?.urlSrc}>
            Source Code
          </Link>
          <Link target="blank" to={project?.urlLive}>
            Live Page
          </Link>
        </div>
      </div>
      <section className="project-details">
        <h3 className="project-name">{project?.name}</h3>
        <p className="project-description">{project?.description}</p>
        <hr />
        <div className="project-tools-container">
          <h4>Tools used:</h4>
          <div className="tools-wrapper">
            {project.tools.map((tool, index) => (
              <div className="tool" key={index}>
                <img src={tool?.toolIcon} alt={`${tool?.toolName} Logo`} />
                <p>{tool?.toolName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
