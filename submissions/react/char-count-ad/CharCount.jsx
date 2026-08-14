/**
 * EaseMotion CSS — CharCount
 * ============================================================
 * Character counter for text inputs.
 *
 * The accessibility failure this avoids: a counter in a live region that
 * updates on every keystroke makes a textarea genuinely unusable with a
 * screen reader. Every character typed interrupts with "241 of 280",
 * "242 of 280", "243 of 280" — the user cannot hear their own typing.
 *
 * So announcement is THRESHOLD-based. The visual counter updates
 * continuously, but the live region only speaks when the state changes:
 * on crossing into the warning band, and on crossing over the limit.
 * Nothing is announced while there is plenty of room left.
 *
 * Length also uses Intl.Segmenter where available. `String.length`
 * counts UTF-16 code units, so an emoji costs 2 and a family emoji can
 * cost 11 — a user typing one emoji watches the counter jump by 11.
 * ============================================================
 */

import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Count user-perceived characters (grapheme clusters) where supported,
 * falling back to code points, then to code units.
 */
function countGraphemes(text) {
  if (typeof text !== 'string' || text === '') return 0;

  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    let total = 0;
    // eslint-disable-next-line no-unused-vars
    for (const _segment of segmenter.segment(text)) total += 1;
    return total;
  }

  // Array.from splits by code point, which still beats .length for most
  // non-BMP characters even though it over-counts combined emoji.
  return Array.from(text).length;
}

/**
 * @param {object} props
 * @param {string}  props.value
 * @param {number}  props.max
 * @param {number}  [props.warnAt=0.9]  Fraction of max that starts warning.
 * @param {boolean} [props.showRemaining=false] Count down instead of up.
 * @param {string}  [props.label='characters']
 * @param {'sm'|'md'} [props.size='md']
 * @param {string}  [props.className]
 */
export default function CharCount({
  value = '',
  max,
  warnAt = 0.9,
  showRemaining = false,
  label = 'characters',
  size = 'md',
  className = '',
  ...rest
}) {
  const count = useMemo(() => countGraphemes(value), [value]);

  const hasMax = Number.isFinite(max) && max > 0;
  const remaining = hasMax ? max - count : 0;
  const over = hasMax && count > max;
  const warning = hasMax && !over && count >= Math.floor(max * warnAt);

  const state = over ? 'over' : warning ? 'warn' : 'ok';

  // Announce only on state CHANGE, never per keystroke.
  const [announcement, setAnnouncement] = useState('');
  const lastStateRef = useRef(state);

  useEffect(() => {
    if (state === lastStateRef.current) return;
    lastStateRef.current = state;

    if (state === 'over') {
      setAnnouncement(`Over the limit by ${count - max} ${label}.`);
    } else if (state === 'warn') {
      setAnnouncement(`${remaining} ${label} remaining.`);
    } else {
      // Clearing keeps a stale warning from being re-read on refocus.
      setAnnouncement('');
    }
  }, [state, count, max, remaining, label]);

  const classes = [
    'ease-count-ad',
    `ease-count-ad--${size}`,
    `ease-count-ad--${state}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const display = hasMax
    ? showRemaining
      ? `${remaining}`
      : `${count} / ${max}`
    : `${count}`;

  return (
    <span className={classes} {...rest}>
      {/* Visual counter is aria-hidden — the live region below carries
          announcement, so exposing both would double-read it. */}
      <span className="ease-count-ad__text" aria-hidden="true">
        {display}
      </span>

      <span className="ease-count-ad__sr" role="status" aria-live="polite">
        {announcement}
      </span>
    </span>
  );
}
