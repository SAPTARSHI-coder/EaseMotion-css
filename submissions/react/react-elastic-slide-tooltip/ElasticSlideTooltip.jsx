import { useState } from "react";
import "./style.css";

export default function ElasticSlideTooltip({
  text = "Creative Portfolio",
  tooltip = "View Project",
  position = "top",
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`tooltip-wrapper ease-hover-lift`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="tooltip-btn ease-fade-in">
        {text}
      </button>

      <div
        className={`tooltip-box ${position} ${
          show ? "show ease-slide-in" : ""
        }`}
      >
        {tooltip}
      </div>
    </div>
  );
}