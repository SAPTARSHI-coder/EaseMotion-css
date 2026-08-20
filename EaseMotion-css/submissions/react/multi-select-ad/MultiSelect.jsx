/**
 * EaseMotion CSS — MultiSelect
 * ============================================================
 * Multi-select implementing the ARIA combobox pattern.
 *
 * The critical detail is `aria-activedescendant`, not roving tabindex.
 * In a combobox, DOM focus must STAY on the input while the highlighted
 * option changes — otherwise arrow-key navigation moves focus out of the
 * text field and the user can no longer type to filter. Most hand-rolled
 * multi-selects move focus to the option, which breaks the one
 * interaction the component exists for.
 *
 * Other things handled that are commonly missed:
 *
 *  - Backspace on an empty input removes the last chip, which is the
 *    interaction people expect from every tag field they have used.
 *  - Chip removal returns focus to the input rather than to <body>.
 *  - Selection changes are announced, since a chip appearing silently is
 *    invisible to a screen reader user.
 * ============================================================
 */

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {Array<{value: string, label: string, disabled?: boolean}>} props.options
 * @param {string[]} props.value           Selected values.
 * @param {(next: string[]) => void} props.onChange
 * @param {string}   [props.placeholder='Select…']
 * @param {string}   [props.label='Selection']
 * @param {number}   [props.max]           Maximum selections.
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.className]
 */
export default function MultiSelect({
  options = [],
  value = [],
  onChange,
  placeholder = 'Select…',
  label = 'Selection',
  max,
  disabled = false,
  className = '',
  ...rest
}) {
  const baseId = useId();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const selected = useMemo(() => new Set(value), [value]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return options.filter((option) => {
      if (!option || selected.has(option.value)) return false;
      if (!needle) return true;
      return option.label.toLowerCase().includes(needle);
    });
  }, [options, query, selected]);

  const atMax = Number.isFinite(max) && value.length >= max;

  // Clamp the highlight when filtering shrinks the list, or it can point
  // past the end and Enter selects nothing.
  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(filtered.length - 1, 0)));
  }, [filtered.length]);

  const labelFor = useCallback(
    (val) => options.find((o) => o?.value === val)?.label ?? val,
    [options],
  );

  const select = useCallback(
    (option) => {
      if (!option || option.disabled || atMax) return;

      onChange?.([...value, option.value]);
      setAnnouncement(`${option.label} added.`);
      setQuery('');
      inputRef.current?.focus();
    },
    [onChange, value, atMax],
  );

  const remove = useCallback(
    (val) => {
      onChange?.(value.filter((v) => v !== val));
      setAnnouncement(`${labelFor(val)} removed.`);
      // Focus must land somewhere deliberate — removing the focused chip
      // would otherwise drop focus to <body>.
      inputRef.current?.focus();
    },
    [onChange, value, labelFor],
  );

  const onKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setOpen(true);
          setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setOpen(true);
          setActiveIndex((i) =>
            filtered.length ? (i - 1 + filtered.length) % filtered.length : 0,
          );
          break;
        case 'Enter':
          if (open && filtered[activeIndex]) {
            event.preventDefault();
            select(filtered[activeIndex]);
          }
          break;
        case 'Escape':
          if (open) {
            event.preventDefault();
            setOpen(false);
          }
          break;
        case 'Backspace':
          // Only when the input is empty, or this would eat characters.
          if (query === '' && value.length > 0) {
            event.preventDefault();
            remove(value[value.length - 1]);
          }
          break;
        default:
          break;
      }
    },
    [filtered, activeIndex, open, query, value, select, remove],
  );

  // Keep the highlighted option scrolled into view without moving focus.
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.querySelector('[data-active="true"]');
    node?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, open]);

  const classes = [
    'ease-msel-ad',
    open ? 'ease-msel-ad--open' : '',
    disabled ? 'ease-msel-ad--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const listId = `${baseId}-list`;
  const activeId = filtered[activeIndex] ? `${baseId}-opt-${activeIndex}` : undefined;

  return (
    <div className={classes} {...rest}>
      <div
        className="ease-msel-ad__control"
        onClick={() => !disabled && inputRef.current?.focus()}
        role="presentation"
      >
        {value.map((val) => (
          <span className="ease-msel-ad__chip" key={val}>
            {labelFor(val)}
            <button
              className="ease-msel-ad__chip-x"
              type="button"
              disabled={disabled}
              onClick={(event) => {
                event.stopPropagation();
                remove(val);
              }}
              aria-label={`Remove ${labelFor(val)}`}
            >
              &times;
            </button>
          </span>
        ))}

        <input
          className="ease-msel-ad__input"
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-label={label}
          // Focus stays on the input; only this pointer moves.
          aria-activedescendant={open ? activeId : undefined}
          value={query}
          disabled={disabled}
          placeholder={value.length === 0 ? placeholder : ''}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={onKeyDown}
        />
      </div>

      {open && (
        <ul className="ease-msel-ad__list" ref={listRef} id={listId} role="listbox">
          {atMax && (
            <li className="ease-msel-ad__empty">Maximum of {max} selected</li>
          )}

          {!atMax && filtered.length === 0 && (
            <li className="ease-msel-ad__empty">No matches</li>
          )}

          {!atMax &&
            filtered.map((option, index) => (
              <li
                className={`ease-msel-ad__option${
                  index === activeIndex ? ' ease-msel-ad__option--active' : ''
                }`}
                key={option.value}
                id={`${baseId}-opt-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                data-active={index === activeIndex ? 'true' : undefined}
                // mousedown, not click: click fires after blur, which
                // would close the list before the selection registers.
                onMouseDown={(event) => {
                  event.preventDefault();
                  select(option);
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}

      <span className="ease-msel-ad__sr" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
