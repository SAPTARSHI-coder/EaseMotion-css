import React, { useState, useMemo } from 'react';

/**
 * Data Table with Column Sorting & Fade Animations
 * 
 * @param {Array} columns - Array of objects { key, label, sortable }
 * @param {Array} data - Array of data objects
 */
const DataTable = ({ columns = [], data = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [isSorting, setIsSorting] = useState(false); // Used to trigger CSS fade animation

  // Memoize sorted data to prevent unnecessary re-sorts
  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    // Trigger fade out animation
    setIsSorting(true);
    
    // Wait briefly for opacity to drop before swapping data to prevent layout thrashing
    setTimeout(() => {
      let direction = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({ key, direction });
      
      // Trigger fade in animation
      setIsSorting(false);
    }, 150); // Matches CSS transition time
  };

  return (
    <div className="ease-datatable-wrapper">
      <table className="ease-datatable">
        <thead>
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key}
                className={column.sortable ? 'is-sortable' : ''}
                onClick={() => column.sortable && requestSort(column.key)}
                aria-sort={
                  sortConfig.key === column.key 
                    ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending')
                    : 'none'
                }
              >
                <div className="ease-datatable-th-content">
                  {column.label}
                  {column.sortable && (
                    <span 
                      className={`ease-datatable-sort-icon ${
                        sortConfig.key === column.key ? `is-active is-${sortConfig.direction}` : ''
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`ease-datatable-body ${isSorting ? 'is-sorting' : ''}`}>
          {sortedData.length > 0 ? (
            sortedData.map((row, rowIndex) => (
              <tr 
                key={row.id || rowIndex} 
                className="ease-datatable-row"
                style={{ animationDelay: `${rowIndex * 0.05}s` }}
              >
                {columns.map((column) => (
                  <td key={`${row.id || rowIndex}-${column.key}`}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="ease-datatable-empty">
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
