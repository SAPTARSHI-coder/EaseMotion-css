import React, { useEffect } from "react";

/**
 * Shimmer Pulse Modal
 *
 * A reusable React modal component with a smooth shimmer pulse
 * interaction transition powered by EaseMotion CSS utilities.
 *
 * @param {Boolean} isOpen - Controls modal visibility
 * @param {Function} onClose - Callback fired when modal closes
 * @param {String} title - Modal heading text
 * @param {React.ReactNode} children - Modal content
 * @param {Boolean} showClose - Controls close button visibility
 * @param {String} className - Additional custom classes
 */

const ShimmerPulseModal = ({
  isOpen = false,
  onClose,
  title = "Modal",
  children,
  showClose = true,
  className = "",
}) => {

  // Close modal using Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);


  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  if (!isOpen) return null;


  return (
    <div
      className="ease-shimmer-modal-overlay ease-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`ease-shimmer-modal ease-hover-shimmer ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ease-modal-title"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="ease-shimmer-modal-header">
          <h2 id="ease-modal-title">
            {title}
          </h2>

          {showClose && (
            <button
              type="button"
              className="ease-shimmer-modal-close ease-hover-lift"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
        </div>


        <div className="ease-shimmer-modal-content">
          {children}
        </div>

      </div>
    </div>
  );
};


export default ShimmerPulseModal;
