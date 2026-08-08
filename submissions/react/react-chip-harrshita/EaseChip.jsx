      import React from 'react';

      /**
       * EaseChip component
       *
       * Compact element chip
       *
       * @component
       * @example
       * <EaseChip className="my-class">Content</EaseChip>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseChip = React.forwardRef(function EaseChip(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <span
    ref={ref}
    className={`ease-chip ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </span>
);
      });

      EaseChip.displayName = 'EaseChip';

      export { EaseChip };
      export default EaseChip;
