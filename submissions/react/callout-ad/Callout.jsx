/**
 * EaseMotion CSS — Callout
 * ============================================================
 * Inline callout / banner with an animated dismissal.
 *
 * Two details this gets right that most inline banners do not:
 *
 *  1. Announcement is scoped to severity. `role="alert"` interrupts the
 *     screen reader immediately; `role="status"` waits for a pause. Marking
 *     every callout as an alert trains users to ignore all of them, so only
 *     `warning` and `danger` interrupt here.
 *
 *  2. Exit actually completes. Unmounting on click skips the animation
 *     entirely — the element is gone before a frame renders. This keeps the
 *     node mounted through an `exiting` phase and removes it on
 *     `transitionend`, with a timeout fallback so a dropped or interrupted
 *     transition event cannot strand the callout on screen forever.
 * ============================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/** Per-tone glyph and ARIA wiring. */
const TONES = {
  info: { glyph: 'i', role: 'status', live: 'polite' },
  success: { glyph: '✓', role: 'status', live: 'polite' },
  warning: { glyph: '!', role: 'alert', live: 'assertive' },
  danger: { glyph: '⚠', role: 'alert', live: 'assertive' },
};

/** Must exceed the CSS exit duration; guards against a missed event. */
const EXIT_FALLBACK_MS = 400;

/**
 * @param {object} props
 * @param {'info'|'success'|'warning'|'danger'} [props.tone='info']
 * @param {string}    [props.title]
 * @param {React.ReactNode} props.children  Body content.
 * @param {React.ReactNode} [props.icon]    Custom icon; replaces the glyph.
 * @param {boolean}   [props.dismissible=false]
 * @param {() => void} [props.onDismiss]    Called after the exit completes.
 * @param {React.ReactNode} [props.action]
 * @param {string}    [props.className]
 */
export default function Callout({
  tone = 'info',
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
  action,
  className = '',
  ...rest
}) {
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const nodeRef = useRef(null);
  const timerRef = useRef(null);

  // Unknown tones degrade to `info` rather than throwing on an undefined
  // property lookup.
  const config = TONES[tone] ?? TONES.info;

  const finish = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setRemoved(true);
    onDismiss?.();
  }, [onDismiss]);

  const handleDismiss = useCallback(() => {
    if (exiting) return; // Ignore repeat clicks during the exit.
    setExiting(true);
  }, [exiting]);

  useEffect(() => {
    if (!exiting) return undefined;

    const node = nodeRef.current;

    // Only react to the element's OWN transition. Without this check a
    // transition on any descendant (a hovered button inside the callout)
    // would bubble up and remove the callout early.
    const onEnd = (event) => {
      if (event.target === node) finish();
    };

    node?.addEventListener('transitionend', onEnd);
    timerRef.current = setTimeout(finish, EXIT_FALLBACK_MS);

    return () => {
      node?.removeEventListener('transitionend', onEnd);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [exiting, finish]);

  // Clear any pending timer if the component unmounts mid-exit.
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  if (removed) return null;

  const classes = [
    'ease-callout-ad',
    `ease-callout-ad--${tone in TONES ? tone : 'info'}`,
    exiting ? 'ease-callout-ad--exiting' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      ref={nodeRef}
      role={config.role}
      aria-live={config.live}
      {...rest}
    >
      <span className="ease-callout-ad__icon" aria-hidden="true">
        {icon ?? config.glyph}
      </span>

      <div className="ease-callout-ad__body">
        {title && <p className="ease-callout-ad__title">{title}</p>}
        {children && <div className="ease-callout-ad__copy">{children}</div>}
        {action && <div className="ease-callout-ad__action">{action}</div>}
      </div>

      {dismissible && (
        <button
          className="ease-callout-ad__close"
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss notification"
        >
          &times;
        </button>
      )}
    </div>
  );
}
