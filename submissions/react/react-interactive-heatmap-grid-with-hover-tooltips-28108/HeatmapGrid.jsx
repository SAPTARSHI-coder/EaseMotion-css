import React, { useState, useRef, useEffect, useMemo } from 'react';

// ─── Heatmap Cell ────────────────────────────────────────────────────────────
const HeatmapCell = ({ value, maxValue, colorScheme, tooltipData, onHover, onLeave }) => {
  const intensity = maxValue > 0 ? value / maxValue : 0;
  
  // Base color interpolation (light to dark within the scheme)
  // For simplicity, we use a single hue and adjust opacity, 
  // but a real implementation might interpolate between specific hex codes.
  // We'll use CSS custom properties to handle the fill color dynamically based on intensity.
  
  return (
    <div
      className="ease-heatmap-cell"
      style={{
        '--cell-intensity': intensity,
        '--cell-base-color': colorScheme,
      }}
      onMouseEnter={(e) => onHover(e, tooltipData)}
      onMouseLeave={onLeave}
      role="gridcell"
      aria-label={`Value: ${value}`}
    />
  );
};

// ─── Heatmap Tooltip ──────────────────────────────────────────────────────────
const Tooltip = ({ data, position, visible }) => {
  if (!data) return null;

  return (
    <div
      className={`ease-heatmap-tooltip ${visible ? 'is-visible' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      role="tooltip"
    >
      <div className="ease-heatmap-tooltip-title">{data.label}</div>
      <div className="ease-heatmap-tooltip-value">
        <span className="ease-heatmap-tooltip-dot" style={{ background: data.colorScheme }} />
        {data.value}
      </div>
    </div>
  );
};

/**
 * InteractiveHeatmapGrid — A grid that displays data intensity with hover tooltips.
 *
 * @param {Array}    data        - 2D array of values (rows of columns) or flat array with {x, y, value} objects. We assume 2D array of numbers for simplicity.
 * @param {Array}    xLabels     - Array of strings for X-axis labels.
 * @param {Array}    yLabels     - Array of strings for Y-axis labels.
 * @param {string}   colorScheme - Base CSS color (e.g. '#3b82f6') used for intensity shading.
 */
const InteractiveHeatmapGrid = ({
  data = [],
  xLabels = [],
  yLabels = [],
  colorScheme = '#3b82f6',
}) => {
  const [tooltip, setTooltip] = useState({ visible: false, data: null, pos: { x: 0, y: 0 } });
  const gridRef = useRef(null);

  // Calculate max value for intensity scaling
  const maxValue = useMemo(() => {
    let max = 0;
    data.forEach(row => {
      row.forEach(val => {
        if (val > max) max = val;
      });
    });
    return max;
  }, [data]);

  const handleHover = (e, cellData) => {
    if (!gridRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();
    
    // Position tooltip above the cell, relative to the grid container
    const x = rect.left - gridRect.left + (rect.width / 2);
    const y = rect.top - gridRect.top - 8; // 8px offset above

    setTooltip({
      visible: true,
      data: cellData,
      pos: { x, y }
    });
  };

  const handleLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <div className="ease-heatmap-root" ref={gridRef}>
      
      {/* Top Labels (X Axis) */}
      <div className="ease-heatmap-header">
        <div className="ease-heatmap-corner" />
        <div className="ease-heatmap-x-labels">
          {xLabels.map((label, i) => (
            <div key={`x-${i}`} className="ease-heatmap-label-x">{label}</div>
          ))}
        </div>
      </div>

      {/* Grid Body */}
      <div className="ease-heatmap-body">
        {/* Y Axis Labels */}
        <div className="ease-heatmap-y-labels">
          {yLabels.map((label, i) => (
            <div key={`y-${i}`} className="ease-heatmap-label-y">{label}</div>
          ))}
        </div>

        {/* Heatmap Cells */}
        <div 
          className="ease-heatmap-grid" 
          style={{ gridTemplateColumns: `repeat(${xLabels.length}, 1fr)` }}
          role="grid"
        >
          {data.map((row, rowIndex) => 
            row.map((val, colIndex) => {
              const cellData = {
                label: `${yLabels[rowIndex] || `Row ${rowIndex}`} - ${xLabels[colIndex] || `Col ${colIndex}`}`,
                value: val,
                colorScheme
              };
              return (
                <HeatmapCell
                  key={`cell-${rowIndex}-${colIndex}`}
                  value={val}
                  maxValue={maxValue}
                  colorScheme={colorScheme}
                  tooltipData={cellData}
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Floating Tooltip */}
      <Tooltip 
        visible={tooltip.visible} 
        data={tooltip.data} 
        position={tooltip.pos} 
      />
    </div>
  );
};

export default InteractiveHeatmapGrid;
