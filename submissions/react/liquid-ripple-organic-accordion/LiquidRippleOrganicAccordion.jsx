import React, { useState } from "react";
import "./style.css";

const LiquidRippleOrganicAccordion = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="organic-accordion ease-fade-in">
      {items.map((item, index) => (
        <div
          className={`accordion-card ${
            activeIndex === index ? "active" : ""
          }`}
          key={index}
        >
          <button
            className="accordion-header ease-hover-lift"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>

          <div className="ripple-layer"></div>

          {activeIndex === index && (
            <div className="accordion-content ease-slide-down">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiquidRippleOrganicAccordion;