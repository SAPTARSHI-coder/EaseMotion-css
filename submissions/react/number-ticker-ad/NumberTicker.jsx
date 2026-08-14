/**
 * EaseMotion CSS — NumberTicker
 * ============================================================
 * Animates between numeric values.
 *
 * Three things this gets right that most counter components do not:
 *
 *  1. It announces the FINAL value only. A ticker inside a live region
 *     that updates every frame produces sixty announcements a second —
 *     the screen reader is rendered useless for the whole animation. The
 *     visible digits are aria-hidden and the target value is announced
 *     once.
 *
 *  2. It uses requestAnimationFrame, not setInterval. An interval drifts
 *     from the display refresh, so the count visibly stutters; rAF is
 *     driven by the frame clock and also pauses in background tabs
 *     instead of burning CPU on a tab nobody is looking at.
 *
 *  3. It snaps under prefers-reduced-motion. A rapidly changing number is
 *     a motion effect even though nothing moves — it is exactly the kind
 *     of thing that triggers vestibular discomfort.
 *
 * Formatting goes through Intl.NumberFormat so thousands separators,
 * currency and percent all follow the user's locale rather than being
 * hand-assembled with regex.
 * ============================================================
 */

import { useEffect, useMemo, useRef, useState } from 'react';

/** easeOutExpo — fast start, long settle. Reads as "landing on" a value. */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * @param {object} props
 * @param {number}  props.value
 * @param {number}  [props.duration=900]
 * @param {number}  [props.decimals=0]
 * @param {string}  [props.locale]        Defaults to the user's locale.
 * @param {object}  [props.format]        Intl.NumberFormat options.
 * @param {string}  [props.prefix='']
 * @param {string}  [props.suffix='']
 * @param {string}  [props.label]         Announced instead of the raw number.
 * @param {string}  [props.className]
 */
export default function NumberTicker({
  value = 0,
  duration = 900,
  decimals = 0,
  locale,
  format,
  prefix = '',
  suffix = '',
  label,
  className = '',
  ...rest
}) {
  const safeValue = Number.isFinite(value) ? value : 0;

  const [display, setDisplay] = useState(safeValue);
  const frameRef = useRef(null);
  const fromRef = useRef(safeValue);
  const startRef = useRef(null);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
        ...format,
      }),
    [locale, decimals, format],
  );

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // A rapidly changing number is a motion effect even though nothing
    // moves, so it snaps rather than counting.
    if (reduced || duration <= 0) {
      fromRef.current = safeValue;
      setDisplay(safeValue);
      return undefined;
    }

    const from = fromRef.current;
    const delta = safeValue - from;

    if (delta === 0) return undefined;

    startRef.current = null;

    const step = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp;

      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      setDisplay(from + delta * easeOutExpo(progress));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        // Land exactly on the target — accumulated float error would
        // otherwise leave a value like 999.9999 rendered as "1,000"
        // while the underlying number is wrong.
        fromRef.current = safeValue;
        setDisplay(safeValue);
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      // Resume from wherever the interrupted animation stopped, so a
      // value change mid-flight does not jump back to the old start.
      fromRef.current = display;
    };
    // `display` is deliberately excluded — including it would restart the
    // animation on every frame it sets.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeValue, duration]);

  const rendered = `${prefix}${formatter.format(display)}${suffix}`;
  const final = `${prefix}${formatter.format(safeValue)}${suffix}`;

  const classes = ['ease-ticker-ad', className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {/* Digits are hidden from AT; only the settled value is announced. */}
      <span className="ease-ticker-ad__digits" aria-hidden="true">
        {rendered}
      </span>

      <span className="ease-ticker-ad__sr">{label ?? final}</span>
    </span>
  );
}
