import React, { useRef, useState } from "react";
import "./style.css";

const CheckoutSummaryAccordion = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const items = [
    { label: "Subtotal", value: "$120.00" },
    { label: "Shipping", value: "$10.00" },
    { label: "Tax", value: "$8.40" },
    { label: "Discount", value: "-$15.00" },
  ];

  return (
    <div className="checkout-summary">
      <button
        className="accordion-toggle"
        onClick={() => setOpen(!open)}
      >
        <span>Order Summary</span>
        <span className={`arrow ${open ? "open" : ""}`}>⌄</span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: open
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div className="accordion-inner">
          {items.map((item, index) => (
            <div className="summary-row" key={index}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>$123.40</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummaryAccordion;