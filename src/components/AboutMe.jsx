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
              Hi there! I am a BTech student in Computer Science Engineering
              with a specialization in Artificial Intelligence and Machine
              Learning. As a student, I have always been fascinated by the power
              of technology to transform our world and I am determined to make a
              difference in this field. In addition to my studies, I have also
              taken on various initiatives and projects to develop my skills and
              gain real-world experience. I am a freelance developer, providing
              services to clients and helping them achieve their goals through
              technology. Additionally, I am also a Product Development Intern
              at Travis, where I work on cutting-edge projects and collaborate
              with a team of experts in the field. Through my experiences, I
              have honed my skills in machine learning, deep learning, computer
              vision, and natural language processing. I am passionate about
              using these skills to develop innovative solutions that solve
              real-world problems and make a positive impact on society. My
              ultimate goal is to become a leading expert in the field of
              Artificial Intelligence and Machine Learning and to use my skills
              and knowledge to help build a better future for us all. Thank you
              for visiting my website! I hope you find my work and experiences
              inspiring and look forward to connecting with you soon.
            </p>
          </div>
          <div className="skills">
            <div className="skill-heading">
            <h3>Skills</h3>
            </div>
            <div className="skill-content">
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
