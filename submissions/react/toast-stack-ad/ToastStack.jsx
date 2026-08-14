/**
 * EaseMotion CSS — ToastStack
 * ============================================================
 * Stacked notifications with a real exit animation.
 *
 * Four things toast implementations routinely get wrong:
 *
 *  1. Auto-dismiss keeps running while the user is reading. A toast that
 *     vanishes mid-sentence is worse than no toast — the information is
 *     gone and there is no way to get it back. Timers pause on hover and
 *     on focus.
 *
 *  2. The exit never plays. Removing the item from state unmounts it
 *     immediately, so the slide-out is written, styled, and never seen.
 *
 *  3. Every toast is an alert. Marking routine confirmations assertive
 *     trains users to ignore the interruptions that matter.
 *
 *  4. Unbounded stacking. Twenty toasts cover the viewport and the app
 *     underneath becomes unusable. A visible limit plus an overflow count
 *     keeps the stack bounded.
 * ============================================================
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const TONES = {
  info: { glyph: 'i', role: 'status', live: 'polite' },
  success: { glyph: '✓', role: 'status', live: 'polite' },
  warning: { glyph: '!', role: 'alert', live: 'assertive' },
  danger: { glyph: '⚠', role: 'alert', live: 'assertive' },
};

/** Must exceed the CSS exit duration; guards a missed transitionend. */
const EXIT_FALLBACK_MS = 420;

function Toast({ toast, onDismiss, paused }) {
  const config = TONES[toast.tone] ?? TONES.info;
  const [exiting, setExiting] = useState(false);
  const nodeRef = useRef(null);
  const exitTimer = useRef(null);
  const dismissTimer = useRef(null);
  const remainingRef = useRef(toast.duration ?? 5000);
  const startedRef = useRef(null);

  const finish = useCallback(() => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
    exitTimer.current = null;
    onDismiss(toast.id);
  }, [onDismiss, toast.id]);

  const beginExit = useCallback(() => {
    setExiting(true);
  }, []);

  // Auto-dismiss, pausable. Remaining time is tracked rather than the
  // timer being restarted, so hovering repeatedly does not reset the
  // countdown to full each time.
  useEffect(() => {
    if (exiting) return undefined;
    if (!Number.isFinite(remainingRef.current) || remainingRef.current <= 0) {
      return undefined;
    }

    if (paused) {
      if (startedRef.current !== null) {
        remainingRef.current -= Date.now() - startedRef.current;
        startedRef.current = null;
      }
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
      return undefined;
    }

    startedRef.current = Date.now();
    dismissTimer.current = setTimeout(beginExit, Math.max(remainingRef.current, 0));

    return () => {
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, [paused, exiting, beginExit]);

  // Wait for the exit transition before unmounting.
  useEffect(() => {
    if (!exiting) return undefined;

    const node = nodeRef.current;

    // Only this element's own transition — a descendant's would bubble
    // and remove the toast early.
    const onEnd = (event) => {
      if (event.target === node) finish();
    };

    node?.addEventListener('transitionend', onEnd);
    exitTimer.current = setTimeout(finish, EXIT_FALLBACK_MS);

    return () => {
      node?.removeEventListener('transitionend', onEnd);
      if (exitTimer.current) clearTimeout(exitTimer.current);
    };
  }, [exiting, finish]);

  return (
    <li
      className={`ease-toast-ad ease-toast-ad--${toast.tone in TONES ? toast.tone : 'info'}${
        exiting ? ' ease-toast-ad--exiting' : ''
      }`}
      ref={nodeRef}
      role={config.role}
      aria-live={config.live}
      aria-atomic="true"
    >
      <span className="ease-toast-ad__icon" aria-hidden="true">
        {config.glyph}
      </span>

      <div className="ease-toast-ad__body">
        {toast.title && <p className="ease-toast-ad__title">{toast.title}</p>}
        {toast.message && <p className="ease-toast-ad__msg">{toast.message}</p>}
        {toast.action && <div className="ease-toast-ad__action">{toast.action}</div>}
      </div>

      <button
        className="ease-toast-ad__close"
        type="button"
        onClick={beginExit}
        aria-label="Dismiss notification"
      >
        &times;
      </button>
    </li>
  );
}

/**
 * @param {object} props
 * @param {Array<{id, tone?, title?, message?, action?, duration?}>} props.toasts
 * @param {(id: string|number) => void} props.onDismiss
 * @param {number}  [props.max=3]   Visible toasts before collapsing.
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} [props.position='bottom-right']
 * @param {string}  [props.label='Notifications']
 * @param {string}  [props.className]
 */
export default function ToastStack({
  toasts = [],
  onDismiss,
  max = 3,
  position = 'bottom-right',
  label = 'Notifications',
  className = '',
  ...rest
}) {
  const [paused, setPaused] = useState(false);

  const safeMax = Number.isFinite(max) && max >= 1 ? Math.floor(max) : 1;

  const { visible, overflow } = useMemo(() => {
    const valid = toasts.filter((t) => t && t.id !== undefined);
    return {
      visible: valid.slice(0, safeMax),
      overflow: Math.max(0, valid.length - safeMax),
    };
  }, [toasts, safeMax]);

  if (visible.length === 0) return null;

  const classes = [
    'ease-toaststack-ad',
    `ease-toaststack-ad--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ol
      className={classes}
      aria-label={label}
      // Pause on hover AND focus — a keyboard user tabbing to the action
      // button needs the same protection a mouse user gets.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      {...rest}
    >
      {visible.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onDismiss={onDismiss}
          paused={paused}
        />
      ))}

      {overflow > 0 && (
        <li className="ease-toaststack-ad__overflow">
          +{overflow} more notification{overflow === 1 ? '' : 's'}
        </li>
      )}
    </ol>
  );
}
