
import React from 'react';

/**
 * EaseMotion CodeBlock Component
 *
 * A native React wrapper for the `ease-code-block` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EaseCodeBlock = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseCodeBlock.displayName = 'EaseCodeBlock';
export default EaseCodeBlock;
