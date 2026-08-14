import { useCallback, useRef } from 'react';

/**
 * useLongPress
 * Detects a press-and-hold gesture, separate from a normal click -- fires
 * onLongPress after `threshold` ms of continuous pointer-down, and cancels
 * cleanly if the pointer lifts or leaves before the threshold, so a quick
 * tap never also triggers the long-press action.
 */
export function useLongPress(onLongPress, { threshold = 500, onClick } = {}) {
  const timerRef = useRef(null);
  const firedRef = useRef(false);

  const start = useCallback(() => {
    firedRef.current = false;
    timerRef.current = setTimeout(() => {
      firedRef.current = true;
      onLongPress();
    }, threshold);
  }, [onLongPress, threshold]);

  const clear = useCallback(
    (shouldTriggerClick) => {
      clearTimeout(timerRef.current);
      if (shouldTriggerClick && !firedRef.current) onClick?.();
    },
    [onClick]
  );

  return {
    onPointerDown: start,
    onPointerUp: () => clear(true),
    onPointerLeave: () => clear(false),
    onPointerCancel: () => clear(false),
  };
}

export default useLongPress;
