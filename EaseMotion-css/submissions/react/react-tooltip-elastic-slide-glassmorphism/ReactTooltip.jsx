import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Glassmorphism Tooltip",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`glass-tooltip-wrapper ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`glass-tooltip ${
          show ? "ease-slide-in ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;