import React, { useState } from 'react';
import './style.css';

export const EaseSpeedDial = ({ actions = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`ease-speed-dial ${open ? 'ease-sd-open' : ''}`}>
      <div className="ease-sd-actions">
        {actions.map((act, idx) => (
          <button key={idx} className="ease-sd-btn" onClick={act.onClick} title={act.label}>
            {act.icon}
          </button>
        ))}
      </div>
      <button className="ease-sd-main" onClick={() => setOpen(!open)}>
        +
      </button>
    </div>
  );
};

export default EaseSpeedDial;
