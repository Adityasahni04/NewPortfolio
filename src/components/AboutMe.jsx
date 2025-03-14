import React from 'react';
import '../Styles/About.css'
const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className='h2'>About Me</h2>
        <div className="contentaboutme">
          <div className="image-container">
            <img src="/images/bulb-off.png" alt="Profile" />
          </div>
          <div className="aboutcontent">
            <p>
              I'm a passionate developer with a keen eye for design and a commitment to creating intuitive user
              experiences. With a background in Cloud Computing, I bring a unique perspective to every project.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving, allowing me to build solutions
              that are both functional and aesthetically pleasing.
            </p>

           
            <div className="skills-container">
              <h3>My Skills</h3>
              <div className="skills-list">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Node.js"].map((skill) => (
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
