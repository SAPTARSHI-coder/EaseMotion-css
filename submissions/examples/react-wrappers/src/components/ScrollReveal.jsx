import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const ScrollReveal = ({
  as: Component = 'div',
  animation = 'fade-in',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  duration,
  delay,
  className = '',
  style = {},
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasRevealed(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const active = triggerOnce ? hasRevealed : isVisible;

  const classes = [
    active ? `ease-${animation}` : '',
    className
  ].filter(Boolean).join(' ');

  const customStyles = { ...style };
  
  if (!active) {
    customStyles.opacity = 0;
  }

  if (duration && active) {
    if (typeof duration === 'number' || !isNaN(Number(duration))) {
      customStyles.animationDuration = `${duration}ms`;
    } else {
      customStyles.animationDuration = `var(--ease-speed-${duration})`;
    }
  }

  if (delay && active) {
    customStyles.animationDelay = `${delay}ms`;
  }

  return (
    <Component ref={ref} className={classes} style={customStyles} {...rest}>
      {children}
    </Component>
  );
};

ScrollReveal.propTypes = {
  as: PropTypes.elementType,
  animation: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  triggerOnce: PropTypes.bool,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  delay: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
