import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`Main ${isScrolled ? "scrolled" : ""}`}>
      <div className="leftdiv">
        <h2>AdityaSahni</h2>
      </div>

      <div className="rightdiv">
        <motion.nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          initial={{ opacity: 0, x: 20 }}
          animate={
            menuOpen
              ? { opacity: 1, x: 0, display: "flex" }
              : { opacity: 0, x: 20, transitionEnd: { display: "none" } }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={active === "Home" ? "active" : ""}
            onClick={() => {
              setActive("Home");
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            className={active === "AboutMe" ? "active" : ""}
            onClick={() => {
              setActive("AboutMe");
              setMenuOpen(false);
            }}
          >
            About Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={active === "Projects" ? "active" : ""}
            onClick={() => {
              setActive("Projects");
              setMenuOpen(false);
            }}
          >
            Projects
          </Link>
          <Link
            to="blogs"
            smooth={true}
            duration={500}
            className={active === "Blogs" ? "active" : ""}
            onClick={() => {
              setActive("Blogs");
              setMenuOpen(false);
            }}
          >
            Blogs
          </Link>
          <Link
            to="contact-me"
            smooth={true}
            duration={500}
            className={active === "ContactMe" ? "active" : ""}
            onClick={() => {
              setActive("ContactMe");
              setMenuOpen(false);
            }}
          >
            Contact
          </Link>
        </motion.nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
