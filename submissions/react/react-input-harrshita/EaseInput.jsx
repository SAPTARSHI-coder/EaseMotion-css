      import React from 'react';

      /**
       * EaseInput component
       *
       * Styled text input
       *
       * @component
       * @example
       * <EaseInput className="my-class">Content</EaseInput>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseInput = React.forwardRef(function EaseInput(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <input
    ref={ref}
    className={`ease-input ${className || ''}`.trim()}
    aria-label={ariaLabel || 'Styled text input'}
    {...props}
  />
);
      });

      EaseInput.displayName = 'EaseInput';

      export { EaseInput };
      export default EaseInput;
