import React, { useState } from "react";

const Project = ({ title, image, description }) => {
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
        <div className="overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Project;
