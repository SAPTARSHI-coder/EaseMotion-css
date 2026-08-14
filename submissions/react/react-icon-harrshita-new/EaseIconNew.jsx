
import React from 'react';

/**
 * EaseMotion Icon New Component
 *
 * Wraps the `ease-icon` utility class in a React component.
 */
export const EaseIconNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-icon ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseIconNew.displayName = 'EaseIconNew';
export default EaseIconNew;
