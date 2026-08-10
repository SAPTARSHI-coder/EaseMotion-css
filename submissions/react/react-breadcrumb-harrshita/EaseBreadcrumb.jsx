import React from 'react';

/**
 * EaseMotion Breadcrumb Component
 * 
 * A native React wrapper for the ease-breadcrumb CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseBreadcrumb = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-breadcrumb ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseBreadcrumb.displayName = 'EaseBreadcrumb';
export default EaseBreadcrumb;
