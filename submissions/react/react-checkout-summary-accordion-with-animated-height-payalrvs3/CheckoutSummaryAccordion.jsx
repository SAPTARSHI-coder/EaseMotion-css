import React, { useId, useState } from "react";
import "./style.css";

const CheckoutSummaryAccordion = ({
  title = "Order Summary",
  items = [
    { label: "Subtotal", value: 120.0 },
    { label: "Shipping", value: 10.0 },
    { label: "Tax", value: 8.4 },
    { label: "Discount", value: -15.0 },
  ],
  total,
  currency = "$",
  defaultOpen = false,
  onCheckout,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  // Total is derived from items unless the caller passes an explicit
  // override (e.g. a server-calculated figure with its own rounding).
  const computedTotal = items.reduce((sum, item) => sum + item.value, 0);
  const displayTotal = typeof total === "number" ? total : computedTotal;

  const formatAmount = (value) => {
    const sign = value < 0 ? "-" : "";
    return `${sign}${currency}${Math.abs(value).toFixed(2)}`;
  };

  return (
    <div className="csa ease-fade-in">
      <button
        type="button"
        className="csa-toggle ease-hover-lift"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="csa-title">{title}</span>
        <span className="csa-header-right">
          <span className="csa-total-preview">
            {formatAmount(displayTotal)}
          </span>
          <span
            className={`csa-chevron${isOpen ? " is-open" : ""}`}
            aria-hidden="true"
          >
            ⌄
          </span>
        </span>
      </button>

      {/* grid-template-rows: 0fr -> 1fr animates height without ever
          measuring scrollHeight, so it stays correct even if `items`
          changes while the panel is open. */}
      <div
        id={panelId}
        className={`csa-panel${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="csa-panel-inner">
          <ul className="csa-items">
            {items.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className={`csa-row${item.value < 0 ? " is-discount" : ""}`}
              >
                <span>{item.label}</span>
                <span>{formatAmount(item.value)}</span>
              </li>
            ))}
          </ul>

          <div className="csa-divider" />

          <div className="csa-row csa-row--total">
            <span>Total</span>
            <span>{formatAmount(displayTotal)}</span>
          </div>

          {onCheckout && (
            <button
              type="button"
              className="csa-cta ease-hover-glow"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummaryAccordion;