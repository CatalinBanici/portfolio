import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div>
      <div>
        <img src={project?.preview} alt="project placeholder" />
      </div>
      project
      <section>
        <h3>{project?.name}</h3>
        <p>{project?.description}</p>
        <hr />
        <h4>Tools used:</h4>
        {project.tools.map((tool, index) => (
          <div key={index}>
            <img src={tool?.toolIcon} alt={tool?.toolName} />
            <p>{tool?.toolName}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
