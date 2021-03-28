import React from "react";
import "./style.css";

const Bio = ({ src, text }) => (
  <div className="bio">
    <img src={src} alt="" className="bio__img" />
    <p className="bio__text">{text}</p>
  </div>
);

export default Bio;
