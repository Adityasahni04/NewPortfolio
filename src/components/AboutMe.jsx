import React from "react";
import "../Styles/About.css";
const AboutMe = () => {
  return (
    <div className="about-Component">
      <div className="aboutHeading">
        <div className="heading1">
          <h3>Who Am I ?</h3>
        </div>
        <div className="heading2">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="about-content">
        <div className="left-container">
          <img src="/images/adi1.jpg" alt="" />
        </div>
        <div className="right-container">
          <div className="aboutme">
            <p>
              I’m a Computer Science student specializing in Cloud Computing and
              Virtualization. Technology’s ability to simplify complex tasks and
              improve lives has always fascinated me. While machines can
              automate processes, I believe humans drive true
              innovation—combining creativity with technical skills to solve
              real problems. My studies focus on understanding how systems work
              “under the hood” and turning that knowledge into practical
              solutions.
            </p>
            <p>
              I’ve worked on web development, DevOps, and cloud-based projects
              to build hands-on experience. From creating user-friendly apps to
              automating workflows, I enjoy turning ideas into tools that make
              tasks easier. These projects have taught me how to design flexible
              systems and collaborate effectively to deliver results.
            </p>
            <p>
              I want to build technology that reduces repetitive work, saves
              time, and helps people focus on what matters. Whether it’s
              improving cloud tools or designing intuitive software, I aim to
              create solutions that empower others. Let’s connect and work on
              ideas that make a difference!
            </p>
          </div>
          <div className="skills">
            <div className="skill-heading">
              <h3>Skills</h3>
            </div>
            <div className="skill-content">
              <span>HTML</span>
              <span>React</span>
              <span>Node js</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>MySQL</span>
              <span>Java</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
