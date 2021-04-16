import React from "react";
import "./style.scss";

const Footer = ({ style, hidePlaceholder }) => (
  <>
    {!hidePlaceholder && <div className="placeholder"></div>}
    <footer className="footer" style={style}>
      <nav>
        <a href="https://github.com/rayon21" className="footer__link">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/raymondeng-"
          className="footer__link"
        >
          LinkedIn
        </a>
        <a href="https://www.behance.net/" className="footer__link">
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
