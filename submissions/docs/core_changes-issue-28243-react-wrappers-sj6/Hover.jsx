import React, { useCallback, useState } from 'react';
import { resolveHoverClass } from './animationClasses';

/**
 * <Hover> — declarative wrapper for EaseMotion hover interactions.
 *
 * Effects:
 * - 'lift'   → ease-hover-lift    (translateY on hover)
 * - 'scale'  → ease-hover-grow    (scale up on hover)
 * - 'shrink' → ease-hover-shrink  (scale down on hover)
 * - 'glow'   → ease-hover-glow    (glow shadow on hover)
 * - 'shake'  → plays the one-shot `ease-shake` keyframe on hover-in. The
 *   framework has no pure-CSS hover-shake (a :hover shake would loop while the
 *   pointer rests), so this is driven by state: add the class on mouse-enter,
 *   remove it when the animation ends, ready to fire again next hover.
 *
 * Props:
 * - effect: one of the keywords above (default 'lift').
 * - tag: element type to render (default 'div').
 * - className / style / event handlers: forwarded to the element.
 */
export default function Hover({
  effect = 'lift',
  tag: Tag = 'div',
  className = '',
  children,
  onMouseEnter,
  onAnimationEnd,
  ...props
}) {
  const isShake = effect === 'shake';
  const [shaking, setShaking] = useState(false);

  const handleMouseEnter = useCallback(
    (event) => {
      if (isShake) setShaking(true);
      if (onMouseEnter) onMouseEnter(event);
    },
    [isShake, onMouseEnter]
  );

  const handleAnimationEnd = useCallback(
    (event) => {
      if (isShake) setShaking(false);
      if (onAnimationEnd) onAnimationEnd(event);
    },
    [isShake, onAnimationEnd]
  );

  const classes = [];
  if (isShake) {
    if (shaking) classes.push('ease-shake');
  } else {
    const hoverClass = resolveHoverClass(effect);
    if (hoverClass) classes.push(hoverClass);
  }
  if (className) classes.push(className);

  return (
    <Tag
      className={classes.join(' ')}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      {children}
    </Tag>
  );
}
