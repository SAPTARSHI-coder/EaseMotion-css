import React from 'react';

/**
 * EaseMotion CodeInline Component
 * 
 * A native React wrapper for the ease-code-inline CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseCodeInline = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseCodeInline.displayName = 'EaseCodeInline';
export default EaseCodeInline;
