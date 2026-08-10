
import React from 'react';

/**
 * EaseMotion List New Component
 *
 * Wraps the `ease-list` utility class in a React component.
 */
export const EaseListNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-list ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseListNew.displayName = 'EaseListNew';
export default EaseListNew;
