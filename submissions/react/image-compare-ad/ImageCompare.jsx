/**
 * EaseMotion CSS — ImageCompare
 * ============================================================
 * Before/after slider.
 *
 * Almost every implementation of this is drag-only, which makes it
 * completely unusable without a pointer — and the content it hides is
 * often the whole point of the page. Implementing the `slider` role with
 * arrow-key control costs very little and makes the comparison operable
 * by keyboard.
 *
 * The clipping approach matters too. Overlaying the "after" image and
 * animating its `width` re-lays-out and re-scales the image on every
 * frame, so the comparison visibly stutters and the image content shifts
 * as it narrows. `clip-path: inset()` clips a fixed-size image instead —
 * the pixels never move, only the visible region changes, and it stays
 * on the compositor.
 * ============================================================
 */

import { useCallback, useEffect, useId, useRef, useState } from 'react';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * @param {object} props
 * @param {string}  props.beforeSrc
 * @param {string}  props.afterSrc
 * @param {string}  props.beforeAlt
 * @param {string}  props.afterAlt
 * @param {number}  [props.defaultValue=50]  Initial split, 0–100.
 * @param {number}  [props.step=2]           Arrow-key increment.
 * @param {string}  [props.beforeLabel='Before']
 * @param {string}  [props.afterLabel='After']
 * @param {string}  [props.className]
 */
export default function ImageCompare({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  defaultValue = 50,
  step = 2,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  ...rest
}) {
  const baseId = useId();
  const rootRef = useRef(null);
  const handleRef = useRef(null);
  const draggingRef = useRef(false);

  const [split, setSplit] = useState(clamp(defaultValue, 0, 100));

  const setFromClientX = useCallback((clientX) => {
    const node = rootRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.width === 0) return;

    setSplit(clamp(((clientX - rect.left) / rect.width) * 100, 0, 100));
  }, []);

  const onPointerDown = useCallback(
    (event) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;

      draggingRef.current = true;
      // Capture routes later moves here even once the pointer leaves the
      // element, so a fast drag does not lose the handle.
      handleRef.current?.setPointerCapture?.(event.pointerId);
      setFromClientX(event.clientX);
      event.preventDefault();
    },
    [setFromClientX],
  );

  const onPointerMove = useCallback(
    (event) => {
      if (!draggingRef.current) return;
      setFromClientX(event.clientX);
    },
    [setFromClientX],
  );

  const endDrag = useCallback((event) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    if (handleRef.current?.hasPointerCapture?.(event.pointerId)) {
      handleRef.current.releasePointerCapture(event.pointerId);
    }
  }, []);

  const onKeyDown = useCallback(
    (event) => {
      let next = null;

      switch (event.key) {
        case 'ArrowLeft':
          next = split - step;
          break;
        case 'ArrowRight':
          next = split + step;
          break;
        case 'PageDown':
          next = split - step * 5;
          break;
        case 'PageUp':
          next = split + step * 5;
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = 100;
          break;
        default:
          return;
      }

      event.preventDefault();
      setSplit(clamp(next, 0, 100));
    },
    [split, step],
  );

  useEffect(
    () => () => {
      draggingRef.current = false;
    },
    [],
  );

  const classes = ['ease-icmp-ad', className].filter(Boolean).join(' ');

  return (
    <figure
      className={classes}
      ref={rootRef}
      style={{ '--icmp-split-ad': `${split}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      {...rest}
    >
      <img className="ease-icmp-ad__img" src={beforeSrc} alt={beforeAlt} draggable="false" />

      {/* Clipped rather than width-animated: the pixels never move, only
          the visible region changes. */}
      <img
        className="ease-icmp-ad__img ease-icmp-ad__img--after"
        id={`${baseId}-img`}
        src={afterSrc}
        alt={afterAlt}
        draggable="false"
      />

      <span className="ease-icmp-ad__tag ease-icmp-ad__tag--before" aria-hidden="true">
        {beforeLabel}
      </span>
      <span className="ease-icmp-ad__tag ease-icmp-ad__tag--after" aria-hidden="true">
        {afterLabel}
      </span>

      <div
        className="ease-icmp-ad__handle"
        ref={handleRef}
        role="slider"
        tabIndex={0}
        aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
        aria-valuenow={Math.round(split)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${Math.round(split)}% ${afterLabel}`}
        aria-controls={`${baseId}-img`}
        onKeyDown={onKeyDown}
      >
        <span className="ease-icmp-ad__grip" aria-hidden="true" />
      </div>
    </figure>
  );
}
