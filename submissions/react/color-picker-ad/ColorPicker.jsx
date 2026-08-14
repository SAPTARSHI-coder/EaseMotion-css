/**
 * EaseMotion CSS — ColorPicker
 * ============================================================
 * Swatch-based colour picker.
 *
 * A grid of coloured squares is the definitive colour-only interface: to
 * a user who cannot distinguish the hues, every swatch is identical and
 * the control conveys nothing. Each swatch therefore carries a NAME —
 * visible on hover/focus and always present in its accessible name.
 *
 * It is a radiogroup rather than a row of buttons, so the whole palette
 * is one tab stop and arrow keys move between swatches. Tabbing through
 * twenty-four colours to reach the next control is its own accessibility
 * problem.
 *
 * The contrast preview exists because a swatch chosen for a label or a
 * tag is going to have text on it, and "does this look nice" and "can
 * anyone read text on it" are different questions. The ratio is computed
 * against a supplied surface using WCAG relative luminance.
 * ============================================================
 */

import { useCallback, useId, useMemo, useRef } from 'react';

/** Parse #rgb / #rrggbb into channels. Returns null for anything else. */
function parseHex(hex) {
  if (typeof hex !== 'string') return null;

  const value = hex.trim().replace(/^#/, '');
  const full =
    value.length === 3
      ? value.split('').map((c) => c + c).join('')
      : value;

  if (!/^[0-9a-f]{6}$/i.test(full)) return null;

  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

/** WCAG relative luminance. */
function luminance({ r, g, b }) {
  const channel = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/**
 * @param {object} props
 * @param {Array<{value: string, name: string}>} props.swatches
 * @param {string}  props.value
 * @param {(value: string) => void} props.onChange
 * @param {string}  [props.contrastAgainst]  Surface to preview contrast on.
 * @param {string}  [props.label='Colour']
 * @param {string}  [props.className]
 */
export default function ColorPicker({
  swatches = [],
  value,
  onChange,
  contrastAgainst,
  label = 'Colour',
  className = '',
  ...rest
}) {
  const baseId = useId();
  const refs = useRef([]);

  const selectedIndex = swatches.findIndex((s) => s?.value === value);
  const activeIndex = selectedIndex >= 0 ? selectedIndex : 0;

  const surface = useMemo(
    () => (contrastAgainst ? parseHex(contrastAgainst) : null),
    [contrastAgainst],
  );

  const ratioFor = useCallback(
    (hex) => {
      const swatch = parseHex(hex);
      if (!swatch || !surface) return null;
      return contrastRatio(swatch, surface);
    },
    [surface],
  );

  const move = useCallback(
    (from, direction) => {
      const count = swatches.length;
      if (count === 0) return;

      // `+ count * count` keeps the modulo positive when moving left.
      const next = (from + direction + count * count) % count;
      onChange?.(swatches[next].value);
      refs.current[next]?.focus();
    },
    [swatches, onChange],
  );

  const onKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          move(activeIndex, 1);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          move(activeIndex, -1);
          break;
        case 'Home':
          event.preventDefault();
          onChange?.(swatches[0].value);
          refs.current[0]?.focus();
          break;
        case 'End':
          event.preventDefault();
          onChange?.(swatches[swatches.length - 1].value);
          refs.current[swatches.length - 1]?.focus();
          break;
        default:
          break;
      }
    },
    [activeIndex, move, onChange, swatches],
  );

  if (swatches.length === 0) return null;

  const classes = ['ease-cpick-ad', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      role="radiogroup"
      aria-label={label}
      onKeyDown={onKeyDown}
      {...rest}
    >
      <div className="ease-cpick-ad__grid">
        {swatches.map((swatch, index) => {
          const isActive = index === activeIndex;
          const ratio = ratioFor(swatch.value);
          const passes = ratio !== null && ratio >= 4.5;

          // The name is always in the accessible name; the ratio is
          // appended when a surface was supplied, so a screen reader
          // user gets the same information the visual preview shows.
          const accessibleName =
            ratio === null
              ? swatch.name
              : `${swatch.name}, contrast ${ratio.toFixed(1)} to 1, ${
                  passes ? 'passes' : 'fails'
                } AA`;

          return (
            <button
              className={`ease-cpick-ad__swatch${
                isActive ? ' ease-cpick-ad__swatch--active' : ''
              }`}
              key={swatch.value}
              id={`${baseId}-${index}`}
              ref={(node) => {
                refs.current[index] = node;
              }}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={accessibleName}
              tabIndex={isActive ? 0 : -1}
              style={{ '--cp-swatch-ad': swatch.value }}
              onClick={() => onChange?.(swatch.value)}
            >
              {/* Check mark rather than colour alone marks selection. */}
              <span className="ease-cpick-ad__check" aria-hidden="true">
                {isActive ? '✓' : ''}
              </span>
            </button>
          );
        })}
      </div>

      <p className="ease-cpick-ad__name">
        {swatches[activeIndex]?.name}
        {(() => {
          const ratio = ratioFor(swatches[activeIndex]?.value);
          if (ratio === null) return null;

          return (
            <span
              className={`ease-cpick-ad__ratio${
                ratio >= 4.5 ? ' ease-cpick-ad__ratio--pass' : ' ease-cpick-ad__ratio--fail'
              }`}
            >
              {ratio.toFixed(1)}:1 {ratio >= 4.5 ? 'AA' : 'below AA'}
            </span>
          );
        })()}
      </p>
    </div>
  );
}
