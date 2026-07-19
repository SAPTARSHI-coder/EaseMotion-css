import React from 'react';
import './style.css';

/**
 * JelloIcon — entrance animation with a jello wobble.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Icon content (emoji, SVG, or text)
 * @param {string} [props.className=""] - Extra class names
 * @param {string} [props.label="Icon"] - Accessible name
 */
const JelloIcon = ({ children, className = '', label = 'Icon', ...rest }) => {
  return (
    <span
      className={`jello-icon-sum ${className}`.trim()}
      role="img"
      aria-label={label}
      {...rest}
    >
      <span className="jello-icon-sum__inner" aria-hidden="true">
        {children}
      </span>
    </span>
  );
};

export default JelloIcon;
