import React from 'react';

// Accessible Button for Stepper
export const AccessibleStepperButton = ({ onClick, children, ariaLabel, ...props }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel || children || "Step button"}
            className="ease-hover-lift"
            {...props}
        >
            {children}
        </button>
    );
};

// Accessible Input for Forms
export const AccessibleFormInput = ({ type, placeholder, value, onChange, ariaLabel, ...props }) => {
    return (
        <input
            type={type || "text"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={ariaLabel || placeholder || "Input field"}
            className="w-full p-2 border rounded"
            {...props}
        />
    );
};

// Accessible Form Button
export const AccessibleFormButton = ({ onClick, children, ariaLabel, ...props }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel || children || "Form button"}
            className="ease-hover-lift"
            {...props}
        >
            {children}
        </button>
    );
};

