import React, { useEffect } from 'react';
import './style.css';

export const ShimmerPulseModal = ({
    isOpen,
    onClose,
    title = "EDITORIAL_ALERT",
    children
}) => {

    // Manage body scroll lock when modal is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Handle escape key closure for accessibility
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="editorial-modal-overlay" onClick={onClose}>
            <div
                className="editorial-modal-container"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* The Premium Shimmer Layer Effect */}
                <div className="editorial-shimmer-pulse-track"></div>

                <div className="editorial-modal-header">
                    <h2 id="modal-title" className="editorial-modal-title">{title}</h2>
                    <button
                        className="editorial-modal-close-btn"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        &#x2715;
                    </button>
                </div>

                <div className="editorial-modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};