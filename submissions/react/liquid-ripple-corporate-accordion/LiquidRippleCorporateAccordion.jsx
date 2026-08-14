import React, { useState } from "react";
import "./style.css";

const LiquidRippleCorporateAccordion = ({ items = [] }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="corporate-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-card ease-fade-in ${
            active === index ? "active" : ""
          }`}
        >
          <div
            className="ripple-layer"
          />

          <button
            className="accordion-header ease-hover-lift"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            {item.title}
            <span>{active === index ? "−" : "+"}</span>
          </button>

          {active === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiquidRippleCorporateAccordion;