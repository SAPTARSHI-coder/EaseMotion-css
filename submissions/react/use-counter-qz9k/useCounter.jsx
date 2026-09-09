import { useCallback, useState } from 'react';

/**
 * useCounter
 * Integer state with increment/decrement/reset/set, optionally clamped to
 * a [min, max] range. Distinct from useClampValue in scope: this hook
 * specifically models a step-based counter (a step size, integer-only
 * semantics) rather than a general clamped numeric value that might be
 * set to an arbitrary number directly (e.g. from a text input).
 */
export function useCounter(initial = 0, { min, max, step = 1 } = {}) {
  const clamp = useCallback(
    (n) => {
      let result = n;
      if (min !== undefined) result = Math.max(min, result);
      if (max !== undefined) result = Math.min(max, result);
      return result;
    },
    [min, max]
  );

  const [count, setCount] = useState(() => clamp(initial));

  const increment = useCallback(() => setCount((c) => clamp(c + step)), [clamp, step]);
  const decrement = useCallback(() => setCount((c) => clamp(c - step)), [clamp, step]);
  const reset = useCallback(() => setCount(clamp(initial)), [clamp, initial]);
  const set = useCallback((n) => setCount(clamp(n)), [clamp]);

  return { count, increment, decrement, reset, set };
}

export default useCounter;
