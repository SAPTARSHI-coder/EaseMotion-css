import { useEffect, useRef, useState } from 'react';

/**
 * RevealOnScroll
 * Adds an EaseMotion entrance class when the wrapped content enters the
 * viewport. Falls back to rendering the content visible when
 * IntersectionObserver is unavailable, so content is never trapped hidden.
 */
export default function RevealOnScroll({
  children,
  animation = 'ease-slide-up',
  threshold = 0.2,
  once = true,
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // No observer support: show immediately rather than leaving content hidden.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={[shown ? animation : 'ease-pre-reveal', className]
        .filter(Boolean)
        .join(' ')}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
