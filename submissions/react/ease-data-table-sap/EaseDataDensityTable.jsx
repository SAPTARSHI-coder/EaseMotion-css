import React, { useState } from 'react';
import './style.css';

export default function EaseDataDensityTable({ headers, data }) {
  const [density, setDensity] = useState('normal');

  return (
    <div className="ease-table-container">
      <div className="ease-density-controls">
        <span>Density:</span>
        <button className={density === 'compact' ? 'active' : ''} onClick={() => setDensity('compact')}>Compact</button>
        <button className={density === 'normal' ? 'active' : ''} onClick={() => setDensity('normal')}>Normal</button>
        <button className={density === 'spacious' ? 'active' : ''} onClick={() => setDensity('spacious')}>Spacious</button>
      </div>
      <table className={`ease-data-table density-${density}`}>
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="ease-table-row">
              {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
