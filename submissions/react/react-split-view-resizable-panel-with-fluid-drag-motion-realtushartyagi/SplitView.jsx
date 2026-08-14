import React, { useState, useRef, useCallback, useEffect } from 'react';

const SplitView = ({
  leftPanel,
  rightPanel,
  defaultSplit = 50,
  minSize = 15,
  maxSize = 85,
  direction = 'horizontal'
}) => {
  const [splitPercent, setSplitPercent] = useState(defaultSplit);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPercent = direction === 'horizontal'
        ? ((e.clientX - rect.left) / rect.width) * 100
        : ((e.clientY - rect.top) / rect.height) * 100;
      newPercent = Math.max(minSize, Math.min(maxSize, newPercent));
      setSplitPercent(newPercent);
    },
    [isDragging, direction, minSize, maxSize]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      let newPercent = direction === 'horizontal'
        ? ((touch.clientX - rect.left) / rect.width) * 100
        : ((touch.clientY - rect.top) / rect.height) * 100;
      newPercent = Math.max(minSize, Math.min(maxSize, newPercent));
      setSplitPercent(newPercent);
    },
    [isDragging, direction, minSize, maxSize]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const isHorizontal = direction === 'horizontal';
  const firstPanelStyle = isHorizontal
    ? { width: `${splitPercent}%` }
    : { height: `${splitPercent}%` };
  const secondPanelStyle = isHorizontal
    ? { width: `${100 - splitPercent}%` }
    : { height: `${100 - splitPercent}%` };

  return (
    <div
      ref={containerRef}
      className={`ease-split-container ease-split-${direction} ${isDragging ? 'is-dragging' : ''}`}
    >
      <div className="ease-split-panel ease-panel-first" style={firstPanelStyle}>
        {leftPanel}
      </div>
      <div
        className={`ease-split-divider ease-split-divider-${direction} ${isDragging ? 'is-active' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        role="separator"
        aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
        aria-valuenow={Math.round(splitPercent)}
        aria-valuemin={minSize}
        aria-valuemax={maxSize}
        tabIndex={0}
      >
        <div className="ease-divider-handle">
          <span className="ease-handle-dot"></span>
          <span className="ease-handle-dot"></span>
          <span className="ease-handle-dot"></span>
        </div>
      </div>
      <div className="ease-split-panel ease-panel-second" style={secondPanelStyle}>
        {rightPanel}
      </div>
    </div>
  );
};

export default SplitView;
