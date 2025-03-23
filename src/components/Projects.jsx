import React from "react";
import Project from "./Project";  
import '../Styles/Project.css';

const projectList = [
  { 
    id: 1, 
    title: "DeployVerse", 
    image: "/images/1.png", 
    description: "A full-stack platform to host your sites in one click", 
    gitLink: "https://github.com/Prachand07/DVBack/tree/main",
    videoSrc: "/video/Deployverse12.mp4"
  },
  { 
    id: 2, 
    title: "TripTogether", 
    image: "/images/4.png", 
    description: "A personal portfolio showcasing my projects and skills.", 
    gitLink: "https://github.com/Adityasahni04/TripTogether",
    videoSrc: "/video/trip.mp4"
  },
  { 
    id: 3, 
    title: "EventAxis", 
    image: "/images/2.png", 
    description: "An app to manage tasks efficiently with deadlines and priorities.", 
    gitLink: "https://github.com/Adityasahni04/EventAxis",
    videoSrc: "/video/EventAxis.mp4"
  },
  // { 
  //   id: 4, 
  //   title: "SkyForm", 
  //   image: "/images/34.png", 
  //   description: "A branding project for a startup including logo and marketing materials.", 
  //   gitLink: "/",
  //   videoSrc: "/"
  // },
  // { 
  //   id: 5, 
  //   title: "WebAuthencity", 
  //   image: "/images/35.png", 
  //   description: "A weather app that provides real-time weather updates and forecasts.", 
  //   gitLink: "/",
  //   videoSrc: "/"
  // },
  // { 
  //   id: 6, 
  //   title: "VibeVista", 
  //   image: "/images/6.png", 
  //   description: "An AI-powered sentiment analysis system using AWS Comprehend.", 
  //   gitLink: "https://github.com/yourgithub/VibeVista",
  //   videoSrc: "/video/vibevista.mp4"
  // },
];

const Projects = () => {
  return (
    <div className="mainProjects">
      <h3>What I’ve Built</h3>
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
