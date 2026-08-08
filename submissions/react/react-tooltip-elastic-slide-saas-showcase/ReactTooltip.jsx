import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "SaaS Feature Tooltip",
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`saas-tooltip-wrapper ${position}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`saas-tooltip ${
          visible ? "ease-slide-in ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;