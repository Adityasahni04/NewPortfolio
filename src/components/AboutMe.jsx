import React from "react";
import "../Styles/About.css";
const AboutMe = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1Pq0FyYfN37FoKLAmSMjNy7YzOa89vXtB/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <section id="about">
      <div className="container">
        <h3>Who am I?</h3>
        <h2 className="h2">About Me</h2>
        <div className="contentaboutme">
          <div className="image-container">
            <img src="/images/adi1.jpg" alt="Profile" />
          </div>
          <div className="aboutcontent">
            <p>
              I'm a passionate developer with a keen eye for design and a
              commitment to creating intuitive user experiences. With a
              background in Cloud Computing, I bring a unique perspective to
              every project.
            </p>
            <p>
              My approach combines technical expertise with creative
              problem-solving, allowing me to build solutions that are both
              functional and aesthetically pleasing.
              <br />
              {/* <button onClick={handleDownload}>
                Download CV
              </button> */}
            </p>

            <div className="skills-container">
              <h3>My Skills</h3>
              <div className="skills-list">
                {[
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Docker",
                  "AWS",
                  "SQL",
                ].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
