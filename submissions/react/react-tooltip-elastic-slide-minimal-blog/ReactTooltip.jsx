import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Blog Tooltip",
  position = "top",
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`blog-tooltip-wrapper ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`blog-tooltip ${
          show ? "ease-slide-in ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;