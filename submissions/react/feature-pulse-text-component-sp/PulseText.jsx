import React from 'react';
import './style.css';

/**
 * PulseText — attention-seeker text with a smooth pulse effect.
 * Uses EaseMotion-style utilities plus a scoped pulse animation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Text or nodes to pulse.
 * @param {boolean} [props.isPulsing=true] - When true, runs the pulse animation.
 * @param {string} [props.as='span'] - Semantic HTML tag to render.
 * @param {string} [props.className=''] - Extra class names.
 */
const PulseText = ({
  children,
  isPulsing = true,
  as: Tag = 'span',
  className = '',
  ...rest
}) => {
  const classes = [
    'ease-pulse-text-sp',
    'ease-fade-in',
    isPulsing ? 'is-pulsing-sp' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={classes}
      aria-live={isPulsing ? 'polite' : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default PulseText;
