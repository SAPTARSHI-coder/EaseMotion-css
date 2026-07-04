import React, { useState } from 'react';
import './style.css';

const links = [
  { icon: '🏠', label: 'Dashboard' },
  { icon: '📊', label: 'Analytics' },
  { icon: '📄', label: 'Documents' },
  { icon: '📋', label: 'Tasks' },
  { icon: '👥', label: 'Team' },
  { icon: '⚙️', label: 'Settings' },
];

export default function CollapsibleSidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`ease-sidebar ${collapsed ? 'collapsed' : ''}`} onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)}>
      <div className="ease-sidebar-header">
        <span className="ease-sidebar-logo">{collapsed ? 'E' : 'EaseMotion'}</span>
      </div>
      <nav className="ease-sidebar-nav">
        {links.map(l => (
          <a key={l.label} href="#" className="ease-sidebar-link">
            <span className="ease-sidebar-icon">{l.icon}</span>
            <span className="ease-sidebar-label">{l.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
