import React from "react";

const Project = ({ title }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="buttons">
        <button>View Project</button>
        <button>Code</button>
      </div>
    </div>
  );
};

export default Project;
