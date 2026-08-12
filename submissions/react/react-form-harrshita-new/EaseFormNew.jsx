
import React from 'react';

/**
 * EaseMotion Form New Component
 *
 * Wraps the `ease-form` utility class in a React component.
 */
export const EaseFormNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-form ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseFormNew.displayName = 'EaseFormNew';
export default EaseFormNew;
