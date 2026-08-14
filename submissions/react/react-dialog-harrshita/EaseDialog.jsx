import React from 'react';

/**
 * EaseMotion Dialog Component
 * 
 * A native React wrapper for the ease-dialog CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseDialog = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-dialog ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseDialog.displayName = 'EaseDialog';
export default EaseDialog;
