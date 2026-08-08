      import React from 'react';

      /**
       * EaseCheckbox component
       *
       * Styled checkbox input
       *
       * @component
       * @example
       * <EaseCheckbox className="my-class">Content</EaseCheckbox>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseCheckbox = React.forwardRef(function EaseCheckbox(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <label
    ref={ref}
    className={`ease-checkbox ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </label>
);
      });

      EaseCheckbox.displayName = 'EaseCheckbox';

      export { EaseCheckbox };
      export default EaseCheckbox;
