import { useEffect } from 'react';

/**
 * useClipboardPaste
 * Calls onPaste(text) whenever a paste event lands anywhere in the document
 * while the hook is mounted. Reads text/plain explicitly rather than the
 * default handler, so callers can transform the pasted string before it
 * reaches a controlled input.
 */
export function useClipboardPaste(onPaste, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    function handlePaste(event) {
      const text = event.clipboardData?.getData('text/plain');
      if (text === undefined || text === '') return;
      onPaste(text, event);
    }

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [onPaste, enabled]);
}

export default useClipboardPaste;
