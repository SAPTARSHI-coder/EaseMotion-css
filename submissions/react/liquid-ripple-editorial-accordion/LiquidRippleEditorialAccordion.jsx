import React, { useState } from "react";
import "./style.css";

const LiquidRippleEditorialAccordion = ({ items = [] }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="editorial-accordion ease-fade-in">
      {items.map((item, index) => (
        <div
          key={index}
          className={`editorial-card ${
            active === index ? "open" : ""
          }`}
        >
          <button
            className="editorial-header ease-hover-lift"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <span>{item.title}</span>
            <span className="icon">
              {active === index ? "−" : "+"}
            </span>
          </button>

          <div className="ripple-effect"></div>

          {active === index && (
            <div className="editorial-content ease-slide-down">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiquidRippleEditorialAccordion;