import { useEffect, useState } from "react";

/**
 * useOnlineStatus — tracks navigator.onLine and the online/offline events.
 *
 * Seeded synchronously from navigator.onLine to avoid a false "online" flash
 * on first render for a page loaded from cache while disconnected.
 *
 * @returns {boolean} Whether the browser is currently online.
 *
 * @example
 *   const online = useOnlineStatus();
 *   if (!online) return <OfflineBanner />;
 */
export function useOnlineStatus() {
  const [online, setOnline] = useState(() =>
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    // Re-sync in case state changed between initial render and effect.
    setOnline(navigator.onLine);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}

export default useOnlineStatus;
