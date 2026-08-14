/**
 * scrollRevealCore.js
 * -------------------------------------------------------------------------
 * Framework-agnostic scroll-reveal logic shared by <ScrollReveal>. Kept free
 * of React so it can be unit-tested with a mocked IntersectionObserver, the
 * same way the framework's own `core/reveal.js` is tested.
 *
 * The reveal uses the framework's transition-based convention: an element
 * starts with `ease-reveal` (+ an optional direction variant) which holds it
 * hidden, and gains `ease-reveal-active` once it scrolls into view.
 * -------------------------------------------------------------------------
 */

export const REVEAL_BASE_CLASS = 'ease-reveal';
export const REVEAL_ACTIVE_CLASS = 'ease-reveal-active';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** Maps a friendly `variant` keyword to its `ease-reveal-*` direction class. */
export const REVEAL_VARIANT_MAP = {
  up: 'ease-reveal-up',
  down: 'ease-reveal-down',
  left: 'ease-reveal-left',
  right: 'ease-reveal-right',
  scale: 'ease-reveal-scale',
  fade: '', // plain fade — the base class alone
};

/** True when the user has requested reduced motion. */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/**
 * Build the initial (hidden) className for a reveal element:
 * `ease-reveal` + optional direction variant + any extra classes.
 */
export function buildRevealClassName({ variant, className } = {}) {
  const classes = [REVEAL_BASE_CLASS];

  if (variant && Object.prototype.hasOwnProperty.call(REVEAL_VARIANT_MAP, variant)) {
    const variantClass = REVEAL_VARIANT_MAP[variant];
    if (variantClass) classes.push(variantClass);
  }

  if (className) classes.push(className);
  return classes.join(' ');
}

/**
 * Reveal `element` when it enters the viewport by adding `ease-reveal-active`.
 * Returns a cleanup function that disconnects the observer.
 *
 * options:
 *  - once: unobserve after the first reveal (default true)
 *  - threshold / rootMargin: forwarded to IntersectionObserver
 *  - onReveal(element): called after the active class is applied
 *
 * Falls back to revealing immediately when reduced motion is requested or when
 * IntersectionObserver is unavailable (SSR / older browsers).
 */
export function observeReveal(element, options = {}) {
  if (!element) return () => {};

  const { once = true, threshold = 0.15, rootMargin = '0px', onReveal } = options;

  const reveal = () => {
    element.classList.add(REVEAL_ACTIVE_CLASS);
    if (typeof onReveal === 'function') onReveal(element);
  };

  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    reveal();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
  return () => observer.disconnect();
}
