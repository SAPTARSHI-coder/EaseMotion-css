import React, { useState } from 'react';
import './style.css';

const MENU_DATA = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: '📊',
    children: [
      { id: 'overview', title: 'Overview' },
      { id: 'analytics', title: 'Analytics' },
      { id: 'realtime', title: 'Real-time Metrics' }
    ]
  },
  {
    id: 'management',
    title: 'Management',
    icon: '⚙️',
    children: [
      { id: 'users', title: 'Team Members' },
      { id: 'roles', title: 'Permissions' },
      { id: 'logs', title: 'System Logs' }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Plans',
    icon: '💳',
    children: [
      { id: 'invoices', title: 'Invoices' },
      { id: 'subscriptions', title: 'Subscriptions' }
    ]
  }
];

export default function Sidebar({ defaultCollapsed = false, uniqueSelection = true }) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setOpenSubMenus({}); // Collapse all child menus when closing sidebar
    }
  };

  const toggleSubMenu = (menuId) => {
    if (isCollapsed) {
      setIsCollapsed(false); // Auto expand sidebar if a hidden icon is clicked
    }

    setOpenSubMenus((prev) => {
      if (uniqueSelection) {
        return { [menuId]: !prev[menuId] }; // Close other submenus
      }
      return { ...prev, [menuId]: !prev[menuId] }; // Keep others open
    });
  };

  return (
    <aside className={`sidebar-container ${isCollapsed ? 'is-collapsed' : ''}`}>
      {/* Sidebar Control Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🌀</span>
          <span className="logo-text">EaseMotion</span>
        </div>
        <button 
          className="collapse-toggle-btn" 
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation Menu List */}
      <nav className="sidebar-menu">
        {MENU_DATA.map((menu) => {
          const isOpen = !!openSubMenus[menu.id];
          return (
            <div key={menu.id} className="menu-group">
              <button
                className={`menu-trigger-btn ${isOpen ? 'active-parent' : ''}`}
                onClick={() => toggleSubMenu(menu.id)}
                aria-expanded={isOpen}
              >
                <span className="menu-icon">{menu.icon}</span>
                <span className="menu-title-text">{menu.title}</span>
                <span className={`chevron-indicator ${isOpen ? 'rotate-down' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Smooth Accordion Dropdown Wrapper */}
              <div className={`submenu-wrapper ${isOpen ? 'is-open' : ''}`}>
                <div className="submenu-inner-content">
                  {menu.children.map((child) => (
                    <a key={child.id} href={`#${child.id}`} className="submenu-item-link">
                      {child.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
