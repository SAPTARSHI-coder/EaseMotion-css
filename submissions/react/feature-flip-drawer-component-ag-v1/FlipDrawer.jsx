import React, { useEffect, useState } from 'react';
import './style.css';

/**
 * A Drawer component that enters with a 3D flip animation instead of a simple slide.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the drawer.
 * @param {Function} props.onClose - Callback triggered when the backdrop is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed in the drawer.
 * @param {string} [props.className=""] - Additional custom classes.
 */
const FlipDrawer = ({ isOpen, onClose, children, className = "", ...rest }) => {
    const [renderDrawer, setRenderDrawer] = useState(false);

    useEffect(() => {
        if (isOpen) setRenderDrawer(true);
    }, [isOpen]);

    const handleTransitionEnd = (e) => {
        // Ensure we're targeting the drawer's transition, not a child's
        if (e.target === e.currentTarget && !isOpen) {
            setRenderDrawer(false);
        }
    };

    if (!renderDrawer) return null;

    return (
        <div className={`ease-flip-drawer-overlay-ag ${isOpen ? 'is-open' : ''}`}>
            {/* Backdrop */}
            <div 
                className="ease-flip-drawer-backdrop-ag" 
                onClick={onClose}
                aria-hidden="true"
            ></div>
            
            {/* Drawer Container (Provides 3D Perspective) */}
            <div className="ease-flip-drawer-perspective-ag">
                {/* Drawer Panel */}
                <div 
                    className={`ease-flip-drawer-panel-ag ${isOpen ? 'is-open' : ''} ${className}`.trim()}
                    onTransitionEnd={handleTransitionEnd}
                    role="dialog"
                    aria-modal="true"
                    {...rest}
                >
                    <div className="ease-flip-drawer-content-ag">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipDrawer;
