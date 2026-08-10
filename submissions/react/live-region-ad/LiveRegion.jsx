/**
 * EaseMotion CSS — LiveRegion
 * ============================================================
 * Announcement channel for async state changes.
 *
 * Live regions look trivial and have two failure modes that make them
 * silently useless:
 *
 *  1. Identical consecutive messages are NOT re-announced. Screen readers
 *     diff the region's content, so setting "Saved" twice in a row speaks
 *     once. A user saving repeatedly hears nothing after the first time.
 *     Fixed by clearing the region, then writing the message on a later
 *     tick so the diff registers as a real change.
 *
 *  2. A region mounted at the same time as its message is often missed
 *     entirely — the element has to already exist in the accessibility
 *     tree when the content changes. The wrapper is therefore always
 *     rendered, and only its text content varies.
 *
 * The clear/set cycle uses a double requestAnimationFrame rather than a
 * timeout: one frame commits the empty state to the DOM, the next writes
 * the message, so the change is guaranteed to be observed.
 * ============================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {string}  [props.message='']   Message to announce.
 * @param {'polite'|'assertive'} [props.politeness='polite']
 * @param {boolean} [props.visible=false] Render the text visibly too.
 * @param {number}  [props.clearAfter]    Auto-clear after N ms.
 * @param {string}  [props.className]
 */
export default function LiveRegion({
  message = '',
  politeness = 'polite',
  visible = false,
  clearAfter,
  className = '',
  ...rest
}) {
  const [announced, setAnnounced] = useState('');
  const frameRef = useRef(null);
  const timerRef = useRef(null);

  const cancelPending = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    cancelPending();

    if (!message) {
      setAnnounced('');
      return undefined;
    }

    // Clear first so an identical repeat still registers as a change.
    setAnnounced('');

    // Two frames: the first commits the empty state, the second writes
    // the message. A single frame can be batched into one paint and the
    // diff would be missed.
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = requestAnimationFrame(() => {
        setAnnounced(message);
        frameRef.current = null;

        if (Number.isFinite(clearAfter) && clearAfter > 0) {
          timerRef.current = setTimeout(() => {
            setAnnounced('');
            timerRef.current = null;
          }, clearAfter);
        }
      });
    });

    return cancelPending;
  }, [message, clearAfter, cancelPending]);

  // Clear any pending frame or timer on unmount.
  useEffect(() => cancelPending, [cancelPending]);

  const classes = [
    'ease-live-ad',
    visible ? 'ease-live-ad--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      // `role` and `aria-live` are both set: some older combinations
      // honour only one of them.
      role={politeness === 'assertive' ? 'alert' : 'status'}
      aria-live={politeness}
      // `atomic` makes the whole message read as a unit rather than only
      // the changed words, which otherwise produces fragments.
      aria-atomic="true"
      {...rest}
    >
      {announced}
    </div>
  );
}

/**
 * useAnnounce — imperative helper for code that is not rendering a
 * component, e.g. a fetch error handler.
 *
 * Returns [message, announce]; pass `message` to <LiveRegion>.
 */
export function useAnnounce() {
  const [message, setMessage] = useState('');

  const announce = useCallback((next) => {
    setMessage(typeof next === 'string' ? next : String(next ?? ''));
  }, []);

  return [message, announce];
}
