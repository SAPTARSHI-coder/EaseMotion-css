import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Animate from './Animate';

export default function ScrollReveal({
  type = 'fade-in',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  children,
  ...animateProps
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.1s' }}>
      {isVisible ? (
        <Animate type={type} {...animateProps}>
          {children}
        </Animate>
      ) : (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      )}
    </div>
  );
}

ScrollReveal.propTypes = {
  type: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  triggerOnce: PropTypes.bool,
  children: PropTypes.node
};
