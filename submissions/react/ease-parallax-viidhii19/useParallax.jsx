import React, { useEffect, useRef } from 'react';

export function useEaseParallax(speed = 0.5) {
  const ref = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const offset = (elementCenter - viewportCenter) * speed;
            ref.current.style.setProperty('--parallax-y', `${offset}px`);
          }
          requestRef.current = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed]);

  return ref;
}

export function ParallaxLayer({ speed = 0.5, children, className = '' }) {
  const ref = useEaseParallax(speed);
  
  // Adding an EaseMotion CSS utility class ('ease-fade-in') to comply with CONTRIBUTING.md
  return (
    <div ref={ref} className={`ease-parallax-element-viidhii19 ease-fade-in ${className}`}>
      {children}
    </div>
  );
}
