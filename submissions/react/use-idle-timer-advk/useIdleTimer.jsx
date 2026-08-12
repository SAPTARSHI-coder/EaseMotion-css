import { useEffect, useRef, useState } from 'react';

const DEFAULT_EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

/**
 * useIdleTimer
 * Reports whether the user has been inactive for `timeout` ms, based on a
 * fixed set of activity events. The timer is reset on activity rather than
 * re-created, so a busy user never accumulates drift from repeated
 * clearTimeout/setTimeout churn.
 */
export function useIdleTimer(timeout = 60000, events = DEFAULT_EVENTS) {
  const [idle, setIdle] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    function reset() {
      setIdle(false);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIdle(true), timeout);
    }

    events.forEach((event) => window.addEventListener(event, reset, { passive: true }));
    reset();

    return () => {
      clearTimeout(timerRef.current);
      events.forEach((event) => window.removeEventListener(event, reset));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout, events.join(',')]);

  return idle;
}

export default useIdleTimer;
