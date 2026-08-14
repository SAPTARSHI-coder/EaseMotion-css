
import React from 'react';

/**
 * EaseMotion Button New Component
 *
 * Wraps the `ease-button` utility class in a React component.
 */
export const EaseButtonNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-button ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseButtonNew.displayName = 'EaseButtonNew';
export default EaseButtonNew;
