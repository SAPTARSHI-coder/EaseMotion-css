import React from 'react';
import './style.css';

/**
 * FeatureMatrixGrid
 * Renders a comparison matrix (e.g. plans vs features) where each cell
 * glows on hover with a soft radial highlight.
 */
export default function FeatureMatrixGrid({ columns, rows }) {
  return (
    <div className="ease-matrix-wrapper">
      <table className="ease-matrix">
        <thead>
          <tr>
            <th className="ease-matrix__corner" />
            {columns.map((col) => (
              <th key={col.key} className="ease-matrix__col-header">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <th className="ease-matrix__row-header">{row.label}</th>
              {columns.map((col) => {
                const value = row.values[col.key];
                return (
                  <td key={col.key} className="ease-matrix__cell">
                    <div className="ease-matrix__cell-inner">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <span className="ease-matrix__check" aria-label="Included">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="ease-matrix__dash" aria-label="Not included">
                            —
                          </span>
                        )
                      ) : (
                        <span className="ease-matrix__text">{value}</span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
