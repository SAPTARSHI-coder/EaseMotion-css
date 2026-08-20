import { useCallback, useEffect, useRef, useState } from 'react';

const TONES = ['info', 'success', 'warning', 'danger'];

/**
 * MotionToast
 * A dismissible toast with an exit animation that is awaited before unmount,
 * so the leave transition is never cut short by React removing the node.
 */
export default function MotionToast({
  children,
  tone = 'info',
  duration = 6000,
  onDismiss,
  title,
  className = '',
  ...rest
}) {
  const [leaving, setLeaving] = useState(false);
  const timerRef = useRef(null);
  const safeTone = TONES.includes(tone) ? tone : 'info';

  const dismiss = useCallback(() => {
    setLeaving(true);
  }, []);

  // Auto-dismiss. Paused while hovered or focused so a user reading the
  // message is never raced by the timer (WCAG 2.2.1).
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (duration <= 0 || paused || leaving) return undefined;
    timerRef.current = setTimeout(dismiss, duration);
    return () => clearTimeout(timerRef.current);
  }, [duration, paused, leaving, dismiss]);

  // Unmount only after the leave animation has actually finished.
  const handleAnimationEnd = (event) => {
    if (event.animationName.includes('leave') && leaving) {
      onDismiss?.();
    }
  };

  return (
    <div
      role={safeTone === 'danger' ? 'alert' : 'status'}
      aria-live={safeTone === 'danger' ? 'assertive' : 'polite'}
      className={[
        'mtoast',
        `mtoast--${safeTone}`,
        leaving ? 'is-leaving' : 'is-entering',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      <div className="mtoast__body">
        {title ? <p className="mtoast__title">{title}</p> : null}
        <div className="mtoast__copy">{children}</div>
      </div>
      <button
        type="button"
        className="mtoast__close"
        onClick={dismiss}
        aria-label="Dismiss notification"
      >
        &times;
      </button>
    </div>
  );
}
