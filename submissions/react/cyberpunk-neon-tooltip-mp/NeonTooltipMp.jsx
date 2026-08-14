import React, { useState, useRef, useId } from "react";
import "./style.css";

/**
 * NeonTooltipMp
 *
 * A cyberpunk-neon styled tooltip that slides in with an elastic
 * (overshoot-and-settle) transition. Built on top of EaseMotion CSS
 * utility classes for entrance/exit motion, with custom "-mp" scoped
 * classes handling the neon skin (glow, gradient border, glitch flicker).
 *
 * Usage:
 *   <NeonTooltipMp content="SYSTEM // ONLINE" position="top" accent="cyan">
 *     <button>hover me</button>
 *   </NeonTooltipMp>
 */
export default function NeonTooltipMp({
  children,
  content = "",
  position = "top",
  trigger = "hover",
  delay = 80,
  accent = "cyan",
  className = "",
  disabled = false,
}) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const tooltipId = useId();

  const show = () => {
    if (disabled) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timerRef.current);
    setVisible(false);
  };

  const hoverHandlers =
    trigger === "hover"
      ? {
          onMouseEnter: show,
          onMouseLeave: hide,
          onFocus: show,
          onBlur: hide,
        }
      : {
          onClick: () => (visible ? hide() : show()),
        };

  return (
    <span
      className={`neon-tooltip-mp-wrapper ${className}`.trim()}
      {...hoverHandlers}
    >
      {children}

      <span
        role="tooltip"
        id={tooltipId}
        className={[
          "ease-fade-in-mp",
          "neon-tooltip-mp",
          `neon-tooltip-mp--${position}`,
          `neon-tooltip-mp--${accent}`,
          visible ? "neon-tooltip-mp--visible ease-elastic-slide-mp" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden={!visible}
      >
        <span className="neon-tooltip-mp__content">{content}</span>
      </span>
    </span>
  );
}
