import React from 'react';

const ButtonFixed = ({ onClick, children, ariaLabel, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel || "Button"}
            className={className || "ease-hover-lift"}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonFixed;

