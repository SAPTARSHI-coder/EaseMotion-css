import { useEffect, useState } from 'react';

/**
 * useGeolocation
 * Wraps navigator.geolocation.watchPosition in hook form, reporting the
 * latest position, loading state, and any error. Watches continuously
 * (rather than a one-shot getCurrentPosition) so a consumer tracking a
 * moving user gets updates without re-requesting permission or re-polling
 * manually, and cleans up the watch on unmount or option change.
 */
export function useGeolocation(options = {}) {
  const { enableHighAccuracy = false, timeout = 10000, maximumAge = 0 } = options;
  const [state, setState] = useState({
    loading: true,
    position: null,
    error: null,
  });

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setState({
        loading: false,
        position: null,
        error: { code: 0, message: 'Geolocation is not supported by this browser.' },
      });
      return;
    }

    setState((prev) => ({ ...prev, loading: true }));

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setState({
          loading: false,
          error: null,
          position: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          },
        });
      },
      (error) => {
        setState({ loading: false, position: null, error });
      },
      { enableHighAccuracy, timeout, maximumAge }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [enableHighAccuracy, timeout, maximumAge]);

  return state;
}

export default useGeolocation;
