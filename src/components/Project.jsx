import React, { useState } from "react";

const Project = ({ title, image, description,gitLink,videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="overlay" onClick={() => window.open(gitLink, "_blank")}>
        {/* <h3>{title}</h3>
        <p>{description}</p> */}
       <video src={videoSrc} loop autoPlay muted className="project-video"></video>
      </div>      
      )}
    </div>
  );
};

export default Project;
