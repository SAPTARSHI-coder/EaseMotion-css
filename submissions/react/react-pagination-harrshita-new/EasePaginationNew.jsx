
import React from 'react';

/**
 * EaseMotion Pagination New Component
 *
 * Wraps the `ease-pagination` utility class in a React component.
 */
export const EasePaginationNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-pagination ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EasePaginationNew.displayName = 'EasePaginationNew';
export default EasePaginationNew;
