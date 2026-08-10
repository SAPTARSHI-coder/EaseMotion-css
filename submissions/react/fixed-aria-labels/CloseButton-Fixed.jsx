import React from 'react';

const CloseButtonFixed = ({ onClick, className, children, ...props }) => {
    return (
        <button
            onClick={onClick}
            aria-label="Close"
            className={className || "ease-hover-lift"}
            {...props}
        >
            {children || "Close"}
        </button>
    );
};

export default CloseButtonFixed;
