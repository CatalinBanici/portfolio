import React, { useContext } from "react";
import ProjectCard from "./components/ProjectCard";
import { AppContext } from "../../App";
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
