import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const SciFiAccordionItem = ({ id, title, subtitle, children, isOpen, onToggle }) => {
  const [rippleActive, setRippleActive] = useState(false);

  const handleTrigger = (e) => {
    setRippleActive(false);
    void e.currentTarget.offsetWidth; 
    setRippleActive(true);
    onToggle(id);
  };

  return (
    <div className={`scifi-accordion-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="scifi-accordion-header"
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        id={`trigger-${id}`}
        onClick={handleTrigger}
      >
        {rippleActive && <span className="liquid-ripple-effect ease-ripple-out" />}
        <div className="header-glitch-layer" data-text={title}></div>
        <div className="header-core-content">
          <span className="scifi-status-node"></span>
          <div className="title-block">
            <span className="scifi-title-text">{title}</span>
            {subtitle && <span className="scifi-subtitle-text">{subtitle}</span>}
          </div>
        </div>
        <div className="scifi-chevron-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`trigger-${id}`}
        className={`scifi-accordion-panel ${isOpen ? "ease-expand-down" : "ease-collapse-up"}`}
      >
        <div className="scifi-panel-inner">
          <div className="scifi-grid-overlay"></div>
          {children}
        </div>
      </div>
    </div>
  );
};

SciFiAccordionItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export const SciFiAccordion = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState([]);

  const handleToggle = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((itemIds) => itemIds !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="scifi-accordion-container">
      {items.map((item) => (
        <SciFiAccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          isOpen={openIds.includes(item.id)}
          onToggle={handleToggle}
        >
          {item.content}
        </SciFiAccordionItem>
      ))}
    </div>
  );
};

SciFiAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  allowMultiple: PropTypes.bool
};