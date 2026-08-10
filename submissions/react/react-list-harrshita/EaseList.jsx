import React from 'react';

/**
 * EaseMotion List Component
 * 
 * A native React wrapper for the ease-list CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseList = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseList.displayName = 'EaseList';
export default EaseList;
