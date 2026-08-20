import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Visual Editor Tool",
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`editor-tooltip-wrapper ${position}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`editor-tooltip ${
          visible ? "ease-slide-in ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;