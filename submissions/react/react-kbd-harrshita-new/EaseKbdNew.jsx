
import React from 'react';

/**
 * EaseMotion Kbd New Component
 *
 * Wraps the `ease-kbd` utility class in a React component.
 */
export const EaseKbdNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-kbd ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseKbdNew.displayName = 'EaseKbdNew';
export default EaseKbdNew;
