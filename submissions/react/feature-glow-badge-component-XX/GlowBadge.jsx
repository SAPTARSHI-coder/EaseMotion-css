import React from 'react';
import './style.css';

/**
 * GlowBadge (Error State) — EaseMotion CSS
 * Submission by: XX
 *
 * A badge component that pulses with a soft glow to draw attention,
 * e.g. for error counts, alerts, or status indicators.
 * Respects prefers-reduced-motion.
 */
export default function GlowBadge({
  children,
  variant = 'error',
  count,
}) {
  const label =
    typeof count === 'number'
      ? `${count} ${variant === 'error' ? 'error' : 'notification'}${count === 1 ? '' : 's'}`
      : children;

  return (
    <span
      className={`ease-glow-badge-XX ease-glow-badge-XX--${variant}`}
      role="status"
      aria-label={typeof label === 'string' ? label : undefined}
    >
      {count !== undefined ? count : children}
    </span>
  );
}
