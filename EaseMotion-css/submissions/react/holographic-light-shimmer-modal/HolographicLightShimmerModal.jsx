import React from "react";
import "./style.css";

export default function HolographicLightShimmerModal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}