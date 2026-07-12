import React, { useState, useRef, useId } from "react";
import "./style.css";

/**
 * TerminalTooltipMp
 *
 * A retro-terminal styled tooltip that slides in with an elastic
 * (overshoot-and-settle) transition. Built on top of EaseMotion CSS
 * utility classes for entrance/exit motion, with custom "-mp" scoped
 * classes handling the terminal skin (scanlines, monospace glow, etc).
 *
 * Usage:
 *   <TerminalTooltipMp content="root@ease:~$ status ok" position="top">
 *     <button>hover me</button>
 *   </TerminalTooltipMp>
 */
export default function TerminalTooltipMp({
  children,
  content = "",
  position = "top",
  trigger = "hover",
  delay = 80,
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
      className={`term-tooltip-mp-wrapper ${className}`.trim()}
      {...hoverHandlers}
    >
      {children}

      <span
        role="tooltip"
        id={tooltipId}
        className={[
          "ease-fade-in-mp",
          "term-tooltip-mp",
          `term-tooltip-mp--${position}`,
          visible ? "term-tooltip-mp--visible ease-elastic-slide-mp" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden={!visible}
      >
        <span className="term-tooltip-mp__prompt">$</span>
        <span className="term-tooltip-mp__content">{content}</span>
        <span className="term-tooltip-mp__caret" aria-hidden="true" />
      </span>
    </span>
  );
}
