import React, { useState, useEffect } from 'react';

/**
 * ShoppingCartDrawer
 * An off-canvas shopping cart with animated quantity counters.
 * 
 * Props:
 * - isOpen: boolean - Drawer visibility.
 * - onClose: () => void - Callback to close.
 * - items: Array<{ id, name, price, qty, image }> - Cart items.
 * - onUpdateQty: (id, newQty) => void - Callback when qty changes.
 */
export default function ShoppingCartDrawer({ isOpen, onClose, items = [], onUpdateQty }) {
  const [isVisible, setIsVisible] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRenderDrawer(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setRenderDrawer(false);
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!renderDrawer) return null;

  return (
    <div className="ease-sc-backdrop" onClick={onClose}>
      <div 
        className={`ease-sc-panel ${isVisible ? 'ease-sc-panel--open' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="ease-sc-header">
          <h2 className="ease-sc-title">Your Cart</h2>
          <button className="ease-sc-close" onClick={onClose}>×</button>
        </div>

        <div className="ease-sc-body">
          {items.length === 0 ? (
            <p className="ease-sc-empty">Your cart is empty.</p>
          ) : (
            <ul className="ease-sc-list">
              {items.map(item => (
                <li key={item.id} className="ease-sc-item">
                  <img src={item.image} alt={item.name} className="ease-sc-img" />
                  <div className="ease-sc-details">
                    <h3 className="ease-sc-name">{item.name}</h3>
                    <p className="ease-sc-price">${item.price.toFixed(2)}</p>
                    <div className="ease-sc-qty-wrapper">
                      <button 
                        className="ease-sc-qty-btn"
                        onClick={() => onUpdateQty && onUpdateQty(item.id, Math.max(0, item.qty - 1))}
                      >
                        −
                      </button>
                      <span className="ease-sc-qty-val">{item.qty}</span>
                      <button 
                        className="ease-sc-qty-btn"
                        onClick={() => onUpdateQty && onUpdateQty(item.id, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="ease-sc-footer">
            <div className="ease-sc-total-row">
              <span>Total</span>
              <span className="ease-sc-total-price">${total.toFixed(2)}</span>
            </div>
            <button className="ease-sc-checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
