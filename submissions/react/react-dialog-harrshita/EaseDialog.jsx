      import React from 'react';

      /**
       * EaseDialog component
       *
       * Modal dialog box
       *
       * @component
       * @example
       * <EaseDialog className="my-class">Content</EaseDialog>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseDialog = React.forwardRef(function EaseDialog(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-dialog ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseDialog.displayName = 'EaseDialog';

      export { EaseDialog };
      export default EaseDialog;
