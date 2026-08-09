
import React from 'react';

/**
 * EaseMotion Divider New Component
 *
 * Wraps the `ease-divider` utility class in a React component.
 */
export const EaseDividerNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseDividerNew.displayName = 'EaseDividerNew';
export default EaseDividerNew;
