import React from "react";
import "./style.css";

const Bio = ({ src, text }) => (
  <div className="bio">
    <div className="bio-img__container">
      <img src={src} alt="" className="bio__img" />
    </div>
    <p className="bio__text">{text}</p>
  </div>
);

export default Bio;
