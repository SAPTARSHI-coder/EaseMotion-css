import React, { useState, useEffect } from 'react';

/**
 * ShoppingCartDrawer
 * An off-canvas cart drawer with slide-in animation, quantity counter sliders,
 * and dynamic subtotal calculation — powered by EaseMotion CSS.
 *
 * Props:
 * - isOpen: boolean - Controls drawer visibility.
 * - onClose: () => void - Callback to close the drawer.
 * - items: Array<{ id, name, price, quantity, image }> - Initial cart items.
 */
export default function ShoppingCartDrawer({ isOpen, onClose, items: initialItems = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);
  const [cartItems, setCartItems] = useState(initialItems);

  useEffect(() => { setCartItems(initialItems); }, [initialItems]);

  useEffect(() => {
    if (isOpen) {
      setRenderDrawer(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      const t = setTimeout(() => {
        setRenderDrawer(false);
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!renderDrawer) return null;

  return (
    <div className="ease-sc-backdrop" onClick={onClose}>
      <div
        className={`ease-sc-panel ${isVisible ? 'ease-sc-panel--open' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="ease-sc-header">
          <h2 className="ease-sc-title">Your Cart</h2>
          <button className="ease-sc-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="ease-sc-body">
          {cartItems.length === 0 ? (
            <p className="ease-sc-empty">Your cart is empty.</p>
          ) : (
            <ul className="ease-sc-list">
              {cartItems.map(item => (
                <li key={item.id} className="ease-sc-item">
                  <img src={item.image} alt={item.name} className="ease-sc-img" />
                  <div className="ease-sc-details">
                    <span className="ease-sc-name">{item.name}</span>
                    <span className="ease-sc-price">${item.price.toFixed(2)}</span>
                    <div className="ease-sc-qty">
                      <button className="ease-qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                      <span className="ease-qty-val">{item.quantity}</span>
                      <button className="ease-qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="ease-sc-footer">
            <div className="ease-sc-total">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="ease-sc-checkout">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
