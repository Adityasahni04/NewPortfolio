import React from "react";
import Project from "./Project";  
import '../Styles/Project.css';

const projectList = [
  { id: 1, title: "DeployVerse", image: "/images/", description: "A full-stack platform to host your sites in oneclick" },
  { id: 2, title: "TripTogether", image: "/images/Project1.jpeg", description: "A personal portfolio showcasing my projects and skills." },
  { id: 3, title: "Task Management App", image: "/images/task-app.jpg", description: "An app to manage tasks efficiently with deadlines and priorities." },
  { id: 4, title: "Brand Identity", image: "/images/brand.jpg", description: "A branding project for a startup including logo and marketing materials." },
  { id: 5, title: "Weather Dashboard", image: "/images/weather.jpg", description: "A weather app that provides real-time weather updates and forecasts." },
  { id: 6, title: "Fitness Tracker", image: "/images/fitness.jpg", description: "A fitness tracking app that monitors workouts and calories burned." },
];

const Projects = () => {
  return (
    <div className="mainProjects">
       <h1>Projects</h1>
       <div className="project-container">
      {projectList.map((project) => (
        <Project key={project.id} title={project.title} image={project.image} description={project.description} />
      ))}
    </div>
    </div>
  );
};

export default Projects;
