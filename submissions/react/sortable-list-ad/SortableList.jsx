/**
 * EaseMotion CSS — SortableList
 * ============================================================
 * Reorderable list operable by keyboard, not only by drag.
 *
 * Drag-and-drop reordering is one of the least accessible patterns in
 * common use: without a pointer there is simply no way to perform the
 * action at all. There is no partial workaround — the feature is either
 * available or it is not.
 *
 * Modifier+arrow moves an item, and every move is announced with its new
 * position. Announcing matters as much as the keybinding: a silent
 * reorder tells a screen reader user nothing about whether the action
 * worked or where the item landed.
 *
 * Drag is layered on top using the native HTML drag-and-drop API rather
 * than pointer maths, so it inherits the platform's own drag affordances
 * and does not need a custom drag image or scroll handling.
 * ============================================================
 */

import { useCallback, useRef, useState } from 'react';

/** Move an item within an array, returning a new array. */
function reorder(list, from, to) {
  const next = list.slice();
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

/**
 * @param {object} props
 * @param {Array<{id: string, label: string}>} props.items
 * @param {(next: Array) => void} props.onReorder
 * @param {(item: object, index: number) => React.ReactNode} [props.renderItem]
 * @param {string}  [props.label='Sortable list']
 * @param {boolean} [props.disabled=false]
 * @param {string}  [props.className]
 */
export default function SortableList({
  items = [],
  onReorder,
  renderItem,
  label = 'Sortable list',
  disabled = false,
  className = '',
  ...rest
}) {
  const itemRefs = useRef([]);
  const dragFrom = useRef(null);

  const [dragOver, setDragOver] = useState(null);
  const [announcement, setAnnouncement] = useState('');

  const valid = items.filter((item) => item && item.id !== undefined);

  const move = useCallback(
    (from, to) => {
      if (disabled) return;
      if (to < 0 || to >= valid.length || from === to) return;

      onReorder?.(reorder(valid, from, to));
      setAnnouncement(
        `${valid[from].label} moved to position ${to + 1} of ${valid.length}.`,
      );

      // Follow the item to its new index, so repeated presses keep
      // moving the same item rather than whatever landed under the
      // original position.
      requestAnimationFrame(() => {
        itemRefs.current[to]?.focus();
      });
    },
    [disabled, valid, onReorder],
  );

  const onKeyDown = useCallback(
    (event, index) => {
      // Modifier-gated, so plain arrows still scroll and navigate.
      const withModifier = event.metaKey || event.ctrlKey || event.altKey;
      if (!withModifier) return;

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        move(index, index - 1);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        move(index, index + 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        move(index, 0);
      } else if (event.key === 'End') {
        event.preventDefault();
        move(index, valid.length - 1);
      }
    },
    [move, valid.length],
  );

  const onDragStart = useCallback(
    (event, index) => {
      if (disabled) return;
      dragFrom.current = index;
      event.dataTransfer.effectAllowed = 'move';
      // Firefox refuses to start a drag unless data is set.
      event.dataTransfer.setData('text/plain', String(index));
    },
    [disabled],
  );

  const onDragOver = useCallback((event, index) => {
    // Required, or the drop event never fires.
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setDragOver(index);
  }, []);

  const onDrop = useCallback(
    (event, index) => {
      event.preventDefault();
      const from = dragFrom.current;
      dragFrom.current = null;
      setDragOver(null);

      if (from === null || from === index) return;
      move(from, index);
    },
    [move],
  );

  const onDragEnd = useCallback(() => {
    dragFrom.current = null;
    setDragOver(null);
  }, []);

  if (valid.length === 0) return null;

  const classes = [
    'ease-sortl-ad',
    disabled ? 'ease-sortl-ad--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      <ul className="ease-sortl-ad__list" aria-label={label}>
        {valid.map((item, index) => (
          <li
            className={`ease-sortl-ad__item${
              dragOver === index ? ' ease-sortl-ad__item--over' : ''
            }`}
            key={item.id}
            draggable={!disabled}
            onDragStart={(event) => onDragStart(event, index)}
            onDragOver={(event) => onDragOver(event, index)}
            onDrop={(event) => onDrop(event, index)}
            onDragEnd={onDragEnd}
          >
            <button
              className="ease-sortl-ad__handle"
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              type="button"
              disabled={disabled}
              // The instruction is in the name because the keybinding is
              // not discoverable any other way.
              aria-label={`${item.label}, position ${index + 1} of ${valid.length}. Press Control or Command with arrow keys to move.`}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="ease-sortl-ad__grip" aria-hidden="true" />
            </button>

            <span className="ease-sortl-ad__content">
              {renderItem ? renderItem(item, index) : item.label}
            </span>

            <span className="ease-sortl-ad__pos" aria-hidden="true">
              {index + 1}
            </span>
          </li>
        ))}
      </ul>

      <span className="ease-sortl-ad__sr" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
