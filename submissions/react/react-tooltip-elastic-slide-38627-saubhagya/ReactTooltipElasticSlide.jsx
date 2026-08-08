import React, { useId } from "react";
import "./EaseMotion.css";
import "./CyberpunkTheme.css";

const POSITIONS = ["top", "bottom", "left", "right"];

/**
 * ReactTooltipElasticSlide – Cyberpunk neon tooltip with elastic slide.
 */
const ReactTooltipElasticSlide = ({
  children,
  tooltip = "Cyberpunk Tooltip",
  position = "top",
  accent = "#00fff7",
  glow = "#ff00ff",
  delay = 0,
  className = "",
  tooltipClassName = "",
  disabled = false,
}) => {
  const resolvedPosition = POSITIONS.includes(position) ? position : "top";
  const tooltipId = useId();

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <span
      className={`em-relative em-group cp-tooltip-wrapper cp-${resolvedPosition} ${className}`.trim()}
      style={{
        "--cp-accent": accent,
        "--cp-glow": glow,
        "--em-delay": `${delay}ms`,
      }}
    >
      <span
        className="em-trigger cp-tooltip-trigger"
        tabIndex={0}
        aria-describedby={tooltipId}
      >
        {children}
      </span>

      <span
        id={tooltipId}
        role="tooltip"
        className={`em-tooltip em-transition-elastic em-tooltip-${resolvedPosition} cp-tooltip-box ${tooltipClassName}`.trim()}
      >
        {tooltip}
      </span>
    </span>
  );
};

export default ReactTooltipElasticSlide;