import React, { useState } from 'react';
import './style.css';

export const EaseDataTable = ({ columns = [], data = [] }) => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="ease-datatable-wrapper">
      <input
        type="text"
        className="ease-table-search"
        placeholder="Search records..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table className="ease-datatable">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rIdx) => (
            <tr key={rIdx}>
              {columns.map((col, cIdx) => (
                <td key={cIdx}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EaseDataTable;
