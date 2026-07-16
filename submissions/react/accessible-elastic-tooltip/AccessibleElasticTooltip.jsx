import React, { useId, useState } from "react";
import "./style.css";

const AccessibleElasticTooltip = ({
  text = "Tooltip",
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className={`tooltip-wrapper tooltip-${position}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <div
        tabIndex={0}
        aria-describedby={tooltipId}
        className="tooltip-trigger"
      >
        {children}
      </div>

      <div
        id={tooltipId}
        role="tooltip"
        aria-hidden={!visible}
        className={`tooltip-box ease-slide elastic ${
          visible ? "show" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default AccessibleElasticTooltip;