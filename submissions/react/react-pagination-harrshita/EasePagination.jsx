
import React from 'react';

/**
 * EaseMotion Pagination Component
 *
 * A native React wrapper for the `ease-pagination` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EasePagination = React.forwardRef(({ className, children, ...props }, ref) => {
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

EasePagination.displayName = 'EasePagination';
export default EasePagination;
