import { useCallback, useEffect, useRef } from 'react';

/**
 * useAbortController
 * Returns a `getSignal()` function that creates (or reuses) an
 * AbortController tied to the current render lifecycle, and aborts any
 * in-flight controller automatically on unmount or when a new one is
 * requested -- so a fetch started by a component that has since unmounted
 * never resolves into a setState-after-unmount.
 */
export function useAbortController() {
  const controllerRef = useRef(null);

  const getSignal = useCallback(() => {
    if (controllerRef.current) controllerRef.current.abort();
    controllerRef.current = new AbortController();
    return controllerRef.current.signal;
  }, []);

  useEffect(() => {
    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

  return getSignal;
}

export default useAbortController;
