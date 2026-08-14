import { useEffect, useState } from 'react';

/**
 * useScrollPosition
 * Tracks scroll position of window or a specific element, throttled to
 * one update per animation frame via a pending-frame flag -- so a fast,
 * continuous scroll gesture doesn't queue dozens of redundant setState
 * calls, only one per actual repaint.
 */
export function useScrollPosition(target) {
  const getScroll = () => {
    const node = target && 'current' in target ? target.current : target;
    if (node && node !== window) {
      return { x: node.scrollLeft, y: node.scrollTop };
    }
    return {
      x: typeof window !== 'undefined' ? window.scrollX : 0,
      y: typeof window !== 'undefined' ? window.scrollY : 0,
    };
  };

  const [position, setPosition] = useState(getScroll);

  useEffect(() => {
    const node = target && 'current' in target ? target.current : target || window;
    if (!node) return;

    let pendingFrame = null;

    function handleScroll() {
      if (pendingFrame) return;
      pendingFrame = requestAnimationFrame(() => {
        setPosition(getScroll());
        pendingFrame = null;
      });
    }

    node.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      node.removeEventListener('scroll', handleScroll);
      if (pendingFrame) cancelAnimationFrame(pendingFrame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return position;
}

export default useScrollPosition;
