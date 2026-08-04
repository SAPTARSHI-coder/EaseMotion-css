import React, { useState } from 'react';
import './style.css';

/**
 * A Blur Banner component that reveals its content when hovered or focused.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be hidden behind the blur effect.
 * @param {string} [props.className=""] - Additional custom classes.
 * @param {string} [props.overlayText="Hover to reveal"] - Text displayed on the blurred overlay.
 */
const BlurBanner = ({ children, className = "", overlayText = "Hover to reveal", ...rest }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div 
            className={`ease-blur-banner-wrapper-ag ${className}`.trim()}
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            onFocus={() => setIsRevealed(true)}
            onBlur={() => setIsRevealed(false)}
            tabIndex="0"
            role="region"
            aria-label="Blur reveal banner"
            {...rest}
        >
            <div className={`ease-blur-banner-content-ag ${isRevealed ? 'ease-unblurred-ag' : 'ease-blurred-ag'}`}>
                {children}
            </div>
            
            <div className={`ease-blur-banner-overlay-ag ${isRevealed ? 'ease-overlay-hidden-ag' : ''}`} aria-hidden="true">
                <span className="ease-blur-banner-text-ag">{overlayText}</span>
            </div>
        </div>
    );
};

export default BlurBanner;
