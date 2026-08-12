import { useEffect } from 'react';

const isTypingTarget = (el) =>
  el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

/**
 * useKeypress
 * Calls onPress when `key` is pressed, ignoring keystrokes that land in a
 * text input, textarea, or contentEditable element -- a global shortcut
 * firing while the user is typing into a field is the most common bug in
 * hand-rolled keyboard shortcut handlers.
 */
export function useKeypress(key, onPress, { ignoreInputs = true } = {}) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== key) return;
      if (ignoreInputs && isTypingTarget(event.target)) return;
      onPress(event);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, onPress, ignoreInputs]);
}

export default useKeypress;
