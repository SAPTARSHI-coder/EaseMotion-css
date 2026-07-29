import React from 'react';
import './style.css';

export default function DynamicModal({ open, onClose, title = 'Modal', children }) {
  if (!open) return null;

  return (
    <div className="ease-modal-overlay" onClick={onClose}>
      <div className="ease-modal" onClick={e => e.stopPropagation()}>
        <div className="ease-modal-header">
          <h3>{title}</h3>
          <button className="ease-modal-close" onClick={onClose}>×</button>
        </div>
        <div className="ease-modal-body">{children}</div>
      </div>
    </div>
  );
}
