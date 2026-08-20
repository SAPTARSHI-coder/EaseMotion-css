import React from 'react';
import './style.css';

/**
 * A Glow Input component that applies a smooth glowing shadow effect on hover and focus.
 * 
 * @param {Object} props
 * @param {string} [props.className=""] - Additional custom classes.
 * @param {string} [props.glowColor="#3b82f6"] - The CSS color for the glow effect.
 */
const GlowInput = React.forwardRef(({ className = "", glowColor = "#3b82f6", ...rest }, ref) => {
    return (
        <input 
            ref={ref}
            className={`ease-glow-input-ag ${className}`.trim()} 
            style={{ '--glow-color-ag': glowColor }}
            {...rest}
        />
    );
});

GlowInput.displayName = 'GlowInput';

export default GlowInput;
