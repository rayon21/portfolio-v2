import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CircleCursor = () => {
  const cursor = useRef();
  const [position, setPostion] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [radius, setRadius] = useState(50);

  const updateCursor = (e) => {
    setPostion({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setHidden(false);
  const handleMouseLeave = () => setHidden(true);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      updateCursor(e);
    });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div
      className="circle-cursor"
      ref={cursor}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: hidden ? 0 : `${radius}px`,
        height: hidden ? 0 : `${radius}px`,
      }}
    ></div>
  );
};

export default CircleCursor;
