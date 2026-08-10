
import React from 'react';

/**
 * EaseMotion Image New Component
 *
 * Wraps the `ease-image` utility class in a React component.
 */
export const EaseImageNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-image ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseImageNew.displayName = 'EaseImageNew';
export default EaseImageNew;
