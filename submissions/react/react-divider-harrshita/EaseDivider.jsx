      import React from 'react';

      /**
       * EaseDivider component
       *
       * Horizontal or vertical divider
       *
       * @component
       * @example
       * <EaseDivider className="my-class">Content</EaseDivider>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseDivider = React.forwardRef(function EaseDivider(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <hr
    ref={ref}
    className={`ease-divider ${className || ''}`.trim()}
    aria-label={ariaLabel || 'Horizontal or vertical divider'}
    {...props}
  />
);
      });

      EaseDivider.displayName = 'EaseDivider';

      export { EaseDivider };
      export default EaseDivider;
