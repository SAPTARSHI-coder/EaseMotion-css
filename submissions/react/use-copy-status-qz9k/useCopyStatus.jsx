import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useCopyStatus
 * Tracks the outcome of a copy-to-clipboard action as an explicit status
 * enum (idle/copied/error), not just a boolean -- so a UI can distinguish
 * "nothing has happened yet" from "the copy succeeded" from "the copy
 * failed," each of which usually deserves distinct visual feedback.
 */
export function useCopyStatus(resetDelay = 2000) {
  const [status, setStatus] = useState('idle');
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copy = useCallback(
    async (text) => {
      clearTimeout(timeoutRef.current);

      try {
        await navigator.clipboard.writeText(text);
        setStatus('copied');
      } catch {
        setStatus('error');
      }

      timeoutRef.current = setTimeout(() => setStatus('idle'), resetDelay);
    },
    [resetDelay]
  );

  return [status, copy];
}

export default useCopyStatus;
