import React from 'react';

/**
 * EaseMotion Drawer Component
 * 
 * A native React wrapper for the ease-drawer CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseDrawer = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-drawer ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseDrawer.displayName = 'EaseDrawer';
export default EaseDrawer;
