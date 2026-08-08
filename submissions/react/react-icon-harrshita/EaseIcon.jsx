      import React from 'react';

      /**
       * EaseIcon component
       *
       * SVG icon container
       *
       * @component
       * @example
       * <EaseIcon className="my-class">Content</EaseIcon>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseIcon = React.forwardRef(function EaseIcon(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <span
    ref={ref}
    className={`ease-icon ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </span>
);
      });

      EaseIcon.displayName = 'EaseIcon';

      export { EaseIcon };
      export default EaseIcon;
