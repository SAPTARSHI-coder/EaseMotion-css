
import React from 'react';

/**
 * EaseMotion Menu Component
 *
 * A native React wrapper for the `ease-menu` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EaseMenu = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-menu ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseMenu.displayName = 'EaseMenu';
export default EaseMenu;
