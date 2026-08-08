      import React from 'react';

      /**
       * EaseAvatar component
       *
       * User avatar display
       *
       * @component
       * @example
       * <EaseAvatar className="my-class">Content</EaseAvatar>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseAvatar = React.forwardRef(function EaseAvatar(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-avatar ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseAvatar.displayName = 'EaseAvatar';

      export { EaseAvatar };
      export default EaseAvatar;
