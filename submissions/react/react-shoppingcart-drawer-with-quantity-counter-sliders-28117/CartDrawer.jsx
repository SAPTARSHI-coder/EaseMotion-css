import React, { useState, useEffect, useRef } from 'react';

// ─── Quantity Counter Slider ──────────────────────────────────────────────────
/**
 * QuantityCounter — animated +/- stepper with sliding digit transition
 * @param {number}   value     - Current quantity
 * @param {function} onChange  - Called with new quantity
 * @param {number}   min       - Minimum value (default 1)
 * @param {number}   max       - Maximum value (default 99)
 */
const QuantityCounter = ({ value, onChange, min = 1, max = 99 }) => {
  const [dir, setDir] = useState('up'); // slide direction for animation

  const decrement = () => {
    if (value <= min) return;
    setDir('down');
    onChange(value - 1);
  };

  const increment = () => {
    if (value >= max) return;
    setDir('up');
    onChange(value + 1);
  };

  return (
    <div className="ease-sc-qty" role="group" aria-label="Quantity">
      <button
        className="ease-sc-qty-btn"
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      <div className="ease-sc-qty-display" aria-live="polite" aria-atomic="true">
        <span key={`${value}-${dir}`} className={`ease-sc-qty-num ease-sc-slide-${dir}`}>
          {value}
        </span>
      </div>

      <button
        className="ease-sc-qty-btn"
        onClick={increment}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
};

// ─── Cart Item Row ────────────────────────────────────────────────────────────
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(item.id), 300);
  };

  return (
    <div className={`ease-sc-item ${removing ? 'is-removing' : ''}`}>
      {/* Product image */}
      <div className="ease-sc-item-img" style={{ background: item.color }}>
        <span className="ease-sc-item-emoji">{item.emoji}</span>
      </div>

      {/* Info */}
      <div className="ease-sc-item-info">
        <p className="ease-sc-item-name">{item.name}</p>
        {item.variant && <p className="ease-sc-item-variant">{item.variant}</p>}
        <p className="ease-sc-item-price">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Controls */}
      <div className="ease-sc-item-controls">
        <QuantityCounter
          value={item.quantity}
          onChange={(qty) => onQuantityChange(item.id, qty)}
        />
        <button className="ease-sc-remove-btn" onClick={handleRemove} aria-label="Remove item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ─── Empty State ──────────────────────────────────────────────────────────────
const EmptyCart = () => (
  <div className="ease-sc-empty">
    <div className="ease-sc-empty-icon">🛒</div>
    <p className="ease-sc-empty-title">Your cart is empty</p>
    <p className="ease-sc-empty-desc">Add some items to get started!</p>
  </div>
);

// ─── Main CartDrawer ──────────────────────────────────────────────────────────
/**
 * CartDrawer — slide-in shopping cart drawer with quantity counter sliders.
 *
 * @param {boolean}  open           - Whether the drawer is open
 * @param {function} onClose        - Callback to close the drawer
 * @param {Array}    initialItems   - Initial cart items array
 * @param {function} onCheckout     - Callback when checkout button is clicked
 */
const CartDrawer = ({
  open = false,
  onClose,
  initialItems = [],
  onCheckout,
}) => {
  const [items, setItems] = useState(initialItems);
  const [visible, setVisible] = useState(open);
  const [entering, setEntering] = useState(false);
  const overlayRef = useRef(null);

  // Sync open prop → animation states
  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => setEntering(true));
    } else {
      setEntering(false);
      const t = setTimeout(() => setVisible(false), 380);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleQuantityChange = (id, qty) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const handleRemove = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!visible) return null;

  return (
    <div className="ease-sc-root">
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className={`ease-sc-overlay ${entering ? 'is-entering' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`ease-sc-drawer ${entering ? 'is-entering' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="ease-sc-header">
          <div className="ease-sc-header-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="ease-sc-count-badge">{itemCount}</span>
            )}
          </div>
          <button className="ease-sc-close-btn" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items list */}
        <div className="ease-sc-items">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="ease-sc-footer">
            <div className="ease-sc-subtotal">
              <span>Subtotal</span>
              <span className="ease-sc-subtotal-value">${subtotal.toFixed(2)}</span>
            </div>
            <p className="ease-sc-shipping-note">Shipping & taxes calculated at checkout</p>
            <button
              className="ease-sc-checkout-btn"
              onClick={() => onCheckout?.(items)}
            >
              Checkout · ${subtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
