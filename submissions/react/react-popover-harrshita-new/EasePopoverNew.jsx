
import React from 'react';

/**
 * EaseMotion Popover New Component
 *
 * Wraps the `ease-popover` utility class in a React component.
 */
export const EasePopoverNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EasePopoverNew.displayName = 'EasePopoverNew';
export default EasePopoverNew;
