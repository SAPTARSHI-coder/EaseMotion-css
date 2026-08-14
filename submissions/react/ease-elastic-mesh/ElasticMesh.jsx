import React, { useRef, useEffect, useState, useMemo } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Elastic Mesh
 * ============================================================================
 * 
 * Interactive backgrounds where a mesh physically warps away from the cursor
 * usually require heavy WebGL rendering engines like Three.js.
 * 
 * This highly advanced React component builds the mesh using native DOM nodes.
 * We track pointer coordinates and mathematically calculate the Euclidean distance 
 * to every single cell in the grid. We map this 2D physics equation directly 
 * to CSS Custom Properties, utilizing CSS `transition` curves to offload the 
 * elastic bouncing to the GPU!
 */

export const ElasticMesh = ({ 
  columns = 20, 
  rows = 20, 
  repelRadius = 150, 
  repelStrength = 40 
}) => {
  const containerRef = useRef(null);
  
  // We use a ref array to store direct references to all grid cells.
  // This allows us to modify their CSS Custom Properties directly in the DOM,
  // completely bypassing the React Render Tree for flawless 60fps!
  const cellRefs = useRef([]);
  
  // Track animation frame to prevent layout thrashing
  const ticking = useRef(false);

  // Generate the massive grid array once
  const gridCells = useMemo(() => {
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        cells.push({ row: r, col: c, id: `${r}-${c}` });
      }
    }
    return cells;
  }, [columns, rows]);

  // The Physics Engine
  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    
    // Throttle the physics calculations to the monitor's physical refresh rate
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculate pointer position relative to the container
        const pointerX = e.clientX - rect.left;
        const pointerY = e.clientY - rect.top;
        
        // Iterate through all 400+ DOM nodes and apply the repel physics
        cellRefs.current.forEach((cellNode) => {
          if (!cellNode) return;
          
          // We get the physical center coordinates of this specific cell
          // (We cache these in dataset attributes during render to avoid heavy getBoundingClientRect calls!)
          const cellX = parseFloat(cellNode.dataset.centerX);
          const cellY = parseFloat(cellNode.dataset.centerY);
          
          if (isNaN(cellX) || isNaN(cellY)) return;
          
          // Calculate Euclidean Distance (Pythagorean theorem)
          const dx = cellX - pointerX;
          const dy = cellY - pointerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < repelRadius) {
            // The cell is inside the blast radius!
            // Calculate how hard to push it (closer = harder push)
            const force = (repelRadius - distance) / repelRadius; // 0.0 to 1.0
            
            // Calculate the push vectors
            const pushX = (dx / distance) * (force * repelStrength);
            const pushY = (dy / distance) * (force * repelStrength);
            
            // Pass the vectors to CSS natively!
            cellNode.style.setProperty('--push-x', `${pushX}px`);
            cellNode.style.setProperty('--push-y', `${pushY}px`);
          } else {
            // The cell is outside the radius. Reset it to 0.
            // The CSS `transition` will handle the elastic bounce back natively!
            cellNode.style.setProperty('--push-x', `0px`);
            cellNode.style.setProperty('--push-y', `0px`);
          }
        });
        
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  const handlePointerLeave = () => {
    // When the mouse leaves the container, instantly reset all cells
    window.requestAnimationFrame(() => {
      cellRefs.current.forEach((cellNode) => {
        if (cellNode) {
          cellNode.style.setProperty('--push-x', `0px`);
          cellNode.style.setProperty('--push-y', `0px`);
        }
      });
    });
  };

  // Pre-calculate physical centers on mount and resize
  useEffect(() => {
    const calculateCenters = () => {
      cellRefs.current.forEach((cellNode) => {
        if (cellNode) {
          // Calculate center exactly once to save thousands of DOM reads per frame
          const rect = cellNode.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          
          const centerX = (rect.left - containerRect.left) + (rect.width / 2);
          const centerY = (rect.top - containerRect.top) + (rect.height / 2);
          
          cellNode.dataset.centerX = centerX;
          cellNode.dataset.centerY = centerY;
        }
      });
    };
    
    // Small delay to ensure CSS Grid has painted
    setTimeout(calculateCenters, 100);
    
    window.addEventListener('resize', calculateCenters);
    return () => window.removeEventListener('resize', calculateCenters);
  }, [columns, rows]);

  return (
    <div 
      className="ease-elastic-container"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}
    >
      {gridCells.map((cell, index) => (
        <div 
          key={cell.id} 
          className="ease-elastic-cell"
          ref={(el) => (cellRefs.current[index] = el)}
        >
          {/* The visible dot inside the invisible grid cell */}
          <div className="elastic-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default ElasticMesh;
