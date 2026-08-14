import React, { useEffect } from "react";

/**
 * Modal - a React modal component with a shimmer pulse entrance transition,
 * designed for Modern Corporate interfaces.
 *
 * Props:
 * - isOpen (boolean): controls modal visibility
 * - onClose (function): called when the modal should close (backdrop click or Esc)
 * - title (string): modal header title
 * - children (node): modal body content
 */
export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ease-modal-backdrop" onClick={onClose}>
      <div
        className="ease-modal-corporate"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ease-modal-title"
      >
        <div className="ease-modal-corporate__shimmer-bar" />
        <div className="ease-modal-corporate__header">
          <h2 id="ease-modal-title">{title}</h2>
          <button
            className="ease-modal-corporate__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="ease-modal-corporate__body">{children}</div>
      </div>
    </div>
  );
}
