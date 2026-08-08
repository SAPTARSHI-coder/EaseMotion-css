import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Premium Plan Feature",
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`pricing-tooltip-wrapper ${position}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`pricing-tooltip ${
          visible ? "ease-shimmer-pulse ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;