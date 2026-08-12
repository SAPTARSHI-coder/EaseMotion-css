import { useEffect, useState } from 'react';

/**
 * useOnlineStatus
 * Tracks navigator.onLine, updating on the browser's online/offline events.
 * Seeds state from navigator.onLine directly so the first render already
 * reflects connectivity instead of assuming true.
 */
export function useOnlineStatus() {
  const [online, setOnline] = useState(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    function setTrue() { setOnline(true); }
    function setFalse() { setOnline(false); }

    window.addEventListener('online', setTrue);
    window.addEventListener('offline', setFalse);
    return () => {
      window.removeEventListener('online', setTrue);
      window.removeEventListener('offline', setFalse);
    };
  }, []);

  return online;
}

export default useOnlineStatus;
