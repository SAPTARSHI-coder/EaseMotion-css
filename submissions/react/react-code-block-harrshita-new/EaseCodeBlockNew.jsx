
import React from 'react';

/**
 * EaseMotion CodeBlock New Component
 *
 * Wraps the `ease-code-block` utility class in a React component.
 */
export const EaseCodeBlockNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-code-block ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCodeBlockNew.displayName = 'EaseCodeBlockNew';
export default EaseCodeBlockNew;
