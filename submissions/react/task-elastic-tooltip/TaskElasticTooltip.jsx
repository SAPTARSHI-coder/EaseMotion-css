import React, { useState } from 'react';
import './style.css';

export const TaskElasticTooltip = ({
    text,
    position = "top",
    children
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="task-tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`task-tooltip-box position-${position}`} role="tooltip">
                    <div className="task-tooltip-content">
                        <span className="task-status-dot"></span>
                        {text}
                    </div>
                </div>
            )}
        </div>
    );
};