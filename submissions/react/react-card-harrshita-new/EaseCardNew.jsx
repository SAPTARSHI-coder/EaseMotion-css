
import React from 'react';

/**
 * EaseMotion Card New Component
 *
 * Wraps the `ease-card` utility class in a React component.
 */
export const EaseCardNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-card ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCardNew.displayName = 'EaseCardNew';
export default EaseCardNew;
