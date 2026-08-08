      import React from 'react';

      /**
       * EaseKbd component
       *
       * Keyboard shortcut display
       *
       * @component
       * @example
       * <EaseKbd className="my-class">Content</EaseKbd>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseKbd = React.forwardRef(function EaseKbd(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <kbd
    ref={ref}
    className={`ease-kbd ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </kbd>
);
      });

      EaseKbd.displayName = 'EaseKbd';

      export { EaseKbd };
      export default EaseKbd;
