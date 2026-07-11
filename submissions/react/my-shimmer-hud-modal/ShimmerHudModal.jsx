import React from "react";
import "./style.css";

const ShimmerHudModal = ({
  isOpen,
  onClose,
  title = "HUD Interface",
  description = "Futuristic shimmer pulse modal component.",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="hud-overlay ease-fade-in">
      <div className="hud-modal ease-hover-lift">
        <div className="hud-shimmer"></div>

        <button className="hud-close" onClick={onClose}>
          ✕
        </button>

        <h2>{title}</h2>

        <p>{description}</p>

        {children}
      </div>
    </div>
  );
};

export default ShimmerHudModal;