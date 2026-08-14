
import React from 'react';

/**
 * EaseMotion Navbar New Component
 *
 * Wraps the `ease-navbar` utility class in a React component.
 */
export const EaseNavbarNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseNavbarNew.displayName = 'EaseNavbarNew';
export default EaseNavbarNew;
