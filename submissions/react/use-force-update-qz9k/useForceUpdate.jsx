import { useCallback, useState } from 'react';

/**
 * useForceUpdate
 * Returns a function that forces a re-render, for the rare legitimate case
 * of a component that needs to reflect a mutation to a value React doesn't
 * itself track as state (a third-party imperative API's internal state, a
 * ref whose .current was mutated directly). Uses a functional updater
 * incrementing a counter, not an object literal, so it's safe to call
 * repeatedly in the same tick without React batching it away to a single
 * re-render when more than one is actually needed.
 */
export function useForceUpdate() {
  const [, setTick] = useState(0);
  return useCallback(() => setTick((t) => t + 1), []);
}

export default useForceUpdate;
