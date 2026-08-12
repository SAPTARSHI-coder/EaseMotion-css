import React, { useState, useEffect } from 'react';

/**
 * ShoppingCartDrawer
 * An off-canvas shopping cart drawer featuring smooth slide-in animations and 
 * interactive quantity counter sliders with EaseMotion CSS.
 *
 * Props:
 * - isOpen: boolean - Controls the visibility of the drawer
 * - onClose: () => void - Callback triggered to close the drawer
 * - items: Array<{ id: string, name: string, price: number, quantity: number, image: string }>
 */
export default function ShoppingCartDrawer({ isOpen, onClose, items: initialItems = [] }) {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [renderDrawer, setRenderDrawer] = useState(isOpen);
  const [cartItems, setCartItems] = useState(initialItems);

  useEffect(() => {
    setCartItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    if (isOpen) {
      setRenderDrawer(true);
      // Small delay for CSS transition to trigger after mount
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Wait for the slide-out animation to finish
      const timer = setTimeout(() => {
        setRenderDrawer(false);
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0)); // Remove item if quantity goes to 0
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!renderDrawer) return null;

  return (
    <div className="ease-cart-backdrop" onClick={onClose}>
      <div 
        className={`ease-cart-content ${isVisible ? 'ease-cart-open' : 'ease-cart-closed'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ease-cart-header">
          <h2>Shopping Cart</h2>
          <button className="ease-cart-close" onClick={onClose}>×</button>
        </div>
        
        <div className="ease-cart-body">
          {cartItems.length === 0 ? (
            <div className="ease-cart-empty">Your cart is empty.</div>
          ) : (
            <ul className="ease-cart-list">
              {cartItems.map(item => (
                <li key={item.id} className="ease-cart-item">
                  <img src={item.image} alt={item.name} className="ease-cart-item-img" />
                  <div className="ease-cart-item-details">
                    <span className="ease-cart-item-name">{item.name}</span>
                    <span className="ease-cart-item-price">${item.price.toFixed(2)}</span>
                    <div className="ease-quantity-counter">
                      <button className="ease-qty-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span className="ease-qty-value">{item.quantity}</span>
                      <button className="ease-qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="ease-cart-footer">
            <div className="ease-cart-total">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="ease-checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
