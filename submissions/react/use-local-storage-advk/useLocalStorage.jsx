import { useCallback, useEffect, useState } from 'react';

/**
 * useLocalStorage
 * State backed by localStorage, synced across tabs/windows via the
 * "storage" event and safe to call during SSR (falls back to initialValue).
 */
export function useLocalStorage(key, initialValue) {
  const read = useCallback(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item === null ? initialValue : JSON.parse(item);
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(read);

  const setStoredValue = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === 'function' ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // Storage full or unavailable (private browsing): keep React state,
          // skip persistence rather than throwing.
        }
        return resolved;
      });
    },
    [key]
  );

  useEffect(() => {
    function onStorage(event) {
      if (event.key !== key) return;
      setValue(event.newValue === null ? initialValue : JSON.parse(event.newValue));
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [key, initialValue]);

  return [value, setStoredValue];
}

export default useLocalStorage;
