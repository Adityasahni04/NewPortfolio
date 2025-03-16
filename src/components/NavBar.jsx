import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Styles/NavBar.css';

const NavBar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="Main">
      <div className="leftdiv">
        <h2>AdityaSahni</h2>
      </div>
      <div className="rightdiv">
        <nav>
          <Link to="home" smooth={true} duration={500} className={active === "Home" ? "active" : ""} onClick={() => setActive("Home")}>
            Home
          </Link>
          <Link to="about-me" smooth={true} duration={500} className={active === "AboutMe" ? "active" : ""} onClick={() => setActive("AboutMe")}>
            About Me
          </Link>
          <Link to="projects" smooth={true} duration={500} className={active === "Projects" ? "active" : ""} onClick={() => setActive("Projects")}>
            Projects
          </Link>
          <Link to="contact-me" smooth={true} duration={500} className={active === "ContactMe" ? "active" : ""} onClick={() => setActive("ContactMe")}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
