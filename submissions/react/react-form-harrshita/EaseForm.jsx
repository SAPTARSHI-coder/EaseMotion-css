      import React from 'react';

      /**
       * EaseForm component
       *
       * Styled HTML form wrapper
       *
       * @component
       * @example
       * <EaseForm className="my-class">Content</EaseForm>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseForm = React.forwardRef(function EaseForm(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <form
    ref={ref}
    className={`ease-form ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </form>
);
      });

      EaseForm.displayName = 'EaseForm';

      export { EaseForm };
      export default EaseForm;
