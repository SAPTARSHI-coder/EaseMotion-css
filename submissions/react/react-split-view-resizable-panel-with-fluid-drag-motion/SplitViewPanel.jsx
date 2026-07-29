import React, { useCallback, useRef, useState } from 'react';
import './style.css';

/**
 * SplitViewPanel
 * A two-pane resizable split view with a draggable divider that
 * animates fluidly on drag and settles with a spring easing on release.
 */
export default function SplitViewPanel({
  left,
  right,
  defaultSplit = 50,
  minSize = 15,
  maxSize = 85,
  direction = 'horizontal',
}) {
  const containerRef = useRef(null);
  const [split, setSplit] = useState(defaultSplit);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isHorizontal = direction === 'horizontal';
      const pos = isHorizontal ? e.clientX - rect.left : e.clientY - rect.top;
      const size = isHorizontal ? rect.width : rect.height;
      let percent = (pos / size) * 100;
      percent = Math.min(maxSize, Math.max(minSize, percent));
      setSplit(percent);
    },
    [direction, minSize, maxSize]
  );

  const stopDragging = useCallback(() => {
    setIsDragging(false);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', stopDragging);
  }, [handlePointerMove]);

  const startDragging = (e) => {
    e.preventDefault();
    setIsDragging(true);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);
  };

  const isHorizontal = direction === 'horizontal';

  return (
    <div
      ref={containerRef}
      className={`ease-split-view ease-split-view--${direction}`}
    >
      <div
        className="ease-split-view__pane"
        style={
          isHorizontal
            ? { width: `${split}%` }
            : { height: `${split}%` }
        }
      >
        {left}
      </div>

      <div
        className={`ease-split-view__divider ${isDragging ? 'ease-split-view__divider--active' : ''}`}
        onPointerDown={startDragging}
        role="separator"
        aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
        aria-valuenow={Math.round(split)}
        aria-valuemin={minSize}
        aria-valuemax={maxSize}
      >
        <div className="ease-split-view__grip" />
      </div>

      <div
        className="ease-split-view__pane"
        style={
          isHorizontal
            ? { width: `${100 - split}%` }
            : { height: `${100 - split}%` }
        }
      >
        {right}
      </div>
    </div>
  );
}
