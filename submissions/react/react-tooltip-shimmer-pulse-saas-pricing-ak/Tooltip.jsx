import React, { useState } from "react";

/**
 * Tooltip - a React tooltip with a shimmer pulse interaction transition,
 * designed for SaaS pricing layouts.
 *
 * Props:
 * - text (string): the tooltip content to display
 * - children (node): the trigger element the tooltip is attached to
 * - position ("top" | "bottom" | "left" | "right"): tooltip placement, default "top"
 */
export default function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="ease-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}
      {visible && (
        <span
          className={`ease-tooltip-shimmer ease-tooltip-shimmer--${position}`}
          role="tooltip"
        >
          {text}
        </span>
      )}
    </span>
  );
}
