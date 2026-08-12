
import React from 'react';

/**
 * EaseMotion Badge New Component
 *
 * Wraps the `ease-badge` utility class in a React component.
 */
export const EaseBadgeNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-badge ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseBadgeNew.displayName = 'EaseBadgeNew';
export default EaseBadgeNew;
