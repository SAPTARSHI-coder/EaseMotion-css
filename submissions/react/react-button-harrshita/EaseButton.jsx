      import React from 'react';

      /**
       * EaseButton component
       *
       * Styled clickable button
       *
       * @component
       * @example
       * <EaseButton className="my-class">Content</EaseButton>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseButton = React.forwardRef(function EaseButton(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <button
    ref={ref}
    className={`ease-button ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </button>
);
      });

      EaseButton.displayName = 'EaseButton';

      export { EaseButton };
      export default EaseButton;
