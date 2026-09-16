/**
 * EaseMotion CSS — ResizeHandle
 * ============================================================
 * Split-pane divider that is draggable AND keyboard-operable.
 *
 * Drag-only dividers are the norm and they are simply unusable without a
 * pointer. This implements the WAI-ARIA `separator` pattern: the handle
 * is focusable, exposes its value range, and resizes with arrow keys.
 *
 * Pointer Events are used rather than mouse/touch pairs. `setPointerCapture`
 * routes every subsequent move to the handle even when the pointer leaves
 * it — which is what stops a fast drag from "dropping" the divider. With
 * mousemove on window you also have to guard against text selection and
 * iframe capture; pointer capture handles both.
 * ============================================================
 */

import { useCallback, useEffect, useRef } from 'react';

/** Keep a value inside [min, max]. */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * @param {object} props
 * @param {number}   props.value            Current size in px.
 * @param {(next: number) => void} props.onChange
 * @param {number}   [props.min=120]
 * @param {number}   [props.max=600]
 * @param {number}   [props.step=16]        Arrow-key increment.
 * @param {number}   [props.largeStep=64]   PageUp/PageDown increment.
 * @param {'horizontal'|'vertical'} [props.orientation='vertical']
 *        `vertical` = a vertical divider resizing width.
 * @param {boolean}  [props.inverted=false] Drag left/up to grow.
 * @param {string}   [props.label='Resize panel']
 * @param {string}   [props.className]
 */
export default function ResizeHandle({
  value,
  onChange,
  min = 120,
  max = 600,
  step = 16,
  largeStep = 64,
  orientation = 'vertical',
  inverted = false,
  label = 'Resize panel',
  className = '',
  ...rest
}) {
  const handleRef = useRef(null);
  const dragRef = useRef(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const isVertical = orientation === 'vertical';

  const commit = useCallback(
    (next) => {
      onChangeRef.current?.(clamp(Math.round(next), min, max));
    },
    [min, max],
  );

  const onPointerDown = useCallback(
    (event) => {
      // Ignore secondary buttons — a right-click drag should not resize.
      if (event.button !== 0 && event.pointerType === 'mouse') return;

      handleRef.current?.setPointerCapture(event.pointerId);
      dragRef.current = {
        start: isVertical ? event.clientX : event.clientY,
        startValue: value,
      };
      event.preventDefault();
    },
    [isVertical, value],
  );

  const onPointerMove = useCallback(
    (event) => {
      const drag = dragRef.current;
      if (!drag) return;

      const current = isVertical ? event.clientX : event.clientY;
      const delta = (current - drag.start) * (inverted ? -1 : 1);

      commit(drag.startValue + delta);
    },
    [isVertical, inverted, commit],
  );

  const endDrag = useCallback((event) => {
    if (!dragRef.current) return;
    dragRef.current = null;

    if (handleRef.current?.hasPointerCapture?.(event.pointerId)) {
      handleRef.current.releasePointerCapture(event.pointerId);
    }
  }, []);

  const onKeyDown = useCallback(
    (event) => {
      // Arrow semantics follow the visual axis, so a vertical divider
      // responds to left/right and a horizontal one to up/down.
      const decrease = isVertical ? 'ArrowLeft' : 'ArrowUp';
      const increase = isVertical ? 'ArrowRight' : 'ArrowDown';

      let next = null;

      switch (event.key) {
        case decrease:
          next = value - step;
          break;
        case increase:
          next = value + step;
          break;
        case 'PageDown':
          next = value - largeStep;
          break;
        case 'PageUp':
          next = value + largeStep;
          break;
        case 'Home':
          next = min;
          break;
        case 'End':
          next = max;
          break;
        default:
          return;
      }

      event.preventDefault();
      commit(next);
    },
    [isVertical, value, step, largeStep, min, max, commit],
  );

  // Release capture if the component unmounts mid-drag, or the pointer
  // stays captured against a detached node.
  useEffect(
    () => () => {
      dragRef.current = null;
    },
    [],
  );

  const classes = [
    'ease-resize-ad',
    `ease-resize-ad--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      ref={handleRef}
      role="separator"
      tabIndex={0}
      aria-label={label}
      aria-orientation={orientation}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      {...rest}
    >
      <span className="ease-resize-ad__grip" aria-hidden="true" />
    </div>
  );
}
