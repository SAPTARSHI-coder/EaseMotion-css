
import React from 'react';

/**
 * EaseMotion Progress New Component
 *
 * Wraps the `ease-progress` utility class in a React component.
 */
export const EaseProgressNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-progress ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseProgressNew.displayName = 'EaseProgressNew';
export default EaseProgressNew;
