import React, { useState } from 'react';
import './style.css';

export default function HeatmapGrid({
  data = [],
  colorStops = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  rows = 7,
  cellSize = 14,
  cellGap = 4,
  tooltipFormatter = (item) => `${item.count} contributions on ${item.date}`
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Map the items into columns of `rows` height
  const columns = [];
  for (let i = 0; i < data.length; i += rows) {
    columns.push(data.slice(i, i + rows));
  }

  // Simple function to determine color index based on value
  // This assumes value is between 0 and some max
  const maxCount = Math.max(...data.map(d => d.count), 1);
  
  const getColor = (count) => {
    if (count === 0) return colorStops[0];
    const ratio = count / maxCount;
    // Map ratio to index 1 through colorStops.length - 1
    const index = Math.ceil(ratio * (colorStops.length - 2)) + 1;
    return colorStops[Math.min(index, colorStops.length - 1)];
  };

  const handleMouseEnter = (e, item) => {
    const rect = e.target.getBoundingClientRect();
    // Position tooltip centered above the cell
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 8 // 8px spacing
    });
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="ease-heatmap-container ease-fade-in">
      <div 
        className="ease-heatmap-grid"
        style={{ gap: `${cellGap}px` }}
      >
        {columns.map((col, colIndex) => (
          <div 
            key={colIndex} 
            className="ease-heatmap-column"
            style={{ gap: `${cellGap}px` }}
          >
            {col.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="ease-heatmap-cell ease-pulse-hover"
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                  backgroundColor: getColor(item.count)
                }}
                onMouseEnter={(e) => handleMouseEnter(e, item)}
                onMouseLeave={handleMouseLeave}
                aria-label={tooltipFormatter(item)}
                tabIndex={0}
                onFocus={(e) => handleMouseEnter(e, item)}
                onBlur={handleMouseLeave}
              />
            ))}
          </div>
        ))}
      </div>

      {hoveredItem && (
        <div 
          className="ease-heatmap-tooltip ease-scale-up-tooltip"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`
          }}
          role="tooltip"
        >
          {tooltipFormatter(hoveredItem)}
          <div className="ease-heatmap-tooltip-arrow" />
        </div>
      )}
    </div>
  );
}
