import React, { useState } from "react";
import "./style.css";

const LiquidRippleAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="liquid-accordion ease-fade-in">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item ease-hover-lift"
        >
          <button
            className="accordion-header"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {item.title}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          <div
            className={`accordion-content ${
              openIndex === index ? "active" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiquidRippleAccordion;