import React from "react";
import "./style.css";

export default function DarkMinimalistShimmerModal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <header>
          <h2>{title}</h2>
        </header>

        <main>{children}</main>

        <footer>
          <button onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}