import { useEffect, useRef } from 'react';

/**
 * useMutationObserver
 * Observes DOM mutations on a ref'd element -- for the specific case of
 * needing to react to changes made by code OUTSIDE React's control (a
 * third-party widget injecting its own DOM, a browser extension modifying
 * the page). Not a substitute for React state; only reaches for raw DOM
 * observation when the mutation source genuinely isn't React itself.
 */
export function useMutationObserver(targetRef, callback, options = { childList: true, subtree: true }) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const observer = new MutationObserver((mutations, obs) => callbackRef.current(mutations, obs));
    observer.observe(node, options);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, JSON.stringify(options)]);
}

export default useMutationObserver;
