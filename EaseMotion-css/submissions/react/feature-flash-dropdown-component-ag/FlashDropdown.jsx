import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * FlashDropdown Component
 * A React dropdown component that displays a "flash" entrance animation
 * when opened.
 *
 * @param {Object} props
 * @param {string} props.label - The label for the dropdown button.
 * @param {React.ReactNode} props.children - The content to be rendered inside the dropdown.
 */
const FlashDropdown = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close the dropdown if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="ease-flash-dropdown-container-ag" ref={dropdownRef}>
            <button
                className="ease-flash-dropdown-button-ag"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {label}
            </button>

            {isOpen && (
                <div className="ease-flash-dropdown-menu-ag ease-flash-in-ag">
                    {children}
                </div>
            )}
        </div>
    );
};

export default FlashDropdown;
