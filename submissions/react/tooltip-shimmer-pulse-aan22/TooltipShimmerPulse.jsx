import React, { useState, useId } from "react";

/**
 * TooltipShimmerPulse
 * A React tooltip with a smooth shimmer-pulse interaction transition,
 * designed for dense, data-heavy medical dashboard interfaces.
 *
 * Props:
 *  - text (string)      : tooltip content (e.g. metric explanation, field help)
 *  - position (string)  : "top" | "bottom" | "left" | "right" (default: "top")
 *  - urgent (boolean)   : if true, applies a stronger pulse (e.g. for critical values)
 *  - children (node)    : the element that triggers the tooltip
 */
export default function TooltipShimmerPulse({
  text,
  position = "top",
  urgent = false,
  children,
}) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  const positionClass = {
    top: "tooltip-shimmer--top",
    bottom: "tooltip-shimmer--bottom",
    left: "tooltip-shimmer--left",
    right: "tooltip-shimmer--right",
  }[position];

  return (
    <span
      className="tooltip-shimmer-wrapper ease-hover-lift"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      aria-describedby={visible ? tooltipId : undefined}
      tabIndex={0}
    >
      {children}

      {visible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`tooltip-shimmer-bubble ${positionClass} ease-fade-in ${
            urgent ? "ease-pulse" : ""
          }`}
        >
          {text}
        </span>
      )}
    </span>
  );
}