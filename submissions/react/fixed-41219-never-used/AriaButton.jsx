import React from 'react';
const AriaButton = ({ onClick, children, ariaLabel, className, style, ...props }) => {
  const label = ariaLabel || children || 'Button';
  return (
    <button 
      onClick={onClick}
      aria-label={label}
      className={`ease-hover-lift ${className || ''}`}
      style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
export default AriaButton;
