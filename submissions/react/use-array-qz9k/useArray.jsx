import { useCallback, useMemo, useState } from 'react';

/**
 * useArray
 * Array state paired with memoized derived values (isEmpty, count) that
 * update automatically, plus a toggle helper for arrays of primitive
 * values (a multi-select tag list) where "is this value currently
 * present" is the operation callers reach for most often.
 */
export function useArray(initial = []) {
  const [items, setItems] = useState(initial);

  const add = useCallback((item) => setItems((prev) => [...prev, item]), []);

  const remove = useCallback(
    (item) => setItems((prev) => prev.filter((existing) => existing !== item)),
    []
  );

  const toggle = useCallback((item) => {
    setItems((prev) =>
      prev.includes(item) ? prev.filter((existing) => existing !== item) : [...prev, item]
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const isEmpty = useMemo(() => items.length === 0, [items]);
  const count = useMemo(() => items.length, [items]);

  return { items, add, remove, toggle, clear, isEmpty, count, setItems };
}

export default useArray;
