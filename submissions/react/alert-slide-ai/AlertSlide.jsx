import React, { useState } from 'react';

/**
 * AlertSlide component that displays an alert box with a slide-up animation.
 * Requires EaseMotion CSS utility classes to be imported globally.
 */
const AlertSlide = ({ type = 'info', message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    // We combine basic styling classes with EaseMotion's 'ease-slide-up'
    return (
        <div 
            className={`alert-slide ease-slide-up alert-${type}`} 
            style={{
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: type === 'error' ? '#fdecea' : '#eaf4fd',
                color: type === 'error' ? '#d93025' : '#1a73e8',
                border: `1px solid ${type === 'error' ? '#f5c6cb' : '#b8daff'}`
            }}
        >
            <span>{message}</span>
            <button 
                onClick={handleClose} 
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: 'inherit',
                    fontWeight: 'bold'
                }}
                aria-label="Close"
            >
                &times;
            </button>
        </div>
    );
};

export default AlertSlide;
