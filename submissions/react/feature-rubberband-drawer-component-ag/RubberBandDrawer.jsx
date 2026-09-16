import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * RubberBandDrawer Component
 * A React component that implements a side drawer with a bouncy rubberband entrance animation.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the drawer.
 * @param {function} props.onClose - Callback triggered to close the drawer.
 * @param {React.ReactNode} props.children - Drawer content.
 * @param {string} props.position - 'left' or 'right' (default: 'right').
 */
const RubberBandDrawer = ({ isOpen, onClose, children, position = 'right' }) => {
    const [renderDrawer, setRenderDrawer] = useState(isOpen);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setRenderDrawer(true);
            setIsAnimatingOut(false);
        } else if (renderDrawer) {
            setIsAnimatingOut(true);
        }
    }, [isOpen, renderDrawer]);

    const handleAnimationEnd = () => {
        if (isAnimatingOut) {
            setRenderDrawer(false);
            setIsAnimatingOut(false);
        }
    };

    if (!renderDrawer) return null;

    const drawerClass = position === 'left' ? 'ease-drawer-left-ag' : 'ease-drawer-right-ag';
    const animationClass = isAnimatingOut ? 'ease-drawer-exit-ag' : 'ease-rubberband-in-ag';

    return (
        <div className="ease-drawer-overlay-ag" onClick={onClose} aria-hidden="true">
            <div 
                className={`ease-drawer-container-ag ${drawerClass} ${animationClass}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                onAnimationEnd={handleAnimationEnd}
                role="dialog"
                aria-modal="true"
                aria-label="Side Drawer"
            >
                <div className="ease-drawer-header-ag">
                    <button 
                        className="ease-drawer-close-ag" 
                        onClick={onClose}
                        aria-label="Close drawer"
                    >
                        &times;
                    </button>
                </div>
                <div className="ease-drawer-content-ag">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default RubberBandDrawer;
