import React, { useState } from 'react';
import './style.css';

const tabs = [
  { id: 'overview', label: 'Overview', content: 'Overview content goes here.' },
  { id: 'features', label: 'Features', content: 'Features content goes here.' },
  { id: 'pricing', label: 'Pricing', content: 'Pricing content goes here.' },
  { id: 'reviews', label: 'Reviews', content: 'Reviews content goes here.' },
];

export default function TabsGlider() {
  const [active, setActive] = useState('overview');

  return (
    <div className="ease-tabs">
      <div className="ease-tabs-bar">
        {tabs.map(t => (
          <button key={t.id} className={`ease-tab ${active === t.id ? 'active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
        <div className="ease-tab-glider" style={{ transform: `translateX(${tabs.findIndex(t => t.id === active) * 100}%)`, width: `${100 / tabs.length}%` }} />
      </div>
      <div className="ease-tab-content">
        {tabs.find(t => t.id === active)?.content}
      </div>
    </div>
  );
}
