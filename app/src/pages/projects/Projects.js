import React, { useContext } from "react";

import { AppContext } from "../../App";

import ProjectCard from "./components/ProjectCard";

import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const { data } = useContext(AppContext);
  return (
    <div className="projects-container">
      <div className="projects-header">
        <p>
          These are my best projects so far. <br /> If you wish to see all my
          projects, check out my{" "}
          <Link target="blank" to={data.links.github}>
            Github
          </Link>{" "}
          and{" "}
          <Link target="blank" to={data.links.frontEndMentor}>
            Frontend Mentor
          </Link>{" "}
          pages!
        </p>
      </div>
      <div className="projects-wrapper">
        {data.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
