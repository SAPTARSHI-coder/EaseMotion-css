import React, { useState, useRef } from "react";

/**
 * TooltipElasticSlide
 * A minimal, blog-friendly tooltip that slides in with an elastic motion
 * using EaseMotion CSS utility classes.
 *
 * Props:
 *  - text (string)      : tooltip content
 *  - position (string)  : "top" | "bottom" | "left" | "right" (default: "top")
 *  - children (node)    : the element that triggers the tooltip
 */
export default function TooltipElasticSlide({ text, position = "top", children }) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  const positionClass = {
    top: "tooltip-elastic--top",
    bottom: "tooltip-elastic--bottom",
    left: "tooltip-elastic--left",
    right: "tooltip-elastic--right",
  }[position];

  return (
    <span
      ref={wrapperRef}
      className="tooltip-elastic-wrapper ease-hover-lift"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}

      {visible && (
        <span
          role="tooltip"
          className={`tooltip-elastic-bubble ${positionClass} ease-fade-in`}
        >
          {text}
        </span>
      )}
    </span>
  );
}