import { useEffect, useRef } from 'react';

/**
 * useTimeout
 * Declarative setTimeout: calls `callback` after `delay` ms, always using
 * the latest `callback` passed on the most recent render without that
 * causing the timer itself to be torn down and restarted on every render
 * (the callback is read from a ref inside the timeout, not closed over
 * directly).
 */
export function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

/**
 * useInterval
 * The same declarative pattern as useTimeout, for setInterval: calls
 * `callback` every `interval` ms, always using the latest callback without
 * restarting the interval on every render.
 */
export function useInterval(callback, interval) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval === null) return;

    const id = setInterval(() => callbackRef.current(), interval);
    return () => clearInterval(id);
  }, [interval]);
}

export default useTimeout;
