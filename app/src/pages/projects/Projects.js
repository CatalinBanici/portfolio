import React, { useContext } from "react";

import { AppContext } from "../../App";

import ProjectCard from "./components/ProjectCard";

import "./Projects.css";

export default function Projects() {
  const { data } = useContext(AppContext);
  return (
    <div className="projects-container">
      {data.projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}
