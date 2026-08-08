/**
 * EaseMotion CSS — SegmentedControl
 * ============================================================
 * A segmented control with an indicator that slides between options.
 *
 * Implemented as a WAI-ARIA radiogroup rather than a row of buttons.
 * That distinction is the point: a button row puts every option in the tab
 * sequence, so a keyboard user tabbing through a toolbar has to pass
 * through all six range options to reach the next control. A radiogroup
 * takes ONE tab stop, and arrow keys move between options — which is also
 * what screen reader users are told to expect from the role.
 *
 * The indicator is positioned with percentage transforms derived from the
 * selected index, so it needs no measurement, no refs, and no resize
 * observer — it stays correct when the container is resized, when fonts
 * load late, and during SSR.
 * ============================================================
 */

import { useCallback, useId, useRef } from 'react';

/**
 * @param {object} props
 * @param {Array<{value: string, label: string, disabled?: boolean}>} props.options
 * @param {string}   props.value
 * @param {(value: string) => void} props.onChange
 * @param {'sm'|'md'} [props.size='md']
 * @param {boolean}  [props.fullWidth=false]
 * @param {string}   [props.label='View'] Accessible group label.
 * @param {string}   [props.className]
 */
export default function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  label = 'View',
  className = '',
  ...rest
}) {
  const groupId = useId();
  const refs = useRef([]);

  const selectedIndex = options.findIndex((o) => o.value === value);
  // -1 would push the indicator off-canvas, so an unmatched value pins it
  // to the first slot rather than rendering something visibly broken.
  const activeIndex = selectedIndex >= 0 ? selectedIndex : 0;

  /** Move selection to the next enabled option, wrapping at both ends. */
  const move = useCallback(
    (from, direction) => {
      const count = options.length;
      if (count === 0) return;

      // Skip disabled options; bail after a full loop so an all-disabled
      // set cannot spin forever.
      for (let step = 1; step <= count; step += 1) {
        const next = (from + direction * step + count * count) % count;
        if (!options[next].disabled) {
          onChange?.(options[next].value);
          refs.current[next]?.focus();
          return;
        }
      }
    },
    [options, onChange],
  );

  const handleKeyDown = useCallback(
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
          move(-1, 1);
          break;
        case 'End':
          event.preventDefault();
          move(options.length, -1);
          break;
        default:
          break;
      }
    },
    [activeIndex, move, options.length],
  );

  if (options.length === 0) {
    return null;
  }

  const classes = [
    'ease-seg-ad',
    `ease-seg-ad--${size}`,
    fullWidth ? 'ease-seg-ad--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role="radiogroup"
      aria-label={label}
      onKeyDown={handleKeyDown}
      style={{ '--seg-count-ad': options.length }}
      {...rest}
    >
      {/* Indicator is a sibling, not a child of any option, so it can slide
          across the whole track independently of the labels. */}
      <span
        className="ease-seg-ad__indicator"
        style={{ '--seg-active-ad': activeIndex }}
        aria-hidden="true"
      />

      {options.map((option, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            className="ease-seg-ad__option"
            key={option.value}
            id={`${groupId}-${option.value}`}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={isActive}
            disabled={option.disabled}
            // Roving tabindex: only the selected option is tabbable, so the
            // whole group is a single tab stop.
            tabIndex={isActive ? 0 : -1}
            onClick={() => !option.disabled && onChange?.(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
