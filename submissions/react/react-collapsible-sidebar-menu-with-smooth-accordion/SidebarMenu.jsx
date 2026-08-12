import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SidebarMenu.css';

/**
 * SidebarMenu Component
 * Displays a collapsible sidebar navigation with nested accordion item menus,
 * dynamic search path filters, spotlights, custom colors, and keyboard accessibility.
 *
 * @param {Object} props
 * @param {Array} props.menuItems - Structure of the sidebar navigation links
 * @param {string} [props.accentColor='#3b82f6'] - Highlight border and active path background color
 * @param {string} [props.theme='dark'] - UI layout theme: 'dark' | 'light' | 'glass'
 * @param {boolean} [props.defaultCollapsed=false] - Initial sidebar state
 * @param {Function} [props.onNavigate] - Callback triggered when navigating to a route path
 */
export default function SidebarMenu({
  menuItems = [],
  accentColor = '#3b82f6',
  theme = 'dark',
  defaultCollapsed = false,
  onNavigate
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [expandedSection, setExpandedSection] = useState('');
  const [activePath, setActivePath] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarRef = useRef(null);

  // Spotlight mouse tracking coordinates setter
  const handleMouseMove = (e) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sidebarRef.current.style.setProperty('--mouse-x', `${x}px`);
      sidebarRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Toggle parent accordion section
  const toggleSection = (label) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setExpandedSection(label);
    } else {
      setExpandedSection((prev) => (prev === label ? '' : label));
    }
  };

  // Handle keyboard events on items navigation
  const handleItemKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (item.subItems) {
        toggleSection(item.label);
      } else {
        setActivePath(item.path);
        if (onNavigate) onNavigate(item.path);
      }
    }
  };

  const defaultMenuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    {
      label: 'Management Core',
      icon: '⚙️',
      subItems: [
        { label: 'User Roles & Scopes', path: '/management/users' },
        { label: 'System Auditing Logs', path: '/management/logs' },
        { label: 'Developer API Keys', path: '/management/keys' },
        { label: 'Database Status Indicators', path: '/management/database' }
      ]
    },
    {
      label: 'Analytics Engine',
      icon: '📈',
      subItems: [
        { label: 'Site Performance Telemetry', path: '/analytics/performance' },
        { label: 'Traffic & Referrers Sources', path: '/analytics/traffic' },
        { label: 'Visitor Demographics Maps', path: '/analytics/visitors' }
      ]
    },
    { label: 'Settings Panel', path: '/settings', icon: '🛠️' }
  ];

  const activeMenuItems = menuItems.length > 0 ? menuItems : defaultMenuItems;

  // Filter menu items by search query
  const filteredMenuItems = useMemo(() => {
    if (!searchQuery) return activeMenuItems;
    const query = searchQuery.toLowerCase();
    
    return activeMenuItems
      .map((item) => {
        // If parent item matches query
        if (item.label.toLowerCase().includes(query)) return item;
        
        // If nested sub-items match query
        if (item.subItems) {
          const filteredSubs = item.subItems.filter((sub) =>
            sub.label.toLowerCase().includes(query)
          );
          if (filteredSubs.length > 0) {
            return { ...item, subItems: filteredSubs };
          }
        }
        return null;
      })
      .filter(Boolean);
  }, [activeMenuItems, searchQuery]);

  // Keep section expanded if search is active
  useEffect(() => {
    if (searchQuery) {
      const match = filteredMenuItems.find((item) => item.subItems);
      if (match) {
        setExpandedSection(match.label);
      }
    }
  }, [searchQuery, filteredMenuItems]);

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          bg: '#ffffff',
          border: '1px solid #e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
          itemHover: '#f1f5f9',
          submenuBg: '#f8fafc',
          inputBg: '#f1f5f9',
          spotlightColor: 'rgba(15, 23, 42, 0.02)'
        };
      case 'glass':
        return {
          bg: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          text: '#f8fafc',
          muted: '#94a3b8',
          itemHover: 'rgba(255, 255, 255, 0.03)',
          submenuBg: 'rgba(255, 255, 255, 0.015)',
          inputBg: 'rgba(255, 255, 255, 0.03)',
          backdropBlur: '12px',
          spotlightColor: 'rgba(255, 255, 255, 0.025)'
        };
      case 'dark':
      default:
        return {
          bg: '#0b0f19',
          border: '1px solid #1e293b',
          text: '#f8fafc',
          muted: '#6b7280',
          itemHover: '#1e293b50',
          submenuBg: '#0f172a',
          inputBg: '#0f172a',
          spotlightColor: 'rgba(255, 255, 255, 0.015)'
        };
    }
  };

  const styleTheme = getThemeStyles();

  return (
    <aside
      ref={sidebarRef}
      onMouseMove={handleMouseMove}
      className={`sidebar-menu-container ${isCollapsed ? 'collapsed-width' : 'expanded-width'}`}
      style={{
        height: '100%',
        backgroundColor: styleTheme.bg,
        borderRight: styleTheme.border,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        transition: 'width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        backgroundImage: `radial-gradient(circle 100px at var(--mouse-x, 0) var(--mouse-y, 0), ${styleTheme.spotlightColor}, transparent)`,
        backdropFilter: styleTheme.backdropBlur ? `blur(${styleTheme.backdropBlur})` : 'none'
      }}
    >
      {/* Sidebar Header toggle switch bar */}
      <div
        style={{
          padding: '1.5rem 1rem',
          display: 'flex',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          alignItems: 'center',
          borderBottom: styleTheme.border
        }}
      >
        {!isCollapsed && (
          <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', color: styleTheme.text }}>
            EaseMotion
          </span>
        )}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="sidebar-toggle-btn"
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '1.2rem',
            color: styleTheme.muted,
            cursor: 'pointer',
            padding: '4px',
            outline: 'none',
            transition: 'color 0.2s ease'
          }}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Nav Link Search Filter Bar */}
      {!isCollapsed && (
        <div style={{ padding: '0.75rem 1rem 0.25rem 1rem' }}>
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sidebar-search-input"
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: styleTheme.border,
              backgroundColor: styleTheme.inputBg,
              color: styleTheme.text,
              fontSize: '0.78rem',
              outline: 'none',
              transition: 'border-color 0.2s ease'
            }}
          />
        </div>
      )}

      {/* Nav List containing accordion items */}
      <nav
        style={{
          flex: 1,
          padding: '1rem 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          overflowY: 'auto'
        }}
      >
        {filteredMenuItems.map((item) => {
          const hasSubmenu = !!item.subItems;
          const isExpanded = expandedSection === item.label;
          const isCurrent = activePath === item.path;

          return (
            <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {/* Parent Navigation Node */}
              <div
                tabIndex={0}
                onKeyDown={(e) => handleItemKeyDown(e, item)}
                onClick={() => {
                  if (hasSubmenu) {
                    toggleSection(item.label);
                  } else {
                    setActivePath(item.path);
                    if (onNavigate) onNavigate(item.path);
                  }
                }}
                className={`sidebar-nav-item ${isCurrent ? 'active-nav-route' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isCollapsed ? 'center' : 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  backgroundColor: isCurrent ? `${accentColor}12` : 'transparent',
                  color: isCurrent ? accentColor : styleTheme.text,
                  border: isCurrent ? `1px solid ${accentColor}40` : '1px solid transparent',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.25rem' }}>{item.icon || '📌'}</span>
                  {!isCollapsed && (
                    <span style={{ fontSize: '0.9rem', fontWeight: isCurrent ? 700 : 500 }}>
                      {item.label}
                    </span>
                  )}
                </div>

                {hasSubmenu && !isCollapsed && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: styleTheme.muted,
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    ▼
                  </span>
                )}
              </div>

              {/* Submenu Accordion list using height grid transition */}
              {hasSubmenu && !isCollapsed && (
                <div
                  className={`submenu-accordion-grid ${isExpanded ? 'grid-expanded' : 'grid-collapsed'}`}
                  style={{
                    display: 'grid',
                    transition: 'grid-template-rows 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    backgroundColor: styleTheme.submenuBg,
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', padding: '0.5rem 0.75rem 0.5rem 2rem' }}>
                      {item.subItems.map((sub) => {
                        const isSubCurrent = activePath === sub.path;
                        return (
                          <div
                            key={sub.label}
                            tabIndex={0}
                            onKeyDown={(e) => handleItemKeyDown(e, sub)}
                            onClick={() => {
                              setActivePath(sub.path);
                              if (onNavigate) onNavigate(sub.path);
                            }}
                            className={`sidebar-submenu-item ${isSubCurrent ? 'active-submenu-route' : ''}`}
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.82rem',
                              color: isSubCurrent ? accentColor : styleTheme.muted,
                              fontWeight: isSubCurrent ? 700 : 500,
                              outline: 'none',
                              textAlign: 'left',
                              transition: 'color 0.2s ease, padding-left 0.2s ease'
                            }}
                          >
                            {sub.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

// Default props declarations
SidebarMenu.defaultProps = {
  menuItems: [],
  accentColor: '#3b82f6',
  theme: 'dark',
  defaultCollapsed: false
};

// React PropTypes validation schema keys definitions
SidebarMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      path: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired
        })
      )
    })
  ),
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass']),
  defaultCollapsed: PropTypes.bool,
  onNavigate: PropTypes.func
};
