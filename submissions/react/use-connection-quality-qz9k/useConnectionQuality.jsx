import { useEffect, useState } from 'react';

/**
 * useConnectionQuality
 * Reports network connection quality via the Network Information API
 * (effectiveType, downlink, saveData) -- distinct from online/offline
 * detection, which only reports binary connectivity. This is for deciding
 * *what* to load (full-res images vs. compressed, autoplay video vs. not),
 * not whether to load anything at all.
 */
export function useConnectionQuality() {
  const getSnapshot = () => {
    const connection =
      typeof navigator !== 'undefined' &&
      (navigator.connection || navigator.mozConnection || navigator.webkitConnection);

    if (!connection) {
      return { supported: false, effectiveType: null, downlink: null, saveData: false };
    }

    return {
      supported: true,
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      saveData: Boolean(connection.saveData),
    };
  };

  const [quality, setQuality] = useState(getSnapshot);

  useEffect(() => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!connection) return;

    function handleChange() {
      setQuality(getSnapshot());
    }

    connection.addEventListener('change', handleChange);
    return () => connection.removeEventListener('change', handleChange);
  }, []);

  return quality;
}

export default useConnectionQuality;
