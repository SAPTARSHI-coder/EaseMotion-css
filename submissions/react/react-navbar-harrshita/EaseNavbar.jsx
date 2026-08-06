import React from 'react';

/**
 * EaseMotion Navbar Component
 * 
 * A native React wrapper for the ease-navbar CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseNavbar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-navbar ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseNavbar.displayName = 'EaseNavbar';
export default EaseNavbar;
