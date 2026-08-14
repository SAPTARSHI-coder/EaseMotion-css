import { useLayoutEffect, useRef } from 'react';

export function useFLIP(listRef, dependencies) {
  const rects = useRef(new Map());

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const children = Array.from(list.children);

    // LAST: get new positions
    children.forEach((child) => {
      const key = child.dataset.key;
      if (!key) return;
      
      const newRect = child.getBoundingClientRect();
      const oldRect = rects.current.get(key);

      if (oldRect) {
        const deltaX = oldRect.left - newRect.left;
        const deltaY = oldRect.top - newRect.top;

        if (deltaX !== 0 || deltaY !== 0) {
          // INVERT: snap back to old position
          child.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          child.style.transition = 'none';

          // PLAY: smooth glide to new position
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              child.style.transform = '';
              child.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
            });
          });
        }
      }
    });

    // FIRST: update cache for the next render
    rects.current.clear();
    children.forEach((child) => {
      const key = child.dataset.key;
      if (key) {
        rects.current.set(key, child.getBoundingClientRect());
      }
    });
  }, dependencies);
}
