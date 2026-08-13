import { useEffect, useRef } from 'react';

/**
 * useKeySequence
 * Calls onMatch when the given ordered sequence of keys is pressed within
 * `timeout` ms of each other (e.g. a Konami-code style easter egg, or a
 * "g then i" go-to-inbox shortcut). Tracks progress with a ref, not state,
 * so a fast sequence never triggers intermediate re-renders.
 */
export function useKeySequence(sequence, onMatch, timeout = 1000) {
  const progressRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    function handleKeyDown(event) {
      const now = Date.now();
      if (now - lastTimeRef.current > timeout) progressRef.current = 0;
      lastTimeRef.current = now;

      const expected = sequence[progressRef.current];
      if (event.key.toLowerCase() === expected.toLowerCase()) {
        progressRef.current += 1;
        if (progressRef.current === sequence.length) {
          progressRef.current = 0;
          onMatch(event);
        }
      } else {
        progressRef.current = event.key.toLowerCase() === sequence[0].toLowerCase() ? 1 : 0;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence.join(','), onMatch, timeout]);
}

export default useKeySequence;
