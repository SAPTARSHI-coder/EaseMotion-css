import { useCallback, useRef, useState } from 'react';

/**
 * useHover
 * Reports whether the referenced element is currently hovered, via a
 * callback ref so it re-attaches correctly if the underlying node changes.
 */
export function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  const cleanupRef = useRef(null);

  const ref = useCallback((node) => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    nodeRef.current = node;
    if (!node) {
      setHovered(false);
      return;
    }

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    node.addEventListener('pointerenter', onEnter);
    node.addEventListener('pointerleave', onLeave);

    cleanupRef.current = () => {
      node.removeEventListener('pointerenter', onEnter);
      node.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return [ref, hovered];
}

export default useHover;
