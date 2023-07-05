import React, { useContext } from "react";
import ProjectCard from "./components/ProjectCard";
import { AppContext } from "../../App";

export default function Projects() {
  const { data } = useContext(AppContext);
  return (
    <div>
      {data.projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}
