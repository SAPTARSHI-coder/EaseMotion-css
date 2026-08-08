      import React from 'react';

      /**
       * EaseDropdown component
       *
       * Dropdown menu component
       *
       * @component
       * @example
       * <EaseDropdown className="my-class">Content</EaseDropdown>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseDropdown = React.forwardRef(function EaseDropdown(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-dropdown ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseDropdown.displayName = 'EaseDropdown';

      export { EaseDropdown };
      export default EaseDropdown;
