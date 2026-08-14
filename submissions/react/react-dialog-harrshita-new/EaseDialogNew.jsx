
import React from 'react';

/**
 * EaseMotion Dialog New Component
 *
 * Wraps the `ease-dialog` utility class in a React component.
 */
export const EaseDialogNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseDialogNew.displayName = 'EaseDialogNew';
export default EaseDialogNew;
