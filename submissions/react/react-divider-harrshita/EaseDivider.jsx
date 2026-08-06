import React from 'react';

/**
 * EaseMotion Divider Component
 * 
 * A native React wrapper for the ease-divider CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseDivider = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-divider ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseDivider.displayName = 'EaseDivider';
export default EaseDivider;
