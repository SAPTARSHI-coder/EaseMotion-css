import React, { useState } from "react";
import "./style.css";

const LiquidRippleAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="holo-accordion ease-fade-in">
      {items.map((item, index) => (
        <div
          className="holo-card ease-hover-lift"
          key={index}
        >
          <button
            className="holo-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className="icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`holo-content ${
              activeIndex === index ? "show" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiquidRippleAccordion;