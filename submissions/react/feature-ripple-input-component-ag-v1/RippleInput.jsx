import React, { useState } from 'react';
import './style.css';

/**
 * RippleInput Component
 * A React component that wraps an input field and provides a "ripple" effect
 * radiating from the input's border when it receives focus.
 *
 * @param {Object} props
 * @param {string} props.id - HTML id for the input (for a11y labels).
 * @param {string} props.label - Label text for the input.
 * @param {string} props.type - Input type (default: text).
 * @param {string} props.placeholder - Placeholder text.
 */
const RippleInput = ({ id, label, type = 'text', placeholder = '', ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    
    // We use a separate key to re-trigger the animation every time it's focused
    const [rippleKey, setRippleKey] = useState(0);

    const handleFocus = (e) => {
        setIsFocused(true);
        setRippleKey(prev => prev + 1); // Force re-render of the ripple element
        if (rest.onFocus) rest.onFocus(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        if (rest.onBlur) rest.onBlur(e);
    };

    return (
        <div className="ease-ripple-input-container-ag">
            {label && (
                <label htmlFor={id} className="ease-ripple-label-ag">
                    {label}
                </label>
            )}
            <div className="ease-ripple-wrapper-ag">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="ease-ripple-input-field-ag"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />
                
                {/* The element responsible for the visual ripple animation on focus */}
                {isFocused && (
                    <div 
                        key={rippleKey} 
                        className="ease-ripple-effect-ag"
                        aria-hidden="true"
                    ></div>
                )}
            </div>
        </div>
    );
};

export default RippleInput;
