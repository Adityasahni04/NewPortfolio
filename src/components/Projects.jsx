import React from "react";
import Project from "./Project";  
import '../Styles/Project.css'

const projectList = [
  { id: 1, title: "E-commerce Platform" },
  { id: 2, title: "Portfolio Website" },
  { id: 3, title: "Task Management App" },
  { id: 4, title: "Brand Identity" },
  { id: 5, title: "Weather Dashboard" },
  { id: 6, title: "Fitness Tracker" },
];

const Projects = () => {
  return (
    <div className="project-container">
      {projectList.map((project) => (
        <Project key={project.id} title={project.title} />
      ))}
    </div>
  );
};

export default Projects;
