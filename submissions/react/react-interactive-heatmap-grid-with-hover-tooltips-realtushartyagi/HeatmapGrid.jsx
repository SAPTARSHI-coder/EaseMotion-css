import React, { useState, useMemo } from 'react';

/**
 * HeatmapGrid – a lightweight interactive heatmap.
 * Props:
 *   rows: number – number of rows
 *   cols: number – number of columns
 *   data: number[][] – 2‑D array of numeric values (rows × cols)
 *   maxValue?: number – optional max for color scaling (default: max in data)
 *   minValue?: number – optional min for color scaling (default: min in data)
 *   onCellHover?: (value: number, row: number, col: number) => void – optional callback
 */
const HeatmapGrid = ({ rows, cols, data, maxValue, minValue, onCellHover }) => {
  const [hoverInfo, setHoverInfo] = useState(null);

  const max = useMemo(() => (maxValue !== undefined ? maxValue : Math.max(...data.flat())), [data, maxValue]);
  const min = useMemo(() => (minValue !== undefined ? minValue : Math.min(...data.flat())), [data, minValue]);

  const getColor = (value) => {
    const ratio = (value - min) / (max - min || 1);
    // Interpolate between blue (low) and red (high)
    const r = Math.round(255 * ratio);
    const b = Math.round(255 * (1 - ratio));
    return `rgb(${r},0,${b})`;
  };

  const handleMouseEnter = (value, r, c) => {
    setHoverInfo({ value, r, c, x: null, y: null });
    if (onCellHover) onCellHover(value, r, c);
  };

  const handleMouseLeave = () => setHoverInfo(null);

  const handleMouseMove = (e) => {
    if (hoverInfo) {
      setHoverInfo((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    }
  };

  return (
    <div className="ease-heatmap" onMouseMove={handleMouseMove}>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="ease-heatmap-row">
          {Array.from({ length: cols }).map((_, c) => {
            const value = data[r][c];
            return (
              <div
                key={c}
                className="ease-heatmap-cell"
                style={{ backgroundColor: getColor(value) }}
                onMouseEnter={() => handleMouseEnter(value, r, c)}
                onMouseLeave={handleMouseLeave}
                title={value}
              />
            );
          })}
        </div>
      ))}

      {hoverInfo && (
        <div
          className="ease-heatmap-tooltip ease-fade-in-up"
          style={{ left: hoverInfo.x + 10, top: hoverInfo.y + 10 }}
        >
          <strong>Value:</strong> {hoverInfo.value}<br />
          <strong>Row:</strong> {hoverInfo.r + 1}, <strong>Col:</strong> {hoverInfo.c + 1}
        </div>
      )}
    </div>
  );
};

export default HeatmapGrid;
