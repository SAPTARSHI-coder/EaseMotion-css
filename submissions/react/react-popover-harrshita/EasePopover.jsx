      import React from 'react';

      /**
       * EasePopover component
       *
       * Floating popover tooltip
       *
       * @component
       * @example
       * <EasePopover className="my-class">Content</EasePopover>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EasePopover = React.forwardRef(function EasePopover(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-popover ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EasePopover.displayName = 'EasePopover';

      export { EasePopover };
      export default EasePopover;
