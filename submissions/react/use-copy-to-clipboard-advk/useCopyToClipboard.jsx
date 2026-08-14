import { useCallback, useRef, useState } from 'react';

/**
 * useCopyToClipboard
 * Copies text to the clipboard and reports a short-lived "copied" flag.
 *
 * Falls back to a hidden textarea + execCommand when the async Clipboard API
 * is unavailable (non-secure context, older WebViews), rather than failing.
 */
export function useCopyToClipboard(resetDelay = 1500) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = useCallback(
    async (text) => {
      let ok = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          ok = true;
        } catch {
          ok = false;
        }
      }

      if (!ok) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          ok = document.execCommand('copy');
        } catch {
          ok = false;
        }
        document.body.removeChild(textarea);
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCopied(ok);
      if (ok) {
        timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
      }
      return ok;
    },
    [resetDelay]
  );

  return [copied, copy];
}

export default useCopyToClipboard;
