import React, { useState } from "react";
import "./style.css";

const ReactTooltip = ({
  text = "Checkout Offer",
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`checkout-tooltip-wrapper ${position}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`checkout-tooltip ${
          visible ? "ease-shimmer-pulse ease-hover-lift" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ReactTooltip;