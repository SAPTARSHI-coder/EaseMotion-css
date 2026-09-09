import { useEffect, useState } from 'react';

const cache = new Map();

/**
 * useScript
 * Loads an external <script> tag once per src across the whole app (even
 * across multiple components mounting the same src concurrently), and
 * reports its load status. A second mount of a src already in the DOM
 * reuses the existing tag instead of injecting a duplicate.
 */
export function useScript(src) {
  const [status, setStatus] = useState(src ? 'loading' : 'idle');

  useEffect(() => {
    if (!src) return;

    let existing = document.querySelector(`script[src="${src}"]`);

    if (!existing) {
      existing = document.createElement('script');
      existing.src = src;
      existing.async = true;
      existing.dataset.status = 'loading';
      document.body.appendChild(existing);
    }

    setStatus(existing.dataset.status || 'loading');

    function handleLoad() {
      existing.dataset.status = 'ready';
      setStatus('ready');
    }
    function handleError() {
      existing.dataset.status = 'error';
      setStatus('error');
    }

    existing.addEventListener('load', handleLoad);
    existing.addEventListener('error', handleError);

    return () => {
      existing.removeEventListener('load', handleLoad);
      existing.removeEventListener('error', handleError);
    };
  }, [src]);

  return status;
}

export default useScript;
