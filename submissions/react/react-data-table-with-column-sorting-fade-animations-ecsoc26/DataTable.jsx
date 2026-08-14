import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';

/**
 * DataTable Component
 * Renders a data table featuring interactive column sorting, text filtering,
 * keyframes-driven row fade animations, pagination toolbar, spotlight coordinate hovers,
 * custom accent colors, and keyboard accessibility.
 *
 * @param {Object} props
 * @param {Array} props.columns - Column specs: { key, label, sortable }
 * @param {Array} props.data - Rows dataset objects
 * @param {string} [props.accentColor='#3b82f6'] - Highlight headers and inputs color
 * @param {string} [props.theme='dark'] - UI layout theme: 'dark' | 'light' | 'glass'
 * @param {Function} [props.onRowClick] - Callback when a row is clicked
 */
export default function DataTable({
  columns = [],
  data = [],
  accentColor = '#3b82f6',
  theme = 'dark',
  onRowClick
}) {
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'
  const [searchTerm, setSearchTerm] = useState('');
  const [animationTrigger, setAnimationTrigger] = useState(0);
  
  // Pagination State parameters
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const tableRef = useRef(null);

  // Spotlight mouse variable coordinate update handler
  const handleMouseMove = (e) => {
    if (tableRef.current) {
      const rect = tableRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      tableRef.current.style.setProperty('--mouse-x', `${x}px`);
      tableRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const defaultColumns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'status', label: 'Status', sortable: false }
  ];

  const defaultData = [
    { id: 1, name: 'Alice Cooper', role: 'Solutions Architect', department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Bob Dylan', role: 'Senior Developer', department: 'Product Development', status: 'Active' },
    { id: 3, name: 'Charlie Parker', role: 'Product Manager', department: 'Product Management', status: 'Inactive' },
    { id: 4, name: 'David Gilmour', role: 'UI Engineer', department: 'Design & Engineering', status: 'Active' },
    { id: 5, name: 'Elvis Presley', role: 'Marketing Specialist', department: 'Growth Marketing', status: 'Active' },
    { id: 6, name: 'Frank Sinatra', role: 'Finance Analyst', department: 'Financial Operations', status: 'Inactive' },
    { id: 7, name: 'George Harrison', role: 'Backend Engineer', department: 'Engineering', status: 'Active' },
    { id: 8, name: 'Jimi Hendrix', role: 'DevOps Lead', department: 'Infrastructure', status: 'Active' },
    { id: 9, name: 'Janis Joplin', role: 'HR Coordinator', department: 'People Operations', status: 'Active' }
  ];

  const activeColumns = columns.length > 0 ? columns : defaultColumns;
  const activeData = data.length > 0 ? data : defaultData;

  // Header click sort handler
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
    // Reset page to 1 when sort updates
    setCurrentPage(1);
    // Increment trigger to re-run CSS fade-in animations on rows
    setAnimationTrigger((prev) => prev + 1);
  };

  // Header key down sort handler
  const handleHeaderKeyDown = (e, column) => {
    if (column.sortable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleSort(column.key);
    }
  };

  // Row keyboard click handler
  const handleRowKeyDown = (e, row) => {
    if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onRowClick(row);
    }
  };

  // Filter and Sort rows dataset memoized
  const filteredSortedData = useMemo(() => {
    let dataset = [...activeData];

    // 1. Text Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      dataset = dataset.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(term)
        )
      );
    }

    // 2. Sort column dataset
    if (sortKey) {
      dataset.sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];

        if (typeof valA === 'number' && typeof valB === 'number') {
          return sortOrder === 'asc' ? valA - valB : valB - valA;
        }

        const strA = String(valA).toLowerCase();
        const strB = String(valB).toLowerCase();
        return sortOrder === 'asc'
          ? strA.localeCompare(strB)
          : strB.localeCompare(strA);
      });
    }

    return dataset;
  }, [activeData, searchTerm, sortKey, sortOrder]);

  // Paginate filtered results data list memoized
  const totalPages = Math.ceil(filteredSortedData.length / pageSize) || 1;

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredSortedData.slice(start, start + pageSize);
  }, [filteredSortedData, currentPage, pageSize]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    setAnimationTrigger((prev) => prev + 1);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          bg: '#ffffff',
          border: '1px solid #e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
          rowHover: '#f8fafc',
          theadBg: '#f1f5f9',
          inputBg: '#ffffff',
          buttonBorder: '#cbd5e1',
          spotlightColor: 'rgba(15, 23, 42, 0.02)'
        };
      case 'glass':
        return {
          bg: 'rgba(15, 23, 42, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          text: '#f8fafc',
          muted: '#94a3b8',
          rowHover: 'rgba(255, 255, 255, 0.03)',
          theadBg: 'rgba(255, 255, 255, 0.02)',
          inputBg: 'rgba(255, 255, 255, 0.02)',
          buttonBorder: 'rgba(255, 255, 255, 0.08)',
          backdropBlur: '12px',
          spotlightColor: 'rgba(255, 255, 255, 0.025)'
        };
      case 'dark':
      default:
        return {
          bg: '#0b0f19',
          border: '1px solid #1e293b',
          text: '#f8fafc',
          muted: '#6b7280',
          rowHover: '#1e293b50',
          theadBg: '#0f172a',
          inputBg: '#0f172a',
          buttonBorder: '#1e293b',
          spotlightColor: 'rgba(255, 255, 255, 0.015)'
        };
    }
  };

  const styleTheme = getThemeStyles();

  return (
    <div
      ref={tableRef}
      onMouseMove={handleMouseMove}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: styleTheme.bg,
        border: styleTheme.border,
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        color: styleTheme.text,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle 120px at var(--mouse-x, 0) var(--mouse-y, 0), ${styleTheme.spotlightColor}, transparent)`,
        backdropFilter: styleTheme.backdropBlur ? `blur(${styleTheme.backdropBlur})` : 'none'
      }}
    >
      {/* Search Input bar */}
      <div style={{ display: 'flex', width: '100%', zIndex: 2 }}>
        <input
          type="text"
          placeholder="Filter data..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="table-filter-input"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            border: `1px solid ${styleTheme.border.split(' ').pop()}`,
            backgroundColor: styleTheme.inputBg,
            color: styleTheme.text,
            outline: 'none',
            fontSize: '0.88rem',
            transition: 'all 0.25s ease'
          }}
        />
      </div>

      {/* Responsive table element */}
      <div style={{ overflowX: 'auto', width: '100%', zIndex: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${styleTheme.border.split(' ').pop()}`, backgroundColor: styleTheme.theadBg }}>
              {activeColumns.map((col) => {
                const isSorted = sortKey === col.key;
                
                return (
                  <th
                    key={col.key}
                    tabIndex={col.sortable ? 0 : -1}
                    onKeyDown={(e) => handleHeaderKeyDown(e, col)}
                    onClick={() => col.sortable && handleSort(col.key)}
                    className={col.sortable ? 'sortable-header' : ''}
                    style={{
                      padding: '1rem',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: isSorted ? accentColor : styleTheme.text,
                      cursor: col.sortable ? 'pointer' : 'default',
                      userSelect: 'none',
                      outline: 'none',
                      position: 'relative',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{col.label}</span>
                      {col.sortable && (
                        <span style={{ fontSize: '0.75rem', opacity: isSorted ? 1 : 0.25 }}>
                          {isSorted ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr
                  key={row.id || index}
                  tabIndex={onRowClick ? 0 : -1}
                  onKeyDown={(e) => handleRowKeyDown(e, row)}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`table-body-row ${onRowClick ? 'clickable-row' : ''}`}
                  key-trigger={animationTrigger}
                  style={{
                    borderBottom: `1px solid ${styleTheme.border.split(' ').pop()}30`,
                    cursor: onRowClick ? 'pointer' : 'default',
                    transition: 'background-color 0.2s ease',
                    outline: 'none',
                    animation: `rowFadeIn 0.35s ease-out forwards`,
                    animationDelay: `${index * 0.04}s`,
                    opacity: 0
                  }}
                >
                  {activeColumns.map((col) => (
                    <td key={col.key} style={{ padding: '1rem', fontSize: '0.85rem', color: styleTheme.text }}>
                      {String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={activeColumns.length}
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    fontSize: '0.88rem',
                    color: styleTheme.muted,
                    fontWeight: 600
                  }}
                >
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Toolbar controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem',
          borderTop: `1px solid ${styleTheme.border.split(' ').pop()}30`,
          fontSize: '0.78rem',
          color: styleTheme.muted,
          zIndex: 2,
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div>
          Showing {Math.min(filteredSortedData.length, (currentPage - 1) * pageSize + 1)} to{' '}
          {Math.min(filteredSortedData.length, currentPage * pageSize)} of {filteredSortedData.length} records
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: `1px solid ${styleTheme.buttonBorder}`,
              backgroundColor: 'transparent',
              color: currentPage === 1 ? 'transparent' : styleTheme.text,
              cursor: currentPage === 1 ? 'default' : 'pointer',
              opacity: currentPage === 1 ? 0.35 : 1
            }}
          >
            Previous
          </button>

          {/* Page numbers selectors */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: currentPage === p ? accentColor : 'transparent',
                color: currentPage === p ? '#fff' : styleTheme.text,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {p}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: `1px solid ${styleTheme.buttonBorder}`,
              backgroundColor: 'transparent',
              color: currentPage === totalPages ? 'transparent' : styleTheme.text,
              cursor: currentPage === totalPages ? 'default' : 'pointer',
              opacity: currentPage === totalPages ? 0.35 : 1
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// React PropTypes validation schema keys definitions
DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass']),
  onRowClick: PropTypes.func
};
