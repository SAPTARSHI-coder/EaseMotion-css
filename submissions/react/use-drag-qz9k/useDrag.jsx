import { useCallback, useRef, useState } from 'react';

/**
 * useDrag
 * Tracks pointer-drag delta (dx, dy) from where the drag started, and
 * whether a drag is currently active. Uses the Pointer Events API (not
 * mouse/touch separately) so the same handlers work for mouse, touch, and
 * pen input without duplicated logic, and captures the pointer so drag
 * continues correctly even if the cursor leaves the element mid-drag.
 */
export function useDrag(onDragEnd) {
  const [dragging, setDragging] = useState(false);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const startRef = useRef({ x: 0, y: 0 });

  const onPointerDown = useCallback((event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    startRef.current = { x: event.clientX, y: event.clientY };
    setDragging(true);
    setDelta({ x: 0, y: 0 });
  }, []);

  const onPointerMove = useCallback(
    (event) => {
      if (!dragging) return;
      setDelta({
        x: event.clientX - startRef.current.x,
        y: event.clientY - startRef.current.y,
      });
    },
    [dragging]
  );

  const onPointerUp = useCallback(
    (event) => {
      if (!dragging) return;
      event.currentTarget.releasePointerCapture(event.pointerId);
      setDragging(false);
      onDragEnd?.(delta);
    },
    [dragging, delta, onDragEnd]
  );

  return {
    dragging,
    delta,
    handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  };
}

export default useDrag;
