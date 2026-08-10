import React from 'react';

/**
 * EaseMotion Dropdown Component
 * 
 * A native React wrapper for the ease-dropdown CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseDropdown = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-dropdown ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseDropdown.displayName = 'EaseDropdown';
export default EaseDropdown;
