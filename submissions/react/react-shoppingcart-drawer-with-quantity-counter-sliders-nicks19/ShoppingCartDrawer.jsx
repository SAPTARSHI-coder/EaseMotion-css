import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function QuantityCounter({ initialQuantity, onUpdate }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [direction, setDirection] = useState(''); // 'up' or 'down'
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    
    // We remove the animation class after it completes to allow it to trigger again
    const timer = setTimeout(() => {
      setDirection('');
    }, 250);

    return () => clearTimeout(timer);
  }, [quantity]);

  const handleIncrement = () => {
    setDirection('up');
    const newQ = quantity + 1;
    setQuantity(newQ);
    onUpdate && onUpdate(newQ);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setDirection('down');
      const newQ = quantity - 1;
      setQuantity(newQ);
      onUpdate && onUpdate(newQ);
    }
  };

  return (
    <div className="ease-qty-counter">
      <button 
        className="ease-qty-btn ease-squish-button" 
        onClick={handleDecrement}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 12h14"/></svg>
      </button>
      
      <div className="ease-qty-display-wrapper">
        <span 
          key={quantity} 
          className={`ease-qty-number ${direction === 'up' ? 'ease-slide-up-in' : direction === 'down' ? 'ease-slide-down-in' : ''}`}
        >
          {quantity}
        </span>
      </div>

      <button 
        className="ease-qty-btn ease-squish-button" 
        onClick={handleIncrement}
        aria-label="Increase quantity"
      >
        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  );
}

export default function ShoppingCartDrawer({
  isOpen,
  onClose,
  items = [],
  onCheckout
}) {
  const [cartItems, setCartItems] = useState(items);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen && cartItems.length === 0) return null;

  return (
    <div className={`ease-drawer-container ${isOpen ? 'is-open' : ''}`}>
      {/* Backdrop */}
      <div 
        className="ease-drawer-backdrop" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer Panel */}
      <div 
        className="ease-drawer-panel ease-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className="ease-drawer-header">
          <h2 className="ease-drawer-title">
            Your Cart 
            <span className="ease-cart-count">{cartItems.length}</span>
          </h2>
          <button 
            className="ease-close-btn ease-squish-button" 
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="ease-drawer-body">
          {cartItems.length === 0 ? (
            <div className="ease-empty-cart">
              <svg viewBox="0 0 24 24" width="48" height="48" color="#9ca3af"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="ease-cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="ease-cart-item ease-fade-in-up">
                  <div className="ease-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="ease-item-details">
                    <div className="ease-item-header">
                      <h3 className="ease-item-name">{item.name}</h3>
                      <button 
                        className="ease-remove-btn ease-squish-button"
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                      </button>
                    </div>
                    <p className="ease-item-price">${item.price.toFixed(2)}</p>
                    <div className="ease-item-actions">
                      <QuantityCounter 
                        initialQuantity={item.quantity} 
                        onUpdate={(q) => handleUpdateQuantity(item.id, q)} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="ease-drawer-footer">
            <div className="ease-summary-row">
              <span>Subtotal</span>
              <span className="ease-subtotal-price">${subtotal.toFixed(2)}</span>
            </div>
            <p className="ease-taxes-note">Shipping and taxes calculated at checkout.</p>
            <button 
              className="ease-checkout-btn ease-squish-button"
              onClick={() => onCheckout && onCheckout(cartItems)}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
