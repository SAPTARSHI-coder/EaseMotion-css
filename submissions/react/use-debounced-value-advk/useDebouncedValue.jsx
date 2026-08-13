import { useEffect, useState } from 'react';

/**
 * useDebouncedValue
 * Returns a copy of `value` that only updates after it has stopped changing
 * for `delay` ms. Unlike debouncing a callback, this keeps the debounced
 * value itself in React state so it can be read directly in render/effects.
 */
export function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default useDebouncedValue;
