import React, { useState, useEffect, useRef } from "react";
import "./style.css";

/**
 * ShoppingCartDrawer Component
 * A slide-in drawer displaying shopping cart items with synchronized quantity sliders & buttons.
 *
 * @param {boolean} isOpen - Determines if the drawer is visible.
 * @param {function} onClose - Callback triggered to close the drawer.
 * @param {Array} initialCartItems - Initial list of cart items.
 * @param {function} onCheckout - Callback triggered when checking out.
 * @param {string} currency - Currency symbol (default: '$').
 * @param {number} minQty - Minimum selectable quantity (default: 1).
 * @param {number} maxQty - Maximum selectable quantity (default: 10).
 */
export default function ShoppingCartDrawer({
  isOpen = false,
  onClose,
  initialCartItems = [],
  onCheckout,
  currency = "$",
  minQty = 1,
  maxQty = 10,
}) {
  const [items, setItems] = useState(initialCartItems);
  const [isRendered, setIsRendered] = useState(isOpen);
  const [slideDirection, setSlideDirection] = useState("closed");
  const drawerRef = useRef(null);

  // Sync state items if initialCartItems changes
  useEffect(() => {
    if (initialCartItems && initialCartItems.length > 0) {
      setItems(initialCartItems);
    }
  }, [initialCartItems]);

  // Handle open/close animations
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Tiny delay to ensure DOM is ready for entrance transition
      const frame = requestAnimationFrame(() => {
        setSlideDirection("open");
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setSlideDirection("closed");
      // Wait for exit animation to complete before unrendering
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 400); // matches transition time
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key press to close drawer
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle outside click to close
  const handleOverlayClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target) && onClose) {
      onClose();
    }
  };

  // Update item quantity (sync range & buttons)
  const handleQuantityChange = (id, value) => {
    const numericValue = Math.max(minQty, Math.min(maxQty, value));
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: numericValue } : item
      )
    );
  };

  // Remove item with optional animation delay
  const handleRemoveItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isRemoving: true } : item
      )
    );
    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, 300); // matches fade-out duration
  };

  // Calculations
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const totalQuantity = items.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  if (!isRendered) return null;

  return (
    <div
      className={`ease-drawer-overlay ease-fade-in ${
        slideDirection === "open" ? "active" : ""
      }`}
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <aside
        ref={drawerRef}
        className={`ease-drawer-panel ${
          slideDirection === "open" ? "slide-in" : "slide-out"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart Drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="ease-drawer-header ease-flex ease-justify-between ease-items-center">
          <div className="ease-flex ease-items-center ease-gap-2">
            <svg
              className="ease-cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <h2 className="ease-drawer-title">Shopping Cart</h2>
            {totalQuantity > 0 && (
              <span className="ease-badge ease-badge-primary ease-pulse">
                {totalQuantity}
              </span>
            )}
          </div>
          <button
            className="ease-close-btn ease-center ease-hover-lift"
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "20px" }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Content Body */}
        <div className="ease-drawer-body">
          {items.length === 0 ? (
            <div className="ease-empty-cart ease-center ease-flex-col ease-fade-in">
              <div className="ease-empty-icon-wrapper">
                <svg
                  className="ease-empty-cart-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="ease-empty-text">Your shopping cart is empty</p>
              <button
                className="ease-shop-btn ease-btn ease-hover-lift"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="ease-cart-list ease-stack">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`ease-cart-item ease-flex ease-gap-4 ${
                    item.isRemoving ? "ease-item-removing" : "ease-fade-in"
                  }`}
                >
                  {/* Image wrapper */}
                  <div
                    className="ease-item-img-container"
                    style={{
                      background: item.bgColor || "var(--ease-color-neutral-100)",
                    }}
                  >
                    {item.image ? (
                      <img
                        className="ease-item-img"
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      <span className="ease-item-emoji">{item.emoji || "🎁"}</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="ease-item-details ease-flex-1 ease-flex ease-flex-col">
                    <div className="ease-flex ease-justify-between ease-items-start">
                      <div>
                        <h4 className="ease-item-name">{item.name}</h4>
                        {item.variant && (
                          <span className="ease-item-variant">{item.variant}</span>
                        )}
                      </div>
                      <button
                        className="ease-remove-btn ease-center ease-hover-lift"
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14H6L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4h6v2" />
                        </svg>
                      </button>
                    </div>

                    <div className="ease-item-price-row ease-flex ease-justify-between ease-items-center">
                      <span className="ease-item-price">
                        {currency}
                        {(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                      <span className="ease-item-unit-price">
                        ({currency}
                        {item.price.toFixed(2)} each)
                      </span>
                    </div>

                    {/* Quantity Selector Section */}
                    <div className="ease-qty-control-section ease-flex ease-items-center ease-gap-2">
                      <div className="ease-qty-stepper ease-flex ease-items-center">
                        <button
                          className="ease-qty-step-btn"
                          disabled={item.quantity <= minQty}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          &minus;
                        </button>
                        <div className="ease-qty-num-wrapper">
                          <span
                            key={item.quantity}
                            className="ease-qty-num ease-fade-in"
                          >
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          className="ease-qty-step-btn"
                          disabled={item.quantity >= maxQty}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Sliding Slider Control */}
                      <div className="ease-qty-slider-container ease-flex-1 ease-flex ease-items-center">
                        <input
                          type="range"
                          min={minQty}
                          max={maxQty}
                          value={item.quantity || 1}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value, 10)
                            )
                          }
                          className="ease-qty-range-slider"
                          aria-label={`Quantity slider for ${item.name}`}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="ease-drawer-footer ease-stack-sm">
            <div className="ease-divider" />
            <div className="ease-subtotal-row ease-flex ease-justify-between ease-items-center">
              <span className="ease-subtotal-label">Subtotal</span>
              <span className="ease-subtotal-value">
                {currency}
                {subtotal.toFixed(2)}
              </span>
            </div>
            <p className="ease-shipping-hint">
              Shipping, taxes, and discounts calculated at checkout.
            </p>
            <button
              className="ease-checkout-btn ease-btn ease-hover-lift"
              onClick={() => onCheckout && onCheckout(items)}
            >
              Proceed to Checkout
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
