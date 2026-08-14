import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Workout Completed!",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`fitness-tooltip-wrapper ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`fitness-tooltip ${
          show ? "ease-shimmer-pulse ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;