import React from 'react';

const AriaInput = ({ type, placeholder, value, onChange, ariaLabel, className, ...props }) => {
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

export default AriaInput;
