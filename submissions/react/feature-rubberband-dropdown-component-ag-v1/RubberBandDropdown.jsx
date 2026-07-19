import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * A Dropdown component that features a playful rubberband animation on hover/open.
 * 
 * @param {Object} props
 * @param {string} props.title - The title to display on the dropdown toggle button.
 * @param {React.ReactNode} props.children - The content to be displayed in the dropdown menu.
 * @param {string} [props.className=""] - Additional custom classes for the wrapper.
 */
const RubberBandDropdown = ({ title, children, className = "", ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close the dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <div 
            className={`ease-rubberband-dropdown-wrapper-ag ${className}`.trim()} 
            ref={dropdownRef}
            {...rest}
        >
            <button 
                type="button"
                className="ease-rubberband-toggle-ag"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {title}
                <span className="ease-rubberband-chevron-ag" aria-hidden="true">
                    &#9662;
                </span>
            </button>
            
            <div 
                className={`ease-rubberband-menu-ag ${isOpen ? 'is-open' : ''}`}
                role="menu"
            >
                {children}
            </div>
        </div>
    );
};

export default RubberBandDropdown;
