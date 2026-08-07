import React, { useId, useState } from 'react';
import './style.css';

/**
 * ZoomCheckbox — interactive checkbox with a zoom pop when checked.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Label content
 * @param {string} [props.className=""] - Extra class names
 * @param {boolean} [props.defaultChecked=false] - Initial checked state
 */
const ZoomCheckbox = ({
  children,
  className = '',
  defaultChecked = false,
  ...rest
}) => {
  const id = useId();
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label
      className={`zoom-checkbox-sum ${checked ? 'zoom-checkbox-sum--checked' : ''} ${className}`.trim()}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        className="zoom-checkbox-sum__input"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        {...rest}
      />
      <span className="zoom-checkbox-sum__box" aria-hidden="true">
        <span className="zoom-checkbox-sum__mark">✓</span>
      </span>
      <span className="zoom-checkbox-sum__label">{children}</span>
    </label>
  );
};

export default ZoomCheckbox;
