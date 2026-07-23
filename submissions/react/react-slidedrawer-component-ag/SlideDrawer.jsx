import React, { useEffect, useRef } from "react";
import "./style.css";

/**
 * A reusable React SlideDrawer component that provides a smooth sliding panel
 * for navigation menus, settings, or filters.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls whether the drawer is visible.
 * @param {React.ReactNode} props.children - Content displayed inside the drawer.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.position="left"] - Drawer position ("left" or "right").
 * @param {function} [props.onClose] - Callback fired when the drawer overlay is clicked or Escape is pressed.
 * @param {string} [props.width="300px"] - Custom drawer width (e.g., "400px", "50%").
 */
const SlideDrawer = ({
    isOpen,
    children,
    className = "",
    position = "left",
    onClose,
    width = "300px",
}) => {
    const drawerRef = useRef(null);

    // Close the drawer if the Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen && onClose) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Construct custom styles for width and position logic
    const drawerStyles = {
        width: width,
        [position]: 0, // dynamically sets left: 0 or right: 0
    };

    const positionClass = position === "right" ? "ease-drawer-right" : "ease-drawer-left";
    const openClass = isOpen ? "ease-drawer-open" : "";

    return (
        <>
            {/* Backdrop Overlay */}
            {isOpen && (
                <div 
                    className="ease-drawer-overlay" 
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            {/* Slide Drawer Panel */}
            <aside
                ref={drawerRef}
                className={`ease-slide-drawer ${positionClass} ${openClass} ${className}`.trim()}
                style={drawerStyles}
                aria-hidden={!isOpen}
                tabIndex="-1"
            >
                {children}
            </aside>
        </>
    );
};

export default SlideDrawer;
