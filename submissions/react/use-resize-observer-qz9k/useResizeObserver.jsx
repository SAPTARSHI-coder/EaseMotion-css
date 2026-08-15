import { useEffect, useRef, useState } from 'react';

/**
 * useResizeObserver
 * Reports a ref'd element's content-box size via ResizeObserver, updating
 * whenever the element's own size changes -- distinct from useWindowSize,
 * which only tracks the viewport. Useful for a component whose size can
 * change independent of the window (a resizable panel, a container whose
 * content grows).
 */
export function useResizeObserver(targetRef) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const observerRef = useRef(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    observerRef.current = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const box = entry.contentBoxSize?.[0];
      if (box) {
        setSize({ width: box.inlineSize, height: box.blockSize });
      } else {
        // Older engines only provide contentRect, not contentBoxSize.
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });

    observerRef.current.observe(node);
    return () => observerRef.current?.disconnect();
  }, [targetRef]);

  return size;
}

export default useResizeObserver;
