      import React from 'react';

      /**
       * EaseAlert component
       *
       * Dismissible alert messages
       *
       * @component
       * @example
       * <EaseAlert className="my-class">Content</EaseAlert>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseAlert = React.forwardRef(function EaseAlert(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-alert ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseAlert.displayName = 'EaseAlert';

      export { EaseAlert };
      export default EaseAlert;
