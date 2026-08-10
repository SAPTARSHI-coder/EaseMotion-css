import React from "react";
import "./style.css";

const LiquidRippleCheckoutModal = ({
  isOpen,
  onClose,
  title = "Checkout Complete",
  description = "Secure your order with a smooth checkout experience.",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="checkout-overlay ease-fade-in">
      <div className="checkout-modal ease-hover-lift">
        <div className="liquid-ripple"></div>

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="checkout-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LiquidRippleCheckoutModal;