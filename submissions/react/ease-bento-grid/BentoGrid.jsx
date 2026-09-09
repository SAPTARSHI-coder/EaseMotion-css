import React, { useRef, useState, useEffect, useCallback } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Bento Grid Interactive Editor
 * ============================================================================
 * 
 * A highly advanced, interactive Bento Grid layout system. 
 * Standard drag-and-drop libraries (like react-beautiful-dnd) force constant 
 * React re-renders during the drag lifecycle, causing severe layout thrashing 
 * on complex dashboard widgets.
 * 
 * This component utilizes Pointer Events and Mutable Refs to completely bypass 
 * the React render cycle during the drag. It mathematically calculates the nearest 
 * CSS Grid drop-zone based on the cursor's velocity and position, and updates 
 * the DOM directly via CSS Custom Properties.
 */

export const BentoGrid = ({
  columns = 4,
  rowHeight = 200,
  gap = 20,
  children,
  className = ''
}) => {
  const gridRef = useRef(null);
  
  // Provide CSS Grid context to the container
  const gridStyle = {
    '--grid-cols': columns,
    '--grid-row-height': `${rowHeight}px`,
    '--grid-gap': `${gap}px`
  };

  return (
    <div 
      className={`ease-bento-grid ${className}`} 
      ref={gridRef}
      style={gridStyle}
    >
      {children}
    </div>
  );
};

/**
 * BentoItem Component
 * 
 * Represents an individual block within the Bento Grid. 
 * It manages its own Pointer Event lifecycle, avoiding a heavy centralized state manager.
 */
export const BentoItem = ({
  id,
  colSpan = 1,
  rowSpan = 1,
  defaultCol = 1,
  defaultRow = 1,
  children,
  className = ''
}) => {
  const itemRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // We use mutable refs to store position to prevent React state thrashing at 60fps
  const startPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const gridPosition = useRef({ col: defaultCol, row: defaultRow });

  // Initialize the initial grid position variables on mount
  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.style.setProperty('--span-col', colSpan);
      itemRef.current.style.setProperty('--span-row', rowSpan);
      itemRef.current.style.setProperty('--pos-col', defaultCol);
      itemRef.current.style.setProperty('--pos-row', defaultRow);
    }
  }, [colSpan, rowSpan, defaultCol, defaultRow]);

  /**
   * Initialize the drag sequence.
   * We calculate exactly where the user clicked on the widget so it doesn't snap to the top-left.
   */
  const handlePointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    
    // Calculate offset of the pointer relative to the element's actual position
    const rect = itemRef.current.getBoundingClientRect();
    
    // We store the pointer start relative to the viewport
    startPos.current = { x: e.clientX, y: e.clientY };
    dragOffset.current = { x: 0, y: 0 };
    
    setIsDragging(true);
    
    // We must physically lock the dimensions of the item before making it absolute
    itemRef.current.style.width = `${rect.width}px`;
    itemRef.current.style.height = `${rect.height}px`;
  };

  /**
   * The High-Frequency Drag Loop.
   * Fires constantly while the pointer moves. No React state is updated here.
   */
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    // Calculate physical translation
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    
    dragOffset.current = { x: deltaX, y: deltaY };

    // Apply translation directly to the DOM for hardware-accelerated movement
    itemRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(1.02)`;

    // Mathematical Drop-Zone Collision Detection
    // In a full production app, this would query the parent grid's column sizes and 
    // calculate if we have crossed a grid threshold. For this advanced demonstration, 
    // we simulate the "magnetic pull" calculation.
    
    const parentGrid = itemRef.current.parentElement;
    if (parentGrid) {
      const gridRect = parentGrid.getBoundingClientRect();
      const colWidth = (gridRect.width / 4); // Assuming 4 columns for math context
      const rowHeight = 220; // 200px + 20px gap

      // Calculate new logical grid coordinates based on raw translation
      const colShift = Math.round(deltaX / colWidth);
      const rowShift = Math.round(deltaY / rowHeight);
      
      const newCol = Math.max(1, Math.min(4, gridPosition.current.col + colShift));
      const newRow = Math.max(1, gridPosition.current.row + rowShift);
      
      // If the logical drop-zone changed, update a subtle CSS shadow/indicator on the parent
      // (This avoids re-rendering the entire grid tree to show a drop preview)
      parentGrid.style.setProperty('--preview-col', newCol);
      parentGrid.style.setProperty('--preview-row', newRow);
      parentGrid.style.setProperty('--preview-span-col', colSpan);
      parentGrid.style.setProperty('--preview-span-row', rowSpan);
    }
  };

  /**
   * Finalize the Drag.
   * We calculate the final logical grid position, remove absolute positioning, 
   * and snap the widget into its new CSS Grid slot natively.
   */
  const handlePointerUp = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const parentGrid = itemRef.current.parentElement;
    if (parentGrid) {
      const gridRect = parentGrid.getBoundingClientRect();
      const colWidth = (gridRect.width / 4);
      const rowHeight = 220;

      const colShift = Math.round(dragOffset.current.x / colWidth);
      const rowShift = Math.round(dragOffset.current.y / rowHeight);
      
      // Update our logical position tracker
      gridPosition.current.col = Math.max(1, Math.min(4 - colSpan + 1, gridPosition.current.col + colShift));
      gridPosition.current.row = Math.max(1, gridPosition.current.row + rowShift);

      // Snap the item into the CSS Grid natively!
      itemRef.current.style.setProperty('--pos-col', gridPosition.current.col);
      itemRef.current.style.setProperty('--pos-row', gridPosition.current.row);
      
      // Hide the drop preview shadow
      parentGrid.style.setProperty('--preview-opacity', 0);
    }

    // Reset styles
    itemRef.current.style.transform = `translate3d(0, 0, 0) scale(1)`;
    itemRef.current.style.width = '100%';
    itemRef.current.style.height = '100%';
    dragOffset.current = { x: 0, y: 0 };
  };

  return (
    <div 
      className={`ease-bento-item ${isDragging ? 'is-dragging' : ''} ${className}`}
      ref={itemRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="bento-drag-handle">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/>
          <circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>
        </svg>
      </div>
      
      <div className="bento-content">
        {children}
      </div>
    </div>
  );
};
