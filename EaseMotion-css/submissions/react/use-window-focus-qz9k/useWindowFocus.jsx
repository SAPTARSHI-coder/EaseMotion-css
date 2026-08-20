import { useEffect, useState } from 'react';

/**
 * useWindowFocus
 * Tracks whether the browser window/tab currently has focus, using both
 * window focus/blur AND the Page Visibility API together -- window focus
 * alone misses the "tab is in the background but window is focused"
 * case on some platforms, while visibility alone misses "window itself
 * lost OS-level focus but the tab is still the visible one."
 */
export function useWindowFocus() {
  const getFocusState = () =>
    typeof document !== 'undefined' ? document.hasFocus() && !document.hidden : true;

  const [focused, setFocused] = useState(getFocusState);

  useEffect(() => {
    function update() {
      setFocused(getFocusState());
    }

    window.addEventListener('focus', update);
    window.addEventListener('blur', update);
    document.addEventListener('visibilitychange', update);

    return () => {
      window.removeEventListener('focus', update);
      window.removeEventListener('blur', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return focused;
}

export default useWindowFocus;
