import { useEffect, useRef } from 'react';

/**
 * usePreviousDistinct
 * Like usePrevious, but only updates its stored value when the new value
 * is actually different from the last stored one (by a configurable
 * comparator, defaulting to Object.is). Useful when the tracked value can
 * be re-set to the same value across renders and only a genuine CHANGE,
 * not merely a new render, should count as "previous."
 */
export function usePreviousDistinct(value, compare = Object.is) {
  const previousRef = useRef(value);
  const currentRef = useRef(value);

  useEffect(() => {
    if (!compare(currentRef.current, value)) {
      previousRef.current = currentRef.current;
      currentRef.current = value;
    }
  });

  return previousRef.current;
}

export default usePreviousDistinct;
