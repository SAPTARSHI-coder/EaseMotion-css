import React, { useState, useMemo, useEffect } from 'react';

/**
 * Data Table with Column Sorting & Fade Animations
 * 
 * @param {Array} columns - Array of column objects { key, label, sortable }
 * @param {Array} data - Array of data objects matching column keys
 */
const DataTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayData, setDisplayData] = useState(data);

  // Helper to trigger the CSS re-render animation when sorting changes
  const triggerSortAnimation = (sortedData) => {
    setIsAnimating(true);
    // Let the fade-out happen, then swap data, then fade-in
    setTimeout(() => {
      setDisplayData(sortedData);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50); // Small delay to ensure DOM registers the class removal for fade-in
    }, 200); // 200ms matches the CSS transition duration for ease-table-body out
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      // Third click resets sort
      setSortConfig({ key: null, direction: 'asc' });
      triggerSortAnimation([...data]); // Reset to original order
      return;
    }
    
    setSortConfig({ key, direction });
    
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    triggerSortAnimation(sorted);
  };

  // Initial load or data prop update
  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return (
        <svg className="ease-sort-icon inactive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="7 15 12 20 17 15"></polyline>
          <polyline points="7 9 12 4 17 9"></polyline>
        </svg>
      );
    }
    if (sortConfig.direction === 'asc') {
      return (
        <svg className="ease-sort-icon active" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="7 15 12 20 17 15"></polyline>
          <polyline points="7 9 12 4 17 9" opacity="0.3"></polyline>
        </svg>
      );
    }
    return (
      <svg className="ease-sort-icon active" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="7 15 12 20 17 15" opacity="0.3"></polyline>
        <polyline points="7 9 12 4 17 9"></polyline>
      </svg>
    );
  };

  return (
    <div className="ease-table-container">
      <table className="ease-data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key}
                className={col.sortable ? 'is-sortable' : ''}
                onClick={() => col.sortable && handleSort(col.key)}
                aria-sort={
                  sortConfig.key === col.key 
                    ? sortConfig.direction === 'asc' ? 'ascending' : 'descending'
                    : 'none'
                }
              >
                <div className="ease-th-content">
                  {col.label}
                  {col.sortable && renderSortIcon(col.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`ease-table-body ${isAnimating ? 'is-sorting' : ''}`}>
          {displayData.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} style={{ '--row-index': rowIndex }}>
              {columns.map((col) => (
                <td key={`${row.id || rowIndex}-${col.key}`}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
          {displayData.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="ease-table-empty">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
