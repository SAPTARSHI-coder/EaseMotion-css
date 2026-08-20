import { useCallback, useState } from 'react';

/**
 * useClampValue
 * Numeric state that's always clamped to a [min, max] range, including
 * against a min/max that changes over time (e.g. a max derived from other
 * state) -- re-clamping on every set call, not just at initialization,
 * which is the detail a hand-rolled version most often gets wrong.
 */
export function useClampValue(initial, min, max) {
  const clamp = useCallback((n) => Math.min(max, Math.max(min, n)), [min, max]);
  const [value, setValue] = useState(() => clamp(initial));

  const setClamped = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === 'function' ? next(prev) : next;
        return clamp(resolved);
      });
    },
    [clamp]
  );

  return [value, setClamped];
}

export default useClampValue;
