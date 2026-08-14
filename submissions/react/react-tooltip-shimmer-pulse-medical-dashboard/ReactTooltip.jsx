import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Patient Health Status",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`medical-tooltip-wrapper ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`medical-tooltip ${
          show ? "ease-shimmer-pulse ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;