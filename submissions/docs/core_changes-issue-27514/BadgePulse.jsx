import React from 'react';
import './style.css';

export default function BadgePulse({ count = 3, variant = 'danger', size = 'md' }) {
  return (
    <div className={`ease-badge-wrap ease-badge-${variant} ease-badge-${size}`}>
      <div className="ease-badge-icon">🔔</div>
      {count > 0 && (
        <>
          <span className="ease-badge">{count > 9 ? '9+' : count}</span>
          <span className="ease-badge-pulse" />
        </>
      )}
    </div>
  );
}
