import React, { useEffect, useState, cloneElement } from 'react';
import { useReducedMotion } from './hooks/useReducedMotion';
import { buildEaseMotionClasses } from './utils/classBuilder';

/**
 * A declarative wrapper component for applying EaseMotion CSS animations.
 */
export function EaseMotion(props) {
  const {
    children,
    as: Component = 'div',
    isUnmounting = false,
    unmountAnimation,
    ...restProps
  } = props;

  const prefersReducedMotion = useReducedMotion();
  const [shouldRender, setShouldRender] = useState(true);
  const [currentAnimationProps, setCurrentAnimationProps] = useState(restProps);

  useEffect(() => {
    if (isUnmounting && unmountAnimation) {
      setCurrentAnimationProps({
        ...restProps,
        animation: unmountAnimation
      });
      // A naive unmount handling strategy: wait for the duration of the unmount animation
      const duration = restProps.duration || 300;
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, duration);
      return () => clearTimeout(timeout);
    } else {
      setCurrentAnimationProps(restProps);
      setShouldRender(true);
    }
  }, [isUnmounting, unmountAnimation, restProps]);

  if (!shouldRender) return null;

  // Build classes based on props (disabling animation classes if reduced motion is requested)
  let computedClassName = '';
  if (!prefersReducedMotion) {
    computedClassName = buildEaseMotionClasses(currentAnimationProps);
  } else if (restProps.className) {
    computedClassName = restProps.className; // Preserve purely custom classNames
  }

  // If children is a valid React element, we can clone it and append the class name
  if (React.isValidElement(children) && !Array.isArray(children)) {
    return cloneElement(children, {
      className: [children.props.className, computedClassName].filter(Boolean).join(' ')
    });
  }

  // Otherwise, wrap it in a specified element (defaulting to div)
  return (
    <Component className={computedClassName}>
      {children}
    </Component>
  );
}
