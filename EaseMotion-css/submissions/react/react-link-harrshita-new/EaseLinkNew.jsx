
import React from 'react';

/**
 * EaseMotion Link New Component
 *
 * Wraps the `ease-link` utility class in a React component.
 */
export const EaseLinkNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-link ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseLinkNew.displayName = 'EaseLinkNew';
export default EaseLinkNew;
