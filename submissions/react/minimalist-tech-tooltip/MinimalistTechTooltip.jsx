import { useState } from "react";
import "./style.css";

export default function MinimalistTechTooltip({
  label = "Hover Me",
  message = "Minimalist Tech Tooltip",
  position = "top",
  delay = 150,
}) {
  const [visible, setVisible] = useState(false);
  let timer;

  const showTooltip = () => {
    timer = setTimeout(() => setVisible(true), delay);
  };

  const hideTooltip = () => {
    clearTimeout(timer);
    setVisible(false);
  };

  return (
    <div
      className="mt-tooltip-wrapper ease-hover-lift"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <button className="mt-button ease-fade-in">
        {label}
      </button>

      <div
        className={`mt-tooltip ${position} ${
          visible ? "show ease-slide-in" : ""
        }`}
      >
        {message}
        <span className="mt-arrow"></span>
      </div>
    </div>
  );
}