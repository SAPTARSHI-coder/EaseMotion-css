import React, { useState, useMemo } from 'react';

/**
 * Interactive Heatmap Grid with Hover Tooltips
 * 
 * @param {Array} data - Array of objects { x, y, value, label }
 * @param {Array} xLabels - Array of strings for X axis labels
 * @param {Array} yLabels - Array of strings for Y axis labels
 * @param {Function} colorScale - Function taking a value (0 to max) returning a color string. If omitted, uses default green scale.
 */
const HeatmapGrid = ({ data = [], xLabels = [], yLabels = [], colorScale }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  
  // Calculate max value to normalize colors
  const maxValue = useMemo(() => {
    return Math.max(...data.map(d => d.value), 1); // fallback to 1 to avoid div by zero
  }, [data]);

  // Default color scale: GitHub style greens
  const defaultColorScale = (val) => {
    if (val === 0) return '#ebedf0';
    const ratio = val / maxValue;
    if (ratio < 0.25) return '#9be9a8';
    if (ratio < 0.50) return '#40c463';
    if (ratio < 0.75) return '#30a14e';
    return '#216e39';
  };

  const getColor = colorScale || defaultColorScale;

  // Build a 2D array representation for easier rendering
  const grid = yLabels.map((yLabel, yIndex) => {
    return xLabels.map((xLabel, xIndex) => {
      const cellData = data.find(d => d.y === yIndex && d.x === xIndex) || { value: 0 };
      return {
        x: xIndex,
        y: yIndex,
        xLabel,
        yLabel,
        value: cellData.value,
        label: cellData.label || `${cellData.value} items on ${xLabel}, ${yLabel}`
      };
    });
  });

  return (
    <div className="ease-heatmap-container">
      {/* Y Axis Labels */}
      <div className="ease-heatmap-y-axis">
        {yLabels.map((label, i) => (
          <div key={`y-${i}`} className="ease-heatmap-label">{label}</div>
        ))}
      </div>

      <div className="ease-heatmap-main">
        {/* The Grid itself */}
        <div className="ease-heatmap-grid" style={{ gridTemplateColumns: `repeat(${xLabels.length}, 1fr)` }}>
          {grid.map((row, yIndex) => 
            row.map((cell, xIndex) => (
              <div
                key={`${xIndex}-${yIndex}`}
                className="ease-heatmap-cell-wrapper"
                onMouseEnter={() => setHoveredCell(cell)}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div 
                  className={`ease-heatmap-cell ${hoveredCell === cell ? 'is-hovered' : ''}`}
                  style={{ backgroundColor: getColor(cell.value) }}
                  data-value={cell.value}
                >
                  {/* Tooltip */}
                  {hoveredCell === cell && (
                    <div className="ease-heatmap-tooltip">
                      {cell.label}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* X Axis Labels */}
        <div className="ease-heatmap-x-axis">
          {xLabels.map((label, i) => (
            <div key={`x-${i}`} className="ease-heatmap-label">{label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatmapGrid;
