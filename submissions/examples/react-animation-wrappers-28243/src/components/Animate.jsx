import React from 'react';
import PropTypes from 'prop-types';

export default function Animate({
  type,
  duration = 'medium',
  delay = 0,
  iteration = 1,
  onStart,
  onEnd,
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) {
  const classes = [];
  if (type) classes.push(`ease-animate-${type}`);
  if (['fast', 'medium', 'slow'].includes(duration)) classes.push(`ease-duration-${duration}`);
  if (iteration === 'infinite') classes.push('ease-iterate-infinite');
  if (className) classes.push(className);

  const inlineStyle = { ...style };
  if (delay > 0) {
    inlineStyle.animationDelay = `${delay}ms`;
    inlineStyle.transitionDelay = `${delay}ms`;
  }
  if (typeof duration === 'number') {
    inlineStyle.animationDuration = `${duration}ms`;
    inlineStyle.transitionDuration = `${duration}ms`;
  }
  if (typeof iteration === 'number' && iteration !== 1) {
    inlineStyle.animationIterationCount = iteration;
  }

  return (
    <Tag 
      className={classes.join(' ')} 
      style={inlineStyle} 
      onAnimationStart={onStart}
      onAnimationEnd={onEnd}
      {...props}
    >
      {children}
    </Tag>
  );
}

Animate.propTypes = {
  type: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delay: PropTypes.number,
  iteration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  tag: PropTypes.elementType,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
