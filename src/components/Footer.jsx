import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="childfooter">
        <div className="leftfooter">
          <p>© 2025 AdityaSahni. All rights reserved.</p>
        </div>
        <div className="rightfooter">
          <a
            href="https://www.linkedin.com/in/adityasahni04/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Adityasahni04"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
