import React, { useState } from 'react';
import './style.css';

const actions = [
  { icon: '📝', label: 'New Note' },
  { icon: '📸', label: 'Take Photo' },
  { icon: '📎', label: 'Attach File' },
  { icon: '🎤', label: 'Record Audio' },
];

export default function FabSpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ease-fab-container">
      {actions.map((a, i) => (
        <div key={a.label} className={`ease-fab-action ${open ? 'visible' : ''}`} style={{ transform: open ? `translateY(${-(i + 1) * 60}px)` : 'translateY(0)', opacity: open ? 1 : 0 }}>
          <span className="ease-fab-tooltip">{a.label}</span>
          <button className="ease-fab-mini">{a.icon}</button>
        </div>
      ))}
      <button className={`ease-fab-main ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className="ease-fab-icon">+</span>
      </button>
    </div>
  );
}
