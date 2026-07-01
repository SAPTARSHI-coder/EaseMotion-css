import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Accordion Item sub-component
 * Manages its own dynamic height transition based on content size.
 */
const AccordionItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Dynamically calculate height for buttery-smooth CSS transitions
  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button 
        className={`accordion-header ease-hover-glow ${isOpen ? 'active' : ''}`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="accordion-icon">{item.icon}</span>
        <span className="accordion-title">{item.title}</span>
        <span className={`accordion-chevron ${isOpen ? 'open' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className="accordion-content-wrapper" 
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <ul className="accordion-content" ref={contentRef}>
          {item.subItems.map((sub, index) => (
            <li 
              key={index} 
              className="sub-item ease-slide-right" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <a href={sub.href || '#'} className="sub-link ease-hover-lift">
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * Main Collapsible Sidebar Component
 */
const CollapsibleSidebar = ({ 
  menuItems = [],
  logo = "Brand",
  defaultOpenIndex = 0 
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleAccordionClick = (index) => {
    // If sidebar is collapsed, force it open when clicking an item icon
    if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
      setOpenIndex(index);
      return;
    }
    // Toggle active accordion (or close if already open)
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <aside className={`sidebar-container ease-slide-in-left ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2 className="sidebar-logo truncate">{logo}</h2>
        <button 
          className="collapse-toggle-btn ease-hover-scale"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          aria-label="Toggle Sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <AccordionItem 
            key={index}
            item={item}
            isOpen={openIndex === index && !isSidebarCollapsed}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div className="user-profile ease-hover-lift">
          <div className="avatar ease-pulse-slow">U</div>
          <div className="user-details">
            <p className="user-name">User Account</p>
            <p className="user-role">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CollapsibleSidebar;
