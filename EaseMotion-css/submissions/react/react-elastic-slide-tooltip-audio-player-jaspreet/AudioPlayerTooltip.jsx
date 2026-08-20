import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AudioPlayerTooltip = ({
  label,
  position = "top",
  delay = 150,
  disabled = false,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  const validPositions = ["top", "bottom", "left", "right"];
  const placement = validPositions.includes(position) ? position : "top";

  const animationClassMap = {
    top: "ease-slide-up",
    bottom: "ease-slide-down",
    left: "ease-slide-left",
    right: "ease-slide-right"
  };
  const animationClass = animationClassMap[placement];

  const showTooltip = () => {
    if (disabled) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(timerRef.current);
    setIsVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      hideTooltip();
    }
  };

  const handleTouch = (e) => {
    if (disabled) return;
    e.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div 
      className="easemotion-tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouch}
    >
      {children}
      {isVisible && (
        <div 
          className={`easemotion-tooltip-bubble position-${placement} ${animationClass} ease-scale-pop`}
          role="tooltip"
          aria-live="polite"
        >
          <span className="easemotion-tooltip-text">{label}</span>
          <div className="easemotion-tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

AudioPlayerTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};