import React, { useState, useRef, useCallback } from "react";
import "./style.css";

/**
 * ElasticTooltip — Dark Minimalist Tooltip with Elastic Slide Transition
 *
 * Uses EaseMotion CSS utility classes:
 *   - ease-fade-in      : opacity entrance
 *   - ease-slide-up     : upward slide entrance (position="top")
 *   - ease-slide-down   : downward slide entrance (position="bottom")
 *   - ease-slide-in-from-left  : left slide (position="right")
 *   - ease-slide-in-from-right : right slide (position="left")
 *   - ease-blur-to-focus : optional blur-in on mount
 *   - ease-zoom-in      : scale entrance (variant="zoom")
 */

const POSITION_MAP = {
  top: {
    animClass: "ease-fade-in ease-slide-up",
    containerClass: "em-tooltip--top",
  },
  bottom: {
    animClass: "ease-fade-in ease-slide-down",
    containerClass: "em-tooltip--bottom",
  },
  left: {
    animClass: "ease-fade-in ease-slide-in-from-right",
    containerClass: "em-tooltip--left",
  },
  right: {
    animClass: "ease-fade-in ease-slide-in-from-left",
    containerClass: "em-tooltip--right",
  },
};

const VARIANT_EXTRA_CLASS = {
  default: "",
  zoom:    "ease-zoom-in",
  blur:    "ease-blur-to-focus",
};

const ElasticTooltip = ({
  content,
  position = "top",
  variant = "default",
  delay = 120,
  maxWidth = 220,
  disabled = false,
  className = "",
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);           // remount tooltip to retrigger animation
  const timerRef = useRef(null);

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => {
      setKey((k) => k + 1);
      setVisible(true);
    }, delay);
  }, [disabled, delay]);

  const hide = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  const { animClass, containerClass } = POSITION_MAP[position] ?? POSITION_MAP.top;
  const extraClass = VARIANT_EXTRA_CLASS[variant] ?? "";

  return (
    <span
      className={`em-tooltip-host ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && (
        <span
          key={key}
          role="tooltip"
          className={`em-tooltip ${containerClass} ${animClass} ${extraClass}`}
          style={{ maxWidth }}
        >
          <span className="em-tooltip__arrow" aria-hidden="true" />
          <span className="em-tooltip__content">{content}</span>
        </span>
      )}
    </span>
  );
};

export default ElasticTooltip;
