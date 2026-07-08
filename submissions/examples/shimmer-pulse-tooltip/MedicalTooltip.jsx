import React from "react";
import "./tooltip.css";

const MedicalTooltip = ({
  label = "Patient Status",
  tooltip = "Patient vitals are stable.",
  variant = "primary",
  position = "top",
}) => {
  return (
    <div
      className={`medical-tooltip-wrapper ease-fade-in ease-hover-lift ${position}`}
    >
      <button
        className={`medical-button ${variant} ease-hover-lift`}
        aria-describedby="tooltip"
      >
        {label}
      </button>

      <div
        id="tooltip"
        role="tooltip"
        className="medical-tooltip shimmer-pulse"
      >
        <span className="tooltip-title">Medical Dashboard</span>

        <span className="tooltip-text">{tooltip}</span>
      </div>
    </div>
  );
};

export default MedicalTooltip;