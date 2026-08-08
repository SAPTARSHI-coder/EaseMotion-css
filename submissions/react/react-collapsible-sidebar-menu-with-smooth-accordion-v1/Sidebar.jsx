import React, { useState, useRef, useEffect } from 'react';

/**
 * Collapsible Sidebar Menu with Smooth Accordion
 * 
 * @param {Array} navItems - Configuration array for navigation menus
 */
const Sidebar = ({ navItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openAccordions, setOpenAccordions] = useState({});

  // Toggle individual accordion sections
  const toggleAccordion = (id) => {
    // If sidebar is collapsed, we must open it first before expanding accordion
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
      // Wait for sidebar expansion before opening accordion for smoother physics
      setTimeout(() => {
        setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
      }, 300);
      return;
    }
    
    setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // When collapsing the sidebar, close all accordions to reset state
  useEffect(() => {
    if (!isSidebarOpen) {
      setOpenAccordions({});
    }
  }, [isSidebarOpen]);

  return (
    <aside className={`ease-sidebar ${isSidebarOpen ? 'is-open' : 'is-collapsed'}`}>
      
      {/* Header / Toggle Button */}
      <div className="ease-sidebar-header">
        <div className="ease-sidebar-logo">
          <div className="ease-logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <span className="ease-logo-text">Acme Corp</span>
        </div>
        
        <button 
          className="ease-sidebar-toggle" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="ease-sidebar-nav">
        {navItems.map((item) => (
          <div key={item.id} className="ease-nav-section">
            
            {/* Parent Item / Accordion Trigger */}
            {item.children ? (
              <button 
                className={`ease-nav-item ${openAccordions[item.id] ? 'is-active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openAccordions[item.id]}
              >
                <span className="ease-nav-icon">{item.icon}</span>
                <span className="ease-nav-label">{item.label}</span>
                <span className="ease-nav-chevron">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
            ) : (
              <a href={item.href} className="ease-nav-item">
                <span className="ease-nav-icon">{item.icon}</span>
                <span className="ease-nav-label">{item.label}</span>
              </a>
            )}

            {/* Accordion Content (Sub-items) */}
            {item.children && (
              <div 
                className="ease-accordion-content"
                style={{ 
                  // Use CSS grid transition trick for smooth height animation
                  gridTemplateRows: openAccordions[item.id] ? '1fr' : '0fr' 
                }}
              >
                <div className="ease-accordion-inner">
                  {item.children.map((child) => (
                    <a key={child.id} href={child.href} className="ease-sub-nav-item">
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        ))}
      </nav>

      {/* Footer Profile Section */}
      <div className="ease-sidebar-footer">
        <div className="ease-profile-row">
          <img src="https://i.pravatar.cc/150?img=11" alt="User" className="ease-profile-img" />
          <div className="ease-profile-info">
            <p className="ease-profile-name">Jane Doe</p>
            <p className="ease-profile-role">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
