import { useEffect, useRef } from 'react';

const requestIdle =
  typeof window !== 'undefined' && window.requestIdleCallback
    ? window.requestIdleCallback
    : (cb) => setTimeout(() => cb({ didTimeout: true, timeRemaining: () => 0 }), 1);

const cancelIdle =
  typeof window !== 'undefined' && window.cancelIdleCallback
    ? window.cancelIdleCallback
    : clearTimeout;

/**
 * useIdleCallback
 * Runs a callback during a browser idle period (requestIdleCallback), with
 * a setTimeout fallback for Safari, which has never implemented the API.
 * Intended for low-priority work -- analytics batching, prefetching,
 * non-critical cache warming -- that shouldn't compete with rendering or
 * user input for main-thread time.
 */
export function useIdleCallback(callback, options = {}) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handle = requestIdle((deadline) => callbackRef.current(deadline), options);
    return () => cancelIdle(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.timeout]);
}

export default useIdleCallback;
