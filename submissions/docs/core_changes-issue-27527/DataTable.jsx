import React, { useState } from 'react';
import './style.css';

const data = [
  { name: 'Project Alpha', status: 'Active', priority: 'High', assignee: 'Alice' },
  { name: 'Beta Release', status: 'Review', priority: 'Medium', assignee: 'Bob' },
  { name: 'Dashboard Redesign', status: 'Done', priority: 'High', assignee: 'Carol' },
  { name: 'API Integration', status: 'Active', priority: 'Low', assignee: 'Dave' },
  { name: 'User Testing', status: 'Review', priority: 'Medium', assignee: 'Eve' },
];

export default function DataTable() {
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const dir = sortDir === 'asc' ? 1 : -1;
    return a[sortKey] > b[sortKey] ? dir : -dir;
  });

  return (
    <div className="ease-table-wrap">
      <table className="ease-table">
        <thead>
          <tr>
            {['name', 'status', 'priority', 'assignee'].map(k => (
              <th key={k} onClick={() => handleSort(k)} className={sortKey === k ? `sorted ${sortDir}` : ''}>
                {k.charAt(0).toUpperCase() + k.slice(1)}
                <span className="ease-sort-icon">{sortKey === k ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ' ⇅'}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={i} style={{ animationDelay: `${i * 0.05}s` }}>
              <td>{r.name}</td>
              <td><span className={`ease-badge-status ${r.status.toLowerCase()}`}>{r.status}</span></td>
              <td><span className={`ease-badge-priority ${r.priority.toLowerCase()}`}>{r.priority}</span></td>
              <td>{r.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
