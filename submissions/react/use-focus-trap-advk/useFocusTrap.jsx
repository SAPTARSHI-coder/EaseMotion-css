import { useCallback, useEffect, useRef } from 'react';

const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled])',
  'select:not([disabled])', 'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])', 'details > summary',
].join(',');

/**
 * useFocusTrap
 * Confines Tab within a container while active, and restores focus to whatever
 * was focused before activation.
 *
 * The focusable set is queried per keypress, not cached — a cached list goes
 * stale the moment the dialog's content changes.
 */
export function useFocusTrap(active = true) {
  const ref = useRef(null);
  const previouslyFocused = useRef(null);

  const getFocusable = useCallback(() => {
    if (!ref.current) return [];
    return Array.from(ref.current.querySelectorAll(FOCUSABLE)).filter(
      // offsetParent is null for display:none; also skip zero-size nodes
      (el) => el.offsetParent !== null || el === document.activeElement
    );
  }, []);

  useEffect(() => {
    if (!active || !ref.current) return undefined;

    previouslyFocused.current = document.activeElement;

    const items = getFocusable();
    (items[0] ?? ref.current).focus();

    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const list = getFocusable();
      if (list.length === 0) {
        e.preventDefault();
        return;
      }

      const first = list[0];
      const last = list[list.length - 1];
      const current = document.activeElement;

      if (e.shiftKey && (current === first || !ref.current.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      const prev = previouslyFocused.current;
      // Only restore if the node is still in the document and focusable
      if (prev && document.contains(prev) && typeof prev.focus === 'function') {
        prev.focus();
      }
      previouslyFocused.current = null;
    };
  }, [active, getFocusable]);

  return ref;
}

export default useFocusTrap;
