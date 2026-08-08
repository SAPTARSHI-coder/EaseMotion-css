      import React from 'react';

      /**
       * EaseList component
       *
       * Styled list component
       *
       * @component
       * @example
       * <EaseList className="my-class">Content</EaseList>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseList = React.forwardRef(function EaseList(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <ul
    ref={ref}
    className={`ease-list ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </ul>
);
      });

      EaseList.displayName = 'EaseList';

      export { EaseList };
      export default EaseList;
