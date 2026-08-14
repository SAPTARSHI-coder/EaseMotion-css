
import React from 'react';

/**
 * EaseMotion Input New Component
 *
 * Wraps the `ease-input` utility class in a React component.
 */
export const EaseInputNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-input ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseInputNew.displayName = 'EaseInputNew';
export default EaseInputNew;
