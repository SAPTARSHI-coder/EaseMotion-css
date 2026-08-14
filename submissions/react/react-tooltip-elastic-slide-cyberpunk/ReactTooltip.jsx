import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Cyberpunk Tooltip",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`tooltip-wrapper ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`tooltip-box ${
          show ? "ease-slide-in elastic-show" : "elastic-hide"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;