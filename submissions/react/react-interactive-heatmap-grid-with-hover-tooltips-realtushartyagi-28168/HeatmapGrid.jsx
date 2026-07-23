import React, { useState } from 'react';

/**
 * HeatmapGrid
 * An interactive heatmap component with animated hover tooltips and dynamic 
 * cell scaling, powered by EaseMotion CSS.
 *
 * Props:
 * - data: Array<{ label: string, value: number, date: string }> - Heatmap dataset.
 * - columns: number - Number of columns in the grid (default: 7).
 * - colorRange: Array<string> - Base color variants from lightest to darkest.
 */
export default function HeatmapGrid({
  data = [],
  columns = 7,
  colorRange = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
}) {
  const [activeCell, setActiveCell] = useState(null);

  const getIntensityColor = (value) => {
    if (value === 0) return colorRange[0];
    if (value < 5) return colorRange[1];
    if (value < 10) return colorRange[2];
    if (value < 20) return colorRange[3];
    return colorRange[4];
  };

  return (
    <div className="ease-hm-container">
      <div 
        className="ease-hm-grid" 
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {data.map((cell, index) => (
          <div
            key={index}
            className="ease-hm-cell-wrapper"
            onMouseEnter={() => setActiveCell(index)}
            onMouseLeave={() => setActiveCell(null)}
          >
            <div
              className="ease-hm-cell"
              style={{ backgroundColor: getIntensityColor(cell.value) }}
            />
            {activeCell === index && (
              <div className="ease-hm-tooltip">
                <strong>{cell.value} {cell.label}</strong>
                <span>on {cell.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
