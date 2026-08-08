/**
 * EaseMotion CSS — FilterChips
 * ============================================================
 * Removable filter chips with clear-all.
 *
 * The detail that makes or breaks this is focus after removal. Deleting
 * a chip destroys the element that had focus, so focus falls to <body>
 * and a keyboard user is dumped at the top of the page — mid-task, with
 * no indication of what happened.
 *
 * The fix is not just "focus something": it has to be the RIGHT thing.
 * Focus moves to the next chip, or to the previous one when the last was
 * removed, or to the clear-all control when none remain. That mirrors how
 * the user was moving through the list and keeps their position.
 *
 * Removals are also announced, because a chip vanishing is completely
 * silent to a screen reader otherwise — the filter changes and nothing
 * says so.
 * ============================================================
 */

import { useCallback, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {Array<{id: string, label: string, group?: string}>} props.chips
 * @param {(id: string) => void} props.onRemove
 * @param {() => void} [props.onClearAll]
 * @param {number}  [props.clearAllAfter=2]  Chips before clear-all shows.
 * @param {string}  [props.label='Active filters']
 * @param {string}  [props.className]
 */
export default function FilterChips({
  chips = [],
  onRemove,
  onClearAll,
  clearAllAfter = 2,
  label = 'Active filters',
  className = '',
  ...rest
}) {
  const chipRefs = useRef([]);
  const clearRef = useRef(null);
  const [announcement, setAnnouncement] = useState('');

  const valid = chips.filter((chip) => chip && chip.id !== undefined);

  const remove = useCallback(
    (chip, index) => {
      onRemove?.(chip.id);
      setAnnouncement(`${chip.label} filter removed. ${valid.length - 1} remaining.`);

      // Focus the next chip, or the previous when removing the last, or
      // the clear-all control when the list empties. Deferred a frame so
      // the target exists after React has re-rendered.
      requestAnimationFrame(() => {
        const remaining = valid.length - 1;

        if (remaining === 0) {
          clearRef.current?.focus();
          return;
        }

        const target = index < remaining ? index : remaining - 1;
        chipRefs.current[target]?.focus();
      });
    },
    [onRemove, valid.length],
  );

  const clearAll = useCallback(() => {
    onClearAll?.();
    setAnnouncement('All filters cleared.');
  }, [onClearAll]);

  const onChipKeyDown = useCallback(
    (event, chip, index) => {
      // Backspace and Delete both remove — Delete is the platform
      // convention on Windows, Backspace on macOS.
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        remove(chip, index);
        return;
      }

      if (event.key === 'ArrowRight' && index < valid.length - 1) {
        event.preventDefault();
        chipRefs.current[index + 1]?.focus();
      } else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        chipRefs.current[index - 1]?.focus();
      }
    },
    [remove, valid.length],
  );

  if (valid.length === 0) return null;

  const showClear = Boolean(onClearAll) && valid.length >= clearAllAfter;

  const classes = ['ease-chips-ad', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="group" aria-label={label} {...rest}>
      <ul className="ease-chips-ad__list">
        {valid.map((chip, index) => (
          <li className="ease-chips-ad__item" key={chip.id}>
            <span className="ease-chips-ad__chip">
              {chip.group && (
                <span className="ease-chips-ad__group">{chip.group}:</span>
              )}
              <span className="ease-chips-ad__label">{chip.label}</span>

              <button
                className="ease-chips-ad__remove"
                ref={(node) => {
                  chipRefs.current[index] = node;
                }}
                type="button"
                // The group is included so the announcement is unambiguous
                // when two filters share a label across categories.
                aria-label={`Remove ${chip.group ? `${chip.group} ` : ''}${chip.label} filter`}
                onClick={() => remove(chip, index)}
                onKeyDown={(event) => onChipKeyDown(event, chip, index)}
              >
                &times;
              </button>
            </span>
          </li>
        ))}
      </ul>

      {showClear && (
        <button
          className="ease-chips-ad__clear"
          ref={clearRef}
          type="button"
          onClick={clearAll}
        >
          Clear all
        </button>
      )}

      <span className="ease-chips-ad__sr" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
