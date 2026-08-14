import { useCallback, useState } from 'react';

/**
 * useList
 * Array state with immutable helper methods (push, removeAt, updateAt,
 * move, clear, reset) so callers never need to hand-write spread-based
 * array updates -- a common source of accidental mutation bugs when a
 * splice or direct index assignment slips into otherwise-immutable state
 * code.
 */
export function useList(initial = []) {
  const [list, setList] = useState(initial);

  const push = useCallback((item) => setList((prev) => [...prev, item]), []);

  const removeAt = useCallback(
    (index) => setList((prev) => prev.filter((_, i) => i !== index)),
    []
  );

  const updateAt = useCallback(
    (index, item) =>
      setList((prev) => prev.map((existing, i) => (i === index ? item : existing))),
    []
  );

  const move = useCallback((from, to) => {
    setList((prev) => {
      if (from === to || from < 0 || to < 0 || from >= prev.length || to >= prev.length) {
        return prev;
      }
      const next = prev.slice();
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  }, []);

  const insertAt = useCallback((index, item) => {
    setList((prev) => {
      const next = prev.slice();
      next.splice(index, 0, item);
      return next;
    });
  }, []);

  const filter = useCallback((predicate) => {
    setList((prev) => prev.filter(predicate));
  }, []);

  const clear = useCallback(() => setList([]), []);
  const reset = useCallback(() => setList(initial), [initial]);

  return [
    list,
    { push, removeAt, updateAt, move, insertAt, filter, clear, reset, setList },
  ];
}

export default useList;
