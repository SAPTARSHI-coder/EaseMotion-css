import React, { useState, useEffect } from 'react';
import './style.css'; // Component specific custom styles

const ShoppingCartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onCheckout }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-overlay ease-fade-in">
      <div className="cart-drawer-backdrop" onClick={onClose}></div>
      <div className="cart-drawer-panel ease-slide-left">
        <div className="cart-drawer-header">
          <h2 className="ease-slide-up delay-1">Your Cart</h2>
          <button className="cart-close-btn ease-hover-lift" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart ease-fade-in delay-2">
              <span className="empty-icon ease-pulse">🛒</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <ul className="cart-item-list">
              {cartItems.map((item, index) => (
                <li 
                  key={item.id} 
                  className={`cart-item ease-slide-left`}
                  style={{ animationDelay: `${0.1 * (index + 2)}s` }}
                >
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    
                    <div className="quantity-slider-container">
                      <span className="qty-label">Qty:</span>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="qty-slider ease-hover-lift"
                      />
                      <span className="qty-value ease-pulse">{item.quantity}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-drawer-footer ease-slide-up delay-3">
          <div className="cart-summary">
            <span>Subtotal</span>
            <span className="cart-total-price">${total.toFixed(2)}</span>
          </div>
          <button 
            className="checkout-btn ease-btn ease-hover-lift" 
            onClick={onCheckout}
            disabled={cartItems.length === 0}
          >
            Checkout Securely
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDrawer;
