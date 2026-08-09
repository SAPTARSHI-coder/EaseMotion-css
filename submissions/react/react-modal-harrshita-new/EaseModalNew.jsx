
import React from 'react';

/**
 * EaseMotion Modal New Component
 *
 * Wraps the `ease-modal` utility class in a React component.
 */
export const EaseModalNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-modal ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseModalNew.displayName = 'EaseModalNew';
export default EaseModalNew;
