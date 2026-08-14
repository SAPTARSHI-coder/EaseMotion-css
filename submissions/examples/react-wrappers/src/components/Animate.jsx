import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Animate = ({
  as: Component = 'div',
  type = 'fade-in',
  duration,
  delay,
  iteration,
  onStart,
  onEnd,
  className = '',
  style = {},
  children,
  ...rest
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (onStart) el.addEventListener('animationstart', onStart);
    if (onEnd) el.addEventListener('animationend', onEnd);

    return () => {
      if (onStart) el.removeEventListener('animationstart', onStart);
      if (onEnd) el.removeEventListener('animationend', onEnd);
    };
  }, [onStart, onEnd]);

  const classes = ['ease-' + type, className].filter(Boolean).join(' ');

  const customStyles = { ...style };
  
  if (duration) {
    if (typeof duration === 'number' || !isNaN(Number(duration))) {
      customStyles.animationDuration = `${duration}ms`;
    } else {
      customStyles.animationDuration = `var(--ease-speed-${duration})`;
    }
  }

  if (delay) {
    customStyles.animationDelay = `${delay}ms`;
  }

  if (iteration) {
    customStyles.animationIterationCount = iteration;
  }

  return (
    <Component ref={elementRef} className={classes} style={customStyles} {...rest}>
      {children}
    </Component>
  );
};

Animate.propTypes = {
  as: PropTypes.elementType,
  type: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  delay: PropTypes.number,
  iteration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Animate;
