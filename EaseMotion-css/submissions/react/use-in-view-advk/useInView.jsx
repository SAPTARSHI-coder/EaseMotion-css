import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useInView
 * Reports whether the referenced element is intersecting the viewport.
 *
 * Returns a callback ref rather than an object ref, so it re-observes correctly
 * when the node is swapped out — a common failure of useRef-based versions.
 */
export function useInView({ threshold = 0, rootMargin = '0px', once = false } = {}) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);
  const nodeRef = useRef(null);

  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  const ref = useCallback(
    (node) => {
      cleanup();
      nodeRef.current = node;
      if (!node) return;

      // No observer support: report visible so content is never withheld.
      if (typeof IntersectionObserver === 'undefined') {
        setInView(true);
        return;
      }

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting && once) cleanup();
        },
        { threshold, rootMargin }
      );

      observerRef.current.observe(node);
    },
    [threshold, rootMargin, once, cleanup]
  );

  useEffect(() => cleanup, [cleanup]);

  return [ref, inView];
}

export default useInView;
