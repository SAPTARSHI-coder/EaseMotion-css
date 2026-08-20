import React, { useState, useEffect } from 'react';

// ─── Pulse variants config ────────────────────────────────────────────────────
const VARIANTS = {
  danger:  { bg: '#ef4444', pulse: '#fca5a5' },
  warning: { bg: '#f59e0b', pulse: '#fcd34d' },
  success: { bg: '#10b981', pulse: '#6ee7b7' },
  info:    { bg: '#3b82f6', pulse: '#93c5fd' },
  primary: { bg: '#8b5cf6', pulse: '#c4b5fd' },
};

// ─── Dot-only indicator (no count) ───────────────────────────────────────────
const PulseDot = ({ variant = 'danger', size = 10, pulse = true }) => {
  const cfg = VARIANTS[variant] || VARIANTS.danger;
  return (
    <span
      className={`ease-badge-dot ${pulse ? 'ease-badge-pulse' : ''}`}
      style={{
        '--ease-badge-bg':    cfg.bg,
        '--ease-badge-pulse': cfg.pulse,
        width:  size,
        height: size,
      }}
      aria-hidden="true"
    />
  );
};

/**
 * BadgeNotification — wraps any children with a notification badge.
 *
 * @param {ReactNode} children   - The element to attach the badge to (icon, avatar, button…)
 * @param {number}    count      - Notification count. 0 hides the badge, undefined shows dot-only.
 * @param {number}    max        - Max count displayed before showing "max+" (default 99)
 * @param {string}    variant    - Color variant: 'danger' | 'warning' | 'success' | 'info' | 'primary'
 * @param {boolean}   pulse      - Whether the ripple pulse animation plays (default true)
 * @param {string}    position   - Corner position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
 * @param {boolean}   dot        - Show dot-only (ignores count)
 * @param {boolean}   animate    - Pop animate the badge on count change (default true)
 */
const BadgeNotification = ({
  children,
  count,
  max = 99,
  variant = 'danger',
  pulse = true,
  position = 'top-right',
  dot = false,
  animate = true,
}) => {
  const [prevCount, setPrevCount] = useState(count);
  const [popping, setPopping]     = useState(false);

  // Trigger pop animation on count change
  useEffect(() => {
    if (count !== prevCount && animate) {
      setPopping(true);
      const t = setTimeout(() => setPopping(false), 350);
      setPrevCount(count);
      return () => clearTimeout(t);
    }
  }, [count, prevCount, animate]);

  const cfg = VARIANTS[variant] || VARIANTS.danger;

  // Compute label
  const label = dot ? null : (count > max ? `${max}+` : count);
  const hidden = !dot && (count === 0 || count === null || count === undefined);

  return (
    <span className="ease-badge-wrap">
      {children}

      {!hidden && (
        <span
          className={[
            'ease-badge',
            `ease-badge--${position}`,
            dot ? 'ease-badge--dot' : '',
            pulse ? 'ease-badge--pulse' : '',
            popping ? 'ease-badge--pop' : '',
          ].filter(Boolean).join(' ')}
          style={{
            '--ease-badge-bg':    cfg.bg,
            '--ease-badge-pulse': cfg.pulse,
          }}
          aria-label={dot ? 'New notification' : `${label} notifications`}
          role="status"
        >
          {!dot && label}

          {/* Pulse ripple ring */}
          {pulse && <span className="ease-badge-ring" aria-hidden="true" />}
        </span>
      )}
    </span>
  );
};

export { PulseDot };
export default BadgeNotification;
