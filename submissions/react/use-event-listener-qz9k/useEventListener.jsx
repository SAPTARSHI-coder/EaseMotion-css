import { useEffect, useRef } from 'react';

/**
 * useEventListener
 * Attaches an event listener to a target (window, document, or a ref'd
 * element) using the latest handler on every call without re-attaching the
 * listener itself when the handler's identity changes -- the same
 * ref-indirection pattern used elsewhere for timers, applied to DOM events.
 */
export function useEventListener(eventName, handler, target) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const node = target && 'current' in target ? target.current : target ?? window;
    if (!node || !node.addEventListener) return;

    function listener(event) {
      handlerRef.current(event);
    }

    node.addEventListener(eventName, listener);
    return () => node.removeEventListener(eventName, listener);
  }, [eventName, target]);
}

export default useEventListener;
