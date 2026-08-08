import React, { useState, useRef } from "react";

/**
 * Accordion - a React accordion component with a liquid ripple
 * interaction transition, styled for Monochrome Neo interfaces.
 *
 * Props:
 * - items (array): list of { title: string, content: node }
 * - allowMultiple (boolean): allow multiple panels open at once, default false
 */
export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);
  const rippleRefs = useRef([]);

  const isOpen = (index) => openIndexes.includes(index);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  const triggerRipple = (e, index) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.className = "ease-accordion-ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    button.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  const handleClick = (e, index) => {
    triggerRipple(e, index);
    toggleIndex(index);
  };

  return (
    <div className="ease-accordion-neo">
      {items.map((item, index) => (
        <div key={index} className="ease-accordion-neo__item">
          <button
            className="ease-accordion-neo__header"
            onClick={(e) => handleClick(e, index)}
            aria-expanded={isOpen(index)}
          >
            <span>{item.title}</span>
            <span
              className={`ease-accordion-neo__icon ${
                isOpen(index) ? "ease-accordion-neo__icon--open" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`ease-accordion-neo__panel ${
              isOpen(index) ? "ease-accordion-neo__panel--open" : ""
            }`}
          >
            <div className="ease-accordion-neo__content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
