import { useRef, useCallback, useEffect } from 'react';

/**
 * useMotionOrchestrator
 * WAAPI-based orchestration hook: staggers animations across a list
 * of items and cleanly cancels/replaces any in-flight animation on
 * an item before starting a new one (safe for interrupted/reordered
 * lists, unlike CSS-class remount-based animation).
 */
export function useMotionOrchestrator({
  duration = 400,
  stagger = 60,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
} = {}) {
  const nodeMap = useRef(new Map());   // id -> DOM node
  const animMap = useRef(new Map());   // id -> running Animation

  const registerNode = useCallback((id, node) => {
    if (node) nodeMap.current.set(id, node);
    else nodeMap.current.delete(id);
  }, []);

  const reducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const play = useCallback((ids, keyframes) => {
    ids.forEach((id, index) => {
      const node = nodeMap.current.get(id);
      if (!node) return;

      // Cancel any in-flight animation on this node first.
      const prev = animMap.current.get(id);
      if (prev) prev.cancel();

      if (reducedMotion()) {
        // Jump straight to the final frame, no motion.
        const last = keyframes[keyframes.length - 1];
        Object.assign(node.style, last);
        return;
      }

      const anim = node.animate(keyframes, {
        duration,
        delay: index * stagger,
        easing,
        fill: 'forwards',
      });

      animMap.current.set(id, anim);
      anim.finished
        .then(() => animMap.current.delete(id))
        .catch(() => {}); // swallow cancellation rejections
    });
  }, [duration, stagger, easing]);

  // Cancel everything on unmount to avoid leaks / late callbacks.
  useEffect(() => {
    return () => {
      animMap.current.forEach(anim => anim.cancel());
      animMap.current.clear();
    };
  }, []);

  return { registerNode, play };
}