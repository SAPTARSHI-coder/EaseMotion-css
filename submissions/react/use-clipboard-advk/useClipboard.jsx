import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useClipboard
 * Copy text with a transient "copied" state, a legacy fallback, and a real
 * error state — rather than assuming the write always succeeds.
 */
export function useClipboard({ timeout = 2000 } = {}) {
  const [status, setStatus] = useState('idle'); // idle | copied | error
  const timer = useRef(null);

  // Clear the timer on unmount so setState never fires on a dead component.
  useEffect(() => () => clearTimeout(timer.current), []);

  const schedule = useCallback(
    (next) => {
      setStatus(next);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus('idle'), timeout);
    },
    [timeout]
  );

  const copy = useCallback(
    async (text) => {
      // Clipboard API needs a secure context; fall back where unavailable.
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          schedule('copied');
          return true;
        } catch {
          // permission denied or document not focused — fall through
        }
      }

      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        schedule(ok ? 'copied' : 'error');
        return ok;
      } catch {
        schedule('error');
        return false;
      }
    },
    [schedule]
  );

  return { copy, status, copied: status === 'copied', error: status === 'error' };
}

export default useClipboard;
