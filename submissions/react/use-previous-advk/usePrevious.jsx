import { useEffect, useRef } from 'react';

/**
 * usePrevious
 * Returns the value a hook/component held on the previous render (or
 * undefined on the first). Updates the ref in an effect, so the value
 * returned during the *current* render is always one render behind, never
 * the value just written.
 */
export function usePrevious(value) {
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default usePrevious;
