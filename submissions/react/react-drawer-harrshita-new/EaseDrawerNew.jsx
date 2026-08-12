
import React from 'react';

/**
 * EaseMotion Drawer New Component
 *
 * Wraps the `ease-drawer` utility class in a React component.
 */
export const EaseDrawerNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseDrawerNew.displayName = 'EaseDrawerNew';
export default EaseDrawerNew;
