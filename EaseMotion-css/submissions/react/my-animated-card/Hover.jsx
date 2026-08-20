import React from 'react';

/**
 * Hover wraps children with an EaseMotion hover-effect class
 * (e.g. `ease-hover-lift`, `ease-hover-glow`).
 *
 * Props:
 * - effect: 'lift' | 'scale' | 'shake' | 'glow' (defaults to 'lift')
 * - tag: HTML tag to render (defaults to 'div')
 * - className: Additional custom classes
 * - style: Inline styles merged onto the element
 */
export default function Hover({
  effect = 'lift',
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) {
  const classes = [`ease-hover-${effect}`];

  if (className) {
    classes.push(className);
  }

  return (
    <Tag className={classes.join(' ')} style={style} {...props}>
      {children}
    </Tag>
  );
}
