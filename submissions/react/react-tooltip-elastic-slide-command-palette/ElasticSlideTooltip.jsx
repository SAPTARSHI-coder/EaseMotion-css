import React, { useState } from "react";
import "./style.css";

function ElasticSlideTooltip({
  text = "Tooltip",
  children,
  position = "top"
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`tooltip-container ${position}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="tooltip ease-fade-in">
          {text}
        </div>
      )}
    </div>
  );
}

export default function Example() {
  return (
    <div style={{ padding: "80px" }}>
      <ElasticSlideTooltip text="Open Command Palette">
        <button className="ease-hover-lift">
          Ctrl + K
        </button>
      </ElasticSlideTooltip>
    </div>
  );
}