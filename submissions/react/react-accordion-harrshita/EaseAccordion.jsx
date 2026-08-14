import React from 'react';

/**
 * EaseMotion Accordion Component
 * 
 * A native React wrapper for the ease-accordion CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseAccordion = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-accordion ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseAccordion.displayName = 'EaseAccordion';
export default EaseAccordion;
