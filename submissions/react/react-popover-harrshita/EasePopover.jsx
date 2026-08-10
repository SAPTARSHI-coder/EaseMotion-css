import React from 'react';

/**
 * EaseMotion Popover Component
 * 
 * A native React wrapper for the ease-popover CSS class.
 * Supports standard React props and forwards ref.
 */
export const EasePopover = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-popover ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EasePopover.displayName = 'EasePopover';
export default EasePopover;
