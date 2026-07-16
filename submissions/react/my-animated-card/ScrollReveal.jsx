import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal triggers a reveal animation when the wrapped element enters
 * the viewport, using the IntersectionObserver API.
 *
 * Confirmed against animations.css + reveal.js:
 * - `.ease-reveal` is the hidden/transition base class (opacity: 0, plus a
 *   0.7s opacity/transform transition)
 * - `.ease-reveal.ease-reveal-active` is the revealed state (opacity: 1,
 *   transform: none)
 * - `.ease-reveal-up/down/left/right/scale` are direction variants that set
 *   the initial `transform` before reveal
 * - `.ease-duration-{fast|medium|slow}` exists for overriding animation/
 *   transition duration (used in keyframe mode below)
 * - reveal.js itself always reveals once and respects `prefers-reduced-motion`
 *
 * Two modes:
 *
 * 1. DEFAULT (no `type` prop) — mirrors reveal.js: applies `.ease-reveal`
 *    (+ optional `.ease-reveal-{direction}`), then adds `.ease-reveal-active`
 *    once revealed.
 * 2. EXPLICIT (`type` prop) — applies a specific keyframe class
 *    (`ease-{type}`, e.g. `ease-fade-in`, `ease-slide-up`) once revealed,
 *    for a specific entrance animation instead of the library's own reveal
 *    transition. (No vanilla-JS equivalent — an added convenience.)
 *
 * Props:
 * - type: Optional. If set, uses keyframe mode with `ease-{type}` instead of `.ease-reveal`.
 * - direction: 'up' | 'down' | 'left' | 'right' | 'scale'. Default-mode only —
 *              adds `ease-reveal-{direction}` (confirmed in animations.css).
 * - duration: 'fast' | 'medium' | 'slow' | number in ms (defaults to 'medium').
 *             In keyframe mode, keywords add `ease-duration-{duration}`; numbers
 *             set animationDuration inline. Default mode's `.ease-reveal`
 *             manages its own 0.7s transition duration in CSS and ignores this.
 * - delay: Delay in ms before the reveal animation starts
 * - threshold: IntersectionObserver threshold, 0-1 (defaults to 0.15, matching reveal.js)
 * - rootMargin: IntersectionObserver rootMargin (defaults to '0px')
 * - once: If true (default), reveals only once; if false, re-triggers every time
 *         the element re-enters/leaves the viewport (reveal.js itself is always "once")
 * - activeClassName: Companion class added once revealed in default mode
 *   (defaults to 'ease-reveal-active', confirmed against reveal.js + animations.css)
 * - tag: HTML tag to render (defaults to 'div')
 * - className: Additional classes applied at all times
 * - onReveal: Callback fired the first time the element becomes visible
 */
export default function ScrollReveal({
  type,
  direction,
  duration = 'medium',
  delay = 0,
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
  activeClassName = 'ease-reveal-active',
  tag: Tag = 'div',
  className = '',
  onReveal,
  style = {},
  children,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      if (onReveal) onReveal();
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      if (onReveal) onReveal();
      return undefined;
    }

    // Parity with reveal.js: elements already within 85% of viewport height
    // on mount reveal immediately rather than waiting for an intersection.
    if (typeof node.getBoundingClientRect === 'function' && typeof window.innerHeight === 'number') {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh * 0.85 && rect.bottom > 0) {
        setIsVisible(true);
        if (onReveal) onReveal();
        return undefined;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (onReveal) onReveal();
            if (once) observer.unobserve(node);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, once]);

  const classes = [];
  const inlineStyle = { ...style };

  if (type) {
    // Keyframe mode: ease-{type}, matching the real CSS naming.
    if (isVisible) {
      classes.push(`ease-${type}`);
      if (duration === 'fast' || duration === 'medium' || duration === 'slow') {
        classes.push(`ease-duration-${duration}`);
      } else if (typeof duration === 'number') {
        inlineStyle.animationDuration = `${duration}ms`;
      }
      if (delay > 0) inlineStyle.animationDelay = `${delay}ms`;
    } else {
      // No dedicated "pre-reveal" class exists for arbitrary keyframe types,
      // so fall back to an inline opacity of 0 to prevent a flash of
      // visible content before the observer fires.
      inlineStyle.opacity = 0;
    }
  } else {
    // Default mode: mirrors reveal.js's own .ease-reveal / .ease-reveal-active,
    // plus the confirmed direction variants.
    classes.push('ease-reveal');
    if (direction) classes.push(`ease-reveal-${direction}`);
    if (isVisible) classes.push(activeClassName);
    if (delay > 0) inlineStyle.transitionDelay = `${delay}ms`;
  }

  if (className) classes.push(className);

  return (
    <Tag ref={ref} className={classes.join(' ')} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
}