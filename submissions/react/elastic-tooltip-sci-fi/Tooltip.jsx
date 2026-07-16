import { useState, useId } from 'react';

/**
 * Tooltip
 *
 * A React tooltip component with an elastic slide-in/out transition,
 * styled for Sci-Fi Console style interfaces (glow edges, monospace
 * readouts, angular corners).
 *
 * Built on top of EaseMotion CSS utility classes:
 *  - ease-fade-in        → base entrance opacity transition
 *  - ease-hover-grow     → subtle scale feedback on the trigger element
 *  - ease-duration-fast  → snappy timing for the show/hide transition
 *
 * The "elastic slide" motion itself is implemented with a bounce-style
 * cubic-bezier transform on top of the EaseMotion opacity classes, since
 * EaseMotion's stock entrance classes are opacity/translate based rather
 * than spring/elastic based.
 */
export default function Tooltip({
  content,
  children,
  position = 'top',
  delay = 120,
  offset = 10,
  className = '',
}) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const positionStyles = {
    top: {
      bottom: `calc(100% + ${offset}px)`,
      left: '50%',
      transform: visible
        ? 'translate(-50%, 0) scale(1)'
        : 'translate(-50%, 6px) scale(0.85)',
    },
    bottom: {
      top: `calc(100% + ${offset}px)`,
      left: '50%',
      transform: visible
        ? 'translate(-50%, 0) scale(1)'
        : 'translate(-50%, -6px) scale(0.85)',
    },
    left: {
      right: `calc(100% + ${offset}px)`,
      top: '50%',
      transform: visible
        ? 'translate(0, -50%) scale(1)'
        : 'translate(6px, -50%) scale(0.85)',
    },
    right: {
      left: `calc(100% + ${offset}px)`,
      top: '50%',
      transform: visible
        ? 'translate(0, -50%) scale(1)'
        : 'translate(-6px, -50%) scale(0.85)',
    },
  };

  return (
    <span
      className="ease-hover-grow sf-tooltip-wrapper"
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}

      <span
        role="tooltip"
        id={tooltipId}
        className={`ease-fade-in ease-duration-fast sf-tooltip ${className}`}
        style={{
          position: 'absolute',
          ...positionStyles[position],
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transitionProperty: 'opacity, transform',
          transitionDuration: `${delay}ms`,
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // elastic bounce
          zIndex: 50,
        }}
      >
        <span className="sf-tooltip-bracket sf-tooltip-bracket-tl" />
        <span className="sf-tooltip-bracket sf-tooltip-bracket-br" />
        <span className="sf-tooltip-content">{content}</span>
      </span>
    </span>
  );
}
