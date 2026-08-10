import React, { useState } from 'react';
import './style.css';

export const VisualEditorElasticTooltip = ({
    text,
    shortcut,
    position = "top",
    children
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="editor-tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`editor-tooltip-box position-${position}`} role="tooltip">
                    <div className="editor-tooltip-content">
                        <span className="editor-tooltip-text">{text}</span>
                        {shortcut && <kbd className="editor-tooltip-shortcut">{shortcut}</kbd>}
                    </div>
                </div>
            )}
        </div>
    );
};