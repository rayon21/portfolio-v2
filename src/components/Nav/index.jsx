import React, { useState, useRef } from "react";
import "./style.css";
import { Link } from "../Router";
import useOutsideClick from "../../util/useOutsideClick";
import SocialMediaIcons from "../SocialMediaIcons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayMenuRef = useRef();

  useOutsideClick(overlayMenuRef, () => isOpen && setIsOpen(false));

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <Link className="nav__link" to="/">
          <div className="nav__brand-container">
            <svg
              className="nav__logo"
              fill="none"
              height="2500"
              viewBox="-29.30425536 -37.58357022 469.33352958 496.22652001"
              width="2500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="blue">
                <path d="m131.967 298.073a28.186 28.186 0 0 1 -33.688 27.647 28.185 28.185 0 0 1 -22.147-22.147 28.19 28.19 0 0 1 47.579-25.432 28.19 28.19 0 0 1 8.256 19.932zm245.94-29.342a292.167 292.167 0 0 0 -247.602-247.602 185.334 185.334 0 0 0 -40.95 29.522v27.236a231.984 231.984 0 0 1 231.795 231.603h27.237a195.21 195.21 0 0 0 29.521-40.759z" />
                <path d="m399.961 183.228a183.219 183.219 0 0 0 -113.768-169.553 183.225 183.225 0 0 0 -70.41-13.673c-6.475 0-12.761 0-19.046.953l-4.19 12.19a315.224 315.224 0 0 1 193.13 192.939l12.189-4.381c0-6.095 1.143-12.19 1.143-19.046m-181.118 217.307a217.891 217.891 0 0 1 -217.89-216.938 216.367 216.367 0 0 1 63.805-154.085l12.38 11.619a201.127 201.127 0 0 0 0 285.695 201.133 201.133 0 0 0 285.695 0l11.619 11.618a216.184 216.184 0 0 1 -155.609 62.091z" />
                <path d="m215.438 322.074a126.65 126.65 0 0 0 -49.711-112.564 123.998 123.998 0 0 0 -63.805-25.903 11.615 11.615 0 0 1 -10.095-12.189 11.24 11.24 0 0 1 7.945-9.865 11.222 11.222 0 0 1 4.436-.42 149.516 149.516 0 0 1 133.324 163.417 130.44 130.44 0 0 1 -4.952 25.713l33.14 9.332a183.963 183.963 0 0 0 28.57-10.856 202.753 202.753 0 0 0 3.619-39.045 209.512 209.512 0 0 0 -177.702-206.843 92.199 92.199 0 0 0 -33.332 0 72.567 72.567 0 0 0 -35.997 22.284 71.234 71.234 0 0 0 31.807 114.278 164.882 164.882 0 0 0 17.904 3.238 66.856 66.856 0 0 1 55.615 65.9 66.09 66.09 0 0 1 -10.666 35.998l22.856 14.666a169.675 169.675 0 0 0 34.283 5.713 125.335 125.335 0 0 0 12.571-43.806" />
              </g>
            </svg>
            <span class="nav__logo-name">raymond eng</span>
          </div>
        </Link>
        <div className="nav__links">
          <Link className="nav__link" to="/">
            Home
          </Link>
          <Link className="nav__link" to="/work">
            Work
          </Link>
          <Link className="nav__link" to="/style-guide">
            Style Guide
          </Link>
        </div>
      </nav>
      <div
        className="hamburger"
        onClick={handleMenuClick}
        aria-label="Toggle the menu"
        role="button"
        aria-expanded={isOpen}
      >
        <div
          className="hamburger__bar"
          style={{
            transform: isOpen ? "rotate(45deg)" : "none",
            marginBottom: isOpen ? 0 : "0.5rem",
          }}
        ></div>
        <div
          className="hamburger__bar"
          style={{
            transform: isOpen ? "rotate(-45deg)" : "none",
            marginBottom: isOpen ? 0 : "0.5rem",
          }}
        ></div>
      </div>
      <nav
        className="overlay-nav"
        style={{ right: isOpen ? 0 : "-100%" }}
        ref={overlayMenuRef}
      >
        <div>
          <Link
            className="nav__link nav__link-overlay"
            to="/"
            onClick={handleOverlayNavLinkClick}
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(2rem)",
            }}
          >
            Home
          </Link>
          <Link
            className="nav__link nav__link-overlay"
            to="/work"
            onClick={handleOverlayNavLinkClick}
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(2rem)",
            }}
          >
            Work
          </Link>
          <Link
            className="nav__link nav__link-overlay"
            to="/style-guide"
            onClick={handleOverlayNavLinkClick}
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(2rem)",
            }}
          >
            Style Guide
          </Link>
        </div>
        <SocialMediaIcons />
      </nav>
    </div>
  );
};

export default Nav;
