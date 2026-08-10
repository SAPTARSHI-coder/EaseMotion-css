
import React from 'react';

/**
 * EaseMotion Dropdown New Component
 *
 * Wraps the `ease-dropdown` utility class in a React component.
 */
export const EaseDropdownNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-dropdown ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseDropdownNew.displayName = 'EaseDropdownNew';
export default EaseDropdownNew;
