import React, { useState, useRef } from "react";
import "./style.css";

/**
 * A reusable React Tooltip component that leverages EaseMotion CSS
 * transition tokens and variables for an elastic sliding entrance.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.content - Content to display inside the tooltip bubble.
 * @param {'top'|'bottom'|'left'|'right'} [props.position='top'] - Position of the tooltip relative to children.
 * @param {number} [props.delay=0] - Delay in milliseconds before showing the tooltip on hover.
 * @param {React.ReactNode} props.children - Target element that triggers the tooltip.
 */
const Tooltip = ({ content, position = "top", delay = 0, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Determine direction-based animation class
  const animationClass = `ease-tooltip-animate-${position}`;
  const positionClass = `ease-tooltip-${position}`;

  return (
    <div
      className="ease-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={`ease-tooltip-bubble ${positionClass} ${animationClass}`}
          role="tooltip"
          aria-live="polite"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
