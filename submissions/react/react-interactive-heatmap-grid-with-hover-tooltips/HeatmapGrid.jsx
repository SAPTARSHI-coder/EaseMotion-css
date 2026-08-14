import React, { useState, useMemo } from 'react';

/**
 * Interactive Heatmap Grid with Hover Tooltips
 * 
 * @param {Array} data - Array of objects with x, y coordinates and a value (0-100) e.g., [{x: 0, y: 0, val: 20}]
 * @param {Array} xLabels - Array of labels for the X-axis (columns)
 * @param {Array} yLabels - Array of labels for the Y-axis (rows)
 * @param {String} colorTheme - The base color hue for the heatmap (e.g., 'emerald', 'blue', 'orange')
 */
const HeatmapGrid = ({ 
  data = [], 
  xLabels = [], 
  yLabels = [], 
  colorTheme = 'emerald'
}) => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Helper to determine the CSS class based on value intensity (0-4 scale)
  const getIntensityClass = (val) => {
    if (val === 0 || !val) return 'intensity-0';
    if (val < 25) return 'intensity-1';
    if (val < 50) return 'intensity-2';
    if (val < 75) return 'intensity-3';
    return 'intensity-4';
  };

  // Build a 2D array representation for easier rendering
  const gridMap = useMemo(() => {
    const map = new Map();
    data.forEach(item => {
      map.set(`${item.y}-${item.x}`, item.val);
    });
    return map;
  }, [data]);

  return (
    <div className={`ease-heatmap-container theme-${colorTheme}`}>
      <div className="ease-heatmap-inner">
        {/* Empty top-left corner */}
        <div className="ease-heatmap-corner"></div>

        {/* X-Axis Labels (Top) */}
        <div className="ease-heatmap-x-labels">
          {xLabels.map((label, i) => (
            <div key={`x-${i}`} className="ease-heatmap-label">{label}</div>
          ))}
        </div>

        {/* Y-Axis Labels (Left) */}
        <div className="ease-heatmap-y-labels">
          {yLabels.map((label, i) => (
            <div key={`y-${i}`} className="ease-heatmap-label">{label}</div>
          ))}
        </div>

        {/* The Grid */}
        <div 
          className="ease-heatmap-grid" 
          style={{ 
            gridTemplateColumns: `repeat(${xLabels.length}, 1fr)`,
            gridTemplateRows: `repeat(${yLabels.length}, 1fr)`
          }}
        >
          {yLabels.map((_, y) => (
            xLabels.map((_, x) => {
              const val = gridMap.get(`${y}-${x}`) || 0;
              const isHovered = hoveredCell && hoveredCell.x === x && hoveredCell.y === y;
              
              return (
                <div 
                  key={`${y}-${x}`} 
                  className="ease-heatmap-cell-wrapper"
                  onMouseEnter={() => setHoveredCell({ x, y, val })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className={`ease-heatmap-cell ${getIntensityClass(val)}`}></div>
                  
                  {/* Tooltip rendering conditionally inside the cell wrapper */}
                  <div className={`ease-heatmap-tooltip ${isHovered ? 'is-visible' : ''}`}>
                    <span className="tooltip-val">{val}</span> contributions on {xLabels[x]}
                    <div className="tooltip-arrow"></div>
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="ease-heatmap-legend">
        <span className="legend-label">Less</span>
        <div className="ease-heatmap-cell intensity-0"></div>
        <div className="ease-heatmap-cell intensity-1"></div>
        <div className="ease-heatmap-cell intensity-2"></div>
        <div className="ease-heatmap-cell intensity-3"></div>
        <div className="ease-heatmap-cell intensity-4"></div>
        <span className="legend-label">More</span>
      </div>
    </div>
  );
};

export default HeatmapGrid;
