/**
 * EaseMotion CSS — MeterBar
 * ============================================================
 * Bounded value meter with semantic thresholds.
 *
 * `role="meter"` rather than `progressbar` — these are different things
 * and the distinction is not pedantic. A progressbar represents a task
 * advancing toward completion; a meter represents a measurement within a
 * known range. Disk usage, quota consumption and temperature are meters.
 * Announcing "75% complete" for a disk that is 75% full is wrong in a way
 * that matters.
 *
 * Threshold bands change PATTERN as well as colour. A meter's whole
 * purpose is signalling "this is fine" versus "this needs attention", so
 * encoding that in hue alone puts the one bit of information the
 * component exists to convey out of reach for a colour-blind user.
 * ============================================================
 */

import { useMemo } from 'react';

const TONES = {
  ok: { label: 'Normal', pattern: 'solid' },
  warn: { label: 'Approaching limit', pattern: 'hatch' },
  over: { label: 'Over limit', pattern: 'dense' },
};

/**
 * @param {object} props
 * @param {number}  props.value
 * @param {number}  [props.min=0]
 * @param {number}  [props.max=100]
 * @param {number}  [props.warnAt=0.75]   Fraction of range entering warn.
 * @param {number}  [props.overAt=1]      Fraction entering over.
 * @param {string}  props.label
 * @param {string}  [props.valueText]     Overrides the announced value.
 * @param {boolean} [props.showValue=true]
 * @param {'sm'|'md'} [props.size='md']
 * @param {string}  [props.className]
 */
export default function MeterBar({
  value = 0,
  min = 0,
  max = 100,
  warnAt = 0.75,
  overAt = 1,
  label,
  valueText,
  showValue = true,
  size = 'md',
  className = '',
  ...rest
}) {
  const safe = useMemo(() => {
    const lo = Number.isFinite(min) ? min : 0;
    // An inverted or zero range would divide by zero, so max is forced
    // above min rather than trusted.
    const hi = Number.isFinite(max) && max > lo ? max : lo + 1;
    const v = Number.isFinite(value) ? Math.min(Math.max(value, lo), hi) : lo;

    return { lo, hi, v };
  }, [value, min, max]);

  const fraction = (safe.v - safe.lo) / (safe.hi - safe.lo);

  const tone = fraction >= overAt ? 'over' : fraction >= warnAt ? 'warn' : 'ok';

  const percent = Math.round(fraction * 100);

  const classes = [
    'ease-meter-ad',
    `ease-meter-ad--${size}`,
    `ease-meter-ad--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // "42 of 50 seats, approaching limit" beats a bare percentage — the
  // band name is the actionable part.
  const announced =
    valueText ?? `${safe.v} of ${safe.hi}, ${TONES[tone].label.toLowerCase()}`;

  return (
    <div className={classes} {...rest}>
      {(label || showValue) && (
        <div className="ease-meter-ad__head">
          {label && <span className="ease-meter-ad__label">{label}</span>}
          {showValue && (
            <span className="ease-meter-ad__value" aria-hidden="true">
              {safe.v} / {safe.hi}
            </span>
          )}
        </div>
      )}

      <div
        className="ease-meter-ad__track"
        role="meter"
        aria-label={label}
        aria-valuenow={safe.v}
        aria-valuemin={safe.lo}
        aria-valuemax={safe.hi}
        aria-valuetext={announced}
      >
        <span
          className="ease-meter-ad__fill"
          style={{ '--meter-pct-ad': `${percent}%` }}
          aria-hidden="true"
        />
      </div>

      {tone !== 'ok' && (
        <p className="ease-meter-ad__note" aria-hidden="true">
          {TONES[tone].label}
        </p>
      )}
    </div>
  );
}
