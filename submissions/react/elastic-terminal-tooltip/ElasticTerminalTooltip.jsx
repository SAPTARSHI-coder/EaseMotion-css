import React, { useState } from 'react';
import './style.css';

export const ElasticTerminalTooltip = ({
    text,
    position = "top",
    children
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="terminal-tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`terminal-tooltip-box position-${position}`} role="tooltip">
                    <div className="terminal-tooltip-content">
                        <span className="terminal-prompt">&gt; </span>
                        {text}
                    </div>
                </div>
            )}
        </div>
    );
};