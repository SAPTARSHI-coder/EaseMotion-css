
import React from 'react';

/**
 * EaseMotion CodeInline New Component
 *
 * Wraps the `ease-code-inline` utility class in a React component.
 */
export const EaseCodeInlineNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-code-inline ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCodeInlineNew.displayName = 'EaseCodeInlineNew';
export default EaseCodeInlineNew;
