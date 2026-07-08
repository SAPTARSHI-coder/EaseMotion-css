import React from 'react';
import PropTypes from 'prop-types';

export default function Hover({
  effect = 'lift',
  tag: Tag = 'div',
  className = '',
  children,
  ...props
}) {
  const classes = [`ease-hover-${effect}`];
  if (className) classes.push(className);

  return (
    <Tag className={classes.join(' ')} {...props}>
      {children}
    </Tag>
  );
}

Hover.propTypes = {
  effect: PropTypes.oneOf(['lift', 'scale', 'shake', 'glow']),
  tag: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node
};
