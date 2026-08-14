
import React from 'react';

/**
 * EaseMotion Checkbox New Component
 *
 * Wraps the `ease-checkbox` utility class in a React component.
 */
export const EaseCheckboxNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-checkbox ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCheckboxNew.displayName = 'EaseCheckboxNew';
export default EaseCheckboxNew;
