import React, { useEffect, useRef } from 'react';
import './style.css';

/**
 * A Jello Modal component that grabs attention by applying a "jello" wobble effect on mount.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {Function} props.onClose - Callback triggered when the backdrop or close button is clicked.
 * @param {React.ReactNode} props.children - Modal content.
 * @param {string} [props.className=""] - Additional custom classes for the modal body.
 */
const JelloModal = ({ isOpen, onClose, children, className = "", ...rest }) => {
    const modalRef = useRef(null);

    // Close the modal when the Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Optionally focus the modal for screen readers when opened
            modalRef.current?.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="ease-jello-modal-overlay-ag" onClick={onClose} role="presentation">
            <div 
                ref={modalRef}
                className={`ease-jello-modal-body-ag ease-jello-ag ${className}`.trim()}
                onClick={(e) => e.stopPropagation()} 
                role="dialog" 
                aria-modal="true" 
                tabIndex="-1"
                {...rest}
            >
                <button 
                    className="ease-jello-modal-close-ag" 
                    onClick={onClose} 
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default JelloModal;
