import React from "react";
import Project from "./Project";  
import '../Styles/Project.css';

const projectList = [
  { 
    id: 1, 
    title: "DeployVerse", 
    image: "/images/1.png", 
    description: "A full-stack platform to host your sites in one click", 
    gitLink: "https://github.com/yourusername/deployverse",
    videoSrc: "/images/v.mp4"
  },
  { 
    id: 2, 
    title: "TripTogether", 
    image: "/images/4.png", 
    description: "A personal portfolio showcasing my projects and skills.", 
    gitLink: "https://github.com/yourusername/triptogether",
    videoSrc: "/images/v1.mp4"
  },
  { 
    id: 3, 
    title: "Task Management App", 
    image: "/images/2.png", 
    description: "An app to manage tasks efficiently with deadlines and priorities.", 
    gitLink: "https://github.com/yourusername/task-management-app",
    videoSrc: "/images/sample.mp4"
  },
  { 
    id: 4, 
    title: "Brand Identity", 
    image: "/images/34.png", 
    description: "A branding project for a startup including logo and marketing materials.", 
    gitLink: "https://github.com/yourusername/brand-identity",
    videoSrc: "/images/69.mp4"
  },
  { 
    id: 5, 
    title: "Weather Dashboard", 
    image: "/images/35.png", 
    description: "A weather app that provides real-time weather updates and forecasts.", 
    gitLink: "https://github.com/yourusername/weather-dashboard",
    videoSrc: "/images/test.mp4"
  },
  { 
    id: 6, 
    title: "Fitness Tracker", 
    image: "/images/31.png", 
    description: "Serverless form handler that sends static site form submissions to email—no backend required", 
    gitLink: "https://github.com/yourusername/fitness-tracker",
    videoSrc: "/images/v.mp4"
  }
];

const Projects = () => {
  return (
    <div className="mainProjects">
      <h3>What I Did ?</h3>
       <h1>Projects</h1>
       <div className="project-container">
      {projectList.map((project) => (
        <Project 
          key={project.id} 
          title={project.title} 
          image={project.image} 
          description={project.description} 
          gitLink={project.gitLink}
          videoSrc={project.videoSrc}
        />
      ))}
    </div>
    </div>
  );
};

export default Projects;
