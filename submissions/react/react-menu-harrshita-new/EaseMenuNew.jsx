
import React from 'react';

/**
 * EaseMotion Menu New Component
 *
 * Wraps the `ease-menu` utility class in a React component.
 */
export const EaseMenuNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-menu ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseMenuNew.displayName = 'EaseMenuNew';
export default EaseMenuNew;
