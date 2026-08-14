import React, { useEffect, useState } from 'react';
import './style.css';

/**
 * A Drawer component that enters from the side and shakes to draw attention if the user tries to close it while a required action is pending.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the drawer.
 * @param {Function} props.onClose - Callback triggered when the backdrop is clicked.
 * @param {boolean} [props.isShaking=false] - Triggers the shake animation when true.
 * @param {React.ReactNode} props.children - The content to be displayed in the drawer.
 * @param {string} [props.className=""] - Additional custom classes.
 */
const ShakeDrawer = ({ isOpen, onClose, isShaking = false, children, className = "", ...rest }) => {
    const [renderDrawer, setRenderDrawer] = useState(false);

    useEffect(() => {
        if (isOpen) setRenderDrawer(true);
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) setRenderDrawer(false);
    };

    if (!renderDrawer) return null;

    return (
        <div className={`ease-drawer-overlay-ag ${isOpen ? 'is-open' : ''}`}>
            {/* Backdrop */}
            <div 
                className="ease-drawer-backdrop-ag" 
                onClick={onClose}
                aria-hidden="true"
            ></div>
            
            {/* Drawer Panel */}
            <div 
                className={`ease-shake-drawer-ag ${isOpen ? 'is-open' : ''} ${isShaking ? 'is-shaking' : ''} ${className}`.trim()}
                onAnimationEnd={handleAnimationEnd}
                role="dialog"
                aria-modal="true"
                {...rest}
            >
                <div className="ease-drawer-content-ag">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ShakeDrawer;
