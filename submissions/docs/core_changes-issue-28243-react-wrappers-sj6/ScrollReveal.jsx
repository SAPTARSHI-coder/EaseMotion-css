import React, { useEffect, useRef } from 'react';
import { buildRevealClassName, observeReveal } from './scrollRevealCore';

/**
 * <ScrollReveal> — reveals its content with an EaseMotion entry transition when
 * it scrolls into view, using the IntersectionObserver API under the hood.
 *
 * The element renders hidden (`ease-reveal` + a direction variant) and gains
 * `ease-reveal-active` on intersection. Reduced-motion users, and environments
 * without IntersectionObserver, see the content revealed immediately.
 *
 * Props:
 * - variant: entry direction — 'up' | 'down' | 'left' | 'right' | 'scale' |
 *   'fade' (default 'up').
 * - once: reveal only the first time it enters view (default true).
 * - threshold / rootMargin: forwarded to IntersectionObserver.
 * - onReveal(element): callback fired once the element is revealed.
 * - tag: element type to render (default 'div').
 * - className / style / other props: forwarded to the element.
 */
export default function ScrollReveal({
  variant = 'up',
  once = true,
  threshold = 0.15,
  rootMargin = '0px',
  onReveal,
  tag: Tag = 'div',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const cleanup = observeReveal(ref.current, { once, threshold, rootMargin, onReveal });
    return cleanup;
  }, [once, threshold, rootMargin, onReveal]);

  return (
    <Tag ref={ref} className={buildRevealClassName({ variant, className })} {...props}>
      {children}
    </Tag>
  );
}
