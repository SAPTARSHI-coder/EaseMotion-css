import React from 'react';

/**
 * EaseMotion Badge Component
 * 
 * A native React wrapper for the ease-badge CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseBadge = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-badge ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseBadge.displayName = 'EaseBadge';
export default EaseBadge;
