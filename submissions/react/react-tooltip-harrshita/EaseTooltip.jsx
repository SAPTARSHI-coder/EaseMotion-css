import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * EaseTooltip component
 *
 * A lightweight tooltip wrapper that uses the EaseMotion CSS tooltip
 * utility classes. Supports 4 positions, 2 themes, and keyboard focus.
 *
 * @param {object}  props
 * @param {string}  props.content           - Tooltip text (required)
 * @param {'top'|'bottom'|'left'|'right'} [props.position='top'] - Placement
 * @param {'dark'|'light'} [props.theme='dark'] - Visual theme
 * @param {number}  [props.delay=0]          - Show delay in ms
 * @param {string}  [props.className]        - Extra class on wrapper
 * @param {React.ReactNode} props.children   - Trigger element
 */
const EaseTooltip = ({
  content,
  position = 'top',
  theme = 'dark',
  delay = 0,
  className = '',
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const show = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timerRef.current);
    setVisible(false);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const wrapperClass = [
    'ease-tooltip',
    `ease-tooltip--${position}`,
    `ease-tooltip--${theme}`,
    visible ? 'ease-tooltip--visible' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span
      className={wrapperClass}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-label={content}
    >
      {children}
      <span
        className="ease-tooltip__content"
        role="tooltip"
        aria-hidden={!visible}
      >
        {content}
      </span>
    </span>
  );
};

EaseTooltip.displayName = 'EaseTooltip';
export { EaseTooltip };
export default EaseTooltip;
