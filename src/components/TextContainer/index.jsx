import React from "react";
import "./style.css";

const TextContainer = ({ title, subtitle, children }) => (
  <section className="style__content">
    <span className="text-container__subtitle">{subtitle}</span>
    <h2 className="text-container__heading">{title}</h2>
    {children}
  </section>
);

export default TextContainer;
