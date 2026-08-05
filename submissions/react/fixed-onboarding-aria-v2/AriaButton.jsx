import React from 'react';
const AriaButton = ({ onClick, children, ariaLabel, className, ...props }) => {
  return (
    <button 
      onClick={onClick}
      aria-label={ariaLabel || children || "Button"}
      className={className || "ease-hover-lift"}
      {...props}
    >
      {children}
    </button>
  );
};
export default AriaButton;
