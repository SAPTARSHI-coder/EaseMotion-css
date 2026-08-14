
import React from 'react';

/**
 * EaseMotion Alert New Component
 *
 * Wraps the `ease-alert` utility class in a React component.
 */
export const EaseAlertNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-alert ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseAlertNew.displayName = 'EaseAlertNew';
export default EaseAlertNew;
