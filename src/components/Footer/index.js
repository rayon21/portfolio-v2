import React from "react";
import "./style.css";

const Footer = ({ style, hidePlaceholder }) => (
  <>
    {!hidePlaceholder && <div className="placeholder"></div>}
    <footer className="footer" style={style}>
      <nav>
        <a href="" className="footer__link">
          Github
        </a>
        <a href="" className="footer__link">
          LinkedIn
        </a>
        <a href="" className="footer__link">
          Behance
        </a>
      </nav>
      <span className="footer__copyright">
        Raymond Eng © {new Date().getFullYear()}
      </span>
    </footer>
  </>
);

export default Footer;
