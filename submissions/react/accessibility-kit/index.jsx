import React from 'react';

// Accessible Image Component
export const AccessibleImage = ({ src, alt, className, ...props }) => {
    return (
        <img
            src={src}
            alt={alt || "Image"}
            className={className}
            {...props}
        />
    );
};

// Accessible Button Component
export const AccessibleButton = ({ onClick, children, ariaLabel, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel || children || "Button"}
            className={className || "ease-hover-lift"}
            {...props}
        >
            {children}
        </button>
    );
};

// Accessible Input Component
export const AccessibleInput = ({ type, placeholder, value, onChange, ariaLabel, className, ...props }) => {
    return (
        <input
            type={type || "text"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={ariaLabel || placeholder || "Input field"}
            className={className || "w-full p-2 border rounded"}
            {...props}
        />
    );
};

// Export all as default
const AccessibilityKit = {
    AccessibleImage,
    AccessibleButton,
    AccessibleInput,
};

export default AccessibilityKit;
