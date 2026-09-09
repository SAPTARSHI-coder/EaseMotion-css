import { useEffect } from 'react';

const isTypingTarget = (el) =>
  el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

/**
 * useHotkeys
 * Registers multiple key-combo -> handler bindings at once (e.g. "mod+k",
 * "mod+shift+p"), normalizing Cmd on Mac and Ctrl elsewhere behind a single
 * "mod" token, so a hotkey map doesn't need a separate platform-detection
 * branch to declare cross-platform shortcuts.
 */
export function useHotkeys(bindings, { ignoreInputs = true } = {}) {
  useEffect(() => {
    const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform);

    function normalize(event) {
      const parts = [];
      if (event.ctrlKey || (isMac && event.metaKey)) parts.push('mod');
      if (event.shiftKey) parts.push('shift');
      if (event.altKey) parts.push('alt');
      parts.push(event.key.toLowerCase());
      return parts.join('+');
    }

    function handleKeyDown(event) {
      if (ignoreInputs && isTypingTarget(event.target)) return;
      const combo = normalize(event);
      const handler = bindings[combo];
      if (handler) {
        event.preventDefault();
        handler(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bindings, ignoreInputs]);
}

export default useHotkeys;
