import React, { useState } from "react";
import "./style.css";

const ShimmerNeumorphicModal = ({
  title = "Neumorphic Modal",
  children = "A smooth shimmer pulse modal for modern interfaces.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift open-btn"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-backdrop ease-fade-in">
          <div className="neumorphic-modal">
            <div className="shimmer-layer"></div>

            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <h2>{title}</h2>

            <p>{children}</p>

            <button
              className="close-action ease-hover-lift"
              onClick={() => setIsOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerNeumorphicModal;