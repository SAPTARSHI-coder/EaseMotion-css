
import React from 'react';

/**
 * EaseMotion Chip New Component
 *
 * Wraps the `ease-chip` utility class in a React component.
 */
export const EaseChipNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-chip ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseChipNew.displayName = 'EaseChipNew';
export default EaseChipNew;
