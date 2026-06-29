import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Hover = ({
  as: Component = 'div',
  type = 'lift',
  className = '',
  children,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverMap = {
    lift: 'ease-hover-lift',
    scale: 'ease-hover-grow',
    glow: 'ease-hover-glow',
  };

  const cssClass = hoverMap[type] || `ease-hover-${type}`;
  
  const classes = [
    type !== 'shake' ? cssClass : '',
    type === 'shake' && isHovering ? 'ease-shake' : '',
    className
  ].filter(Boolean).join(' ');

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <Component 
      className={classes} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  );
};

Hover.propTypes = {
  as: PropTypes.elementType,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
