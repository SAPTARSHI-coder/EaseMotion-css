      import React from 'react';

      /**
       * EaseCard component
       *
       * Content card container
       *
       * @component
       * @example
       * <EaseCard className="my-class">Content</EaseCard>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseCard = React.forwardRef(function EaseCard(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-card ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseCard.displayName = 'EaseCard';

      export { EaseCard };
      export default EaseCard;
