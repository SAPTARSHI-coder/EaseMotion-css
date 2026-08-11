/**
 * EaseMotion CSS — SplitButton
 * ============================================================
 * A primary action paired with a menu of alternatives.
 *
 * Implements the ARIA menu button pattern, where the details matter more
 * than the markup:
 *
 *  - Focus moves INTO the menu on open and RETURNS to the trigger on
 *    close. A menu that opens without moving focus is unreachable by
 *    keyboard; one that closes without returning focus dumps the user at
 *    the top of the page.
 *
 *  - Arrow-down opens with the first item focused, arrow-up with the
 *    last. That asymmetry is in the spec and is what makes reaching the
 *    bottom item of a long menu one keystroke instead of eight.
 *
 *  - Clicking outside closes, but the listener is attached only while
 *    open. A permanently attached document listener runs on every click
 *    in the app for a menu that is almost always shut.
 * ============================================================
 */

import { useCallback, useEffect, useId, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {string}   props.label            Primary action label.
 * @param {() => void} props.onClick        Primary action.
 * @param {Array<{id: string, label: string, onSelect: () => void, disabled?: boolean}>} props.items
 * @param {'primary'|'neutral'} [props.tone='primary']
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.menuLabel='More actions']
 * @param {string}   [props.className]
 */
export default function SplitButton({
  label,
  onClick,
  items = [],
  tone = 'primary',
  disabled = false,
  menuLabel = 'More actions',
  className = '',
  ...rest
}) {
  const baseId = useId();
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const enabledIndexes = items
    .map((item, index) => (item?.disabled ? null : index))
    .filter((index) => index !== null);

  const close = useCallback(
    (returnFocus = true) => {
      setOpen(false);
      // Returning focus is not optional — without it the user is left at
      // <body> and the next Tab starts from the top of the document.
      if (returnFocus) triggerRef.current?.focus();
    },
    [],
  );

  const openMenu = useCallback(
    (position) => {
      if (disabled || enabledIndexes.length === 0) return;

      const index =
        position === 'last'
          ? enabledIndexes[enabledIndexes.length - 1]
          : enabledIndexes[0];

      setActiveIndex(index);
      setOpen(true);
    },
    [disabled, enabledIndexes],
  );

  // Move focus into the menu once it has rendered.
  useEffect(() => {
    if (open) itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  // Outside-click listener attached only while open — a permanent
  // document listener would run on every click in the entire app.
  useEffect(() => {
    if (!open) return undefined;

    const onDocPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onDocPointerDown);
    return () => document.removeEventListener('pointerdown', onDocPointerDown);
  }, [open]);

  const moveItem = useCallback(
    (direction) => {
      if (enabledIndexes.length === 0) return;

      const position = enabledIndexes.indexOf(activeIndex);
      const nextPosition =
        (position + direction + enabledIndexes.length) % enabledIndexes.length;

      setActiveIndex(enabledIndexes[nextPosition]);
    },
    [activeIndex, enabledIndexes],
  );

  const onTriggerKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        openMenu('first');
      } else if (event.key === 'ArrowUp') {
        // Opening upward lands on the last item — one keystroke to the
        // bottom of a long menu instead of walking the whole list.
        event.preventDefault();
        openMenu('last');
      }
    },
    [openMenu],
  );

  const onMenuKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          moveItem(1);
          break;
        case 'ArrowUp':
          event.preventDefault();
          moveItem(-1);
          break;
        case 'Home':
          event.preventDefault();
          setActiveIndex(enabledIndexes[0]);
          break;
        case 'End':
          event.preventDefault();
          setActiveIndex(enabledIndexes[enabledIndexes.length - 1]);
          break;
        case 'Escape':
          event.preventDefault();
          close();
          break;
        case 'Tab':
          // Tab closes rather than trapping — a menu is transient, and
          // trapping focus in one is a common over-correction.
          close(false);
          break;
        default:
          break;
      }
    },
    [moveItem, close, enabledIndexes],
  );

  if (!label) return null;

  const classes = [
    'ease-split-ad',
    `ease-split-ad--${tone}`,
    open ? 'ease-split-ad--open' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} ref={rootRef} {...rest}>
      <button
        className="ease-split-ad__main"
        type="button"
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>

      <button
        className="ease-split-ad__toggle"
        ref={triggerRef}
        type="button"
        disabled={disabled || items.length === 0}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`${baseId}-menu`}
        aria-label={menuLabel}
        onClick={() => (open ? close() : openMenu('first'))}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="ease-split-ad__caret" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="ease-split-ad__menu"
          id={`${baseId}-menu`}
          role="menu"
          aria-label={menuLabel}
          onKeyDown={onMenuKeyDown}
        >
          {items.map((item, index) => (
            <button
              className="ease-split-ad__item"
              key={item.id ?? index}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              tabIndex={index === activeIndex ? 0 : -1}
              onClick={() => {
                item.onSelect?.();
                close();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
