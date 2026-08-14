import React, { useState } from 'react';
import './style.css';

/**
 * A Tooltip component that features a smooth zoom-in entrance and zoom-out exit animation.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The element that triggers the tooltip on hover/focus.
 * @param {string} props.content - The text content to display inside the tooltip.
 * @param {string} [props.className=""] - Additional custom classes for the wrapper.
 */
const ZoomTooltip = ({ children, content, className = "", ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className={`ease-zoom-tooltip-wrapper-ag ${className}`.trim()} 
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
            {...rest}
        >
            {children}
            
            <div 
                className={`ease-zoom-tooltip-ag ${isVisible ? 'is-visible' : ''}`}
                role="tooltip"
                aria-hidden={!isVisible}
            >
                {content}
                <div className="ease-zoom-tooltip-arrow-ag"></div>
            </div>
        </div>
    );
};

export default ZoomTooltip;
