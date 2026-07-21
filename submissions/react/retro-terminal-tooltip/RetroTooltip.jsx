import React, { useState, useRef, useId } from "react";
import "./RetroTooltip.css";

/**
 * RetroTooltip
 * -------------
 * A retro-terminal styled tooltip that reveals with EaseMotion's
 * "Elastic Slide" transition (em-slide-elastic-*).
 *
 * All motion/timing is handled purely through EaseMotion utility
 * classes — no inline transition/animation CSS is written here.
 */
const POSITION_CLASS = {
  top: "em-slide-elastic-up",
  bottom: "em-slide-elastic-down",
  left: "em-slide-elastic-left",
  right: "em-slide-elastic-right",
};

const RetroTooltip = ({
  children,
  label,
  position = "top",
  duration = "300", // EaseMotion duration scale: 150 | 300 | 450 | 600
  delay = "0", // EaseMotion delay scale: 0 | 100 | 200 | 300
  disabled = false,
  className = "",
  tooltipClassName = "",
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();
  const timeoutRef = useRef(null);

  const show = () => {
    if (disabled) return;
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), 60);
  };

  const slideClass = POSITION_CLASS[position] || POSITION_CLASS.top;

  return (
    <span
      className={`retro-tooltip-wrapper ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}

      {visible && (
        <span
          role="tooltip"
          id={tooltipId}
          className={[
            "retro-tooltip",
            `retro-tooltip--${position}`,
            "em-animate",
            slideClass,
            `em-duration-${duration}`,
            `em-delay-${delay}`,
            "em-ease-elastic",
            tooltipClassName,
          ].join(" ")}
        >
          <span className="retro-tooltip__text">{label}</span>
          <span className="retro-tooltip__caret" aria-hidden="true" />
        </span>
      )}
    </span>
  );
};

export default RetroTooltip;