import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * GlitchAccordion Component
 * A React accordion component that displays a "glitch" exit animation 
 * on its content when it is collapsed.
 *
 * @param {Object} props
 * @param {string} props.title - The title text for the accordion header.
 * @param {React.ReactNode} props.children - The content to be rendered inside the accordion body.
 */
const GlitchAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    const toggleAccordion = () => {
        if (isOpen) {
            // Trigger exit animation
            setIsAnimating(true);
        } else {
            // Open immediately
            setIsOpen(true);
        }
    };

    const handleAnimationEnd = (e) => {
        if (e.animationName === 'easeGlitchOutAg') {
            setIsOpen(false);
            setIsAnimating(false);
        }
    };

    // Calculate actual height for smooth transitions if needed, 
    // though here we rely on the glitch effect mostly.
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children, isOpen]);

    // Determine if the content should be physically mounted in the DOM
    const shouldRenderContent = isOpen || isAnimating;

    return (
        <div className="ease-glitch-accordion-ag">
            <button
                className="ease-glitch-accordion-header-ag"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                {title}
                <span className={`ease-glitch-accordion-icon-ag ${isOpen ? 'open' : ''}`}>
                    &#9662;
                </span>
            </button>

            {shouldRenderContent && (
                <div
                    ref={contentRef}
                    className={`ease-glitch-accordion-content-ag ${
                        isAnimating ? 'ease-glitch-out' : 'ease-glitch-in'
                    }`}
                    style={{ maxHeight: shouldRenderContent ? `${contentHeight}px` : '0' }}
                    onAnimationEnd={handleAnimationEnd}
                    aria-hidden={!isOpen}
                >
                    <div className="ease-glitch-accordion-inner-ag">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GlitchAccordion;
