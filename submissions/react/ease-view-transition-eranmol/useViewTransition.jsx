import { useCallback } from 'react';

/**
 * useViewTransition
 *
 * Wraps any state update in the native View Transitions API
 * (document.startViewTransition) so the browser can morph between
 * old and new DOM snapshots with a smooth crossfade / morph animation.
 *
 * Falls back to a plain state update when the browser lacks support.
 *
 * @param {object}   opts
 * @param {number}   [opts.duration=300]  – CSS transition duration in ms applied via custom properties
 * @param {string}   [opts.easing='ease'] – CSS timing function
 * @param {Function} [opts.onReady]       – called after the transition pseudo-element is created
 * @returns {{ startTransition: (cb: () => void) => void, supported: boolean }}
 */
export function useViewTransition({
  duration = 300,
  easing = 'ease',
  onReady,
} = {}) {
  const supported =
    typeof document !== 'undefined' &&
    typeof document.startViewTransition === 'function';

  const startTransition = useCallback(
    (updateFn) => {
      if (typeof updateFn !== 'function') return;

      if (!supported) {
        updateFn();
        return;
      }

      const transition = document.startViewTransition(() => {
        updateFn();
        onReady?.();
      });

      transition.ready.then(() => {
        // Expose duration / easing via CSS custom properties so the
        // companion style.css can drive the ::view-transition pseudo-elements.
        document.documentElement.style.setProperty(
          '--vt-duration',
          `${duration}ms`
        );
        document.documentElement.style.setProperty('--vt-easing', easing);
      });
    },
    [supported, duration, easing, onReady]
  );

  return { startTransition, supported };
}
