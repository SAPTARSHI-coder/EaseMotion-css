import { useCallback, useMemo, useRef, useState } from 'react';

/**
 * VirtualList
 * Renders only the rows near the viewport for long lists, keeping the scrollbar
 * accurate via a spacer of the full computed height.
 */
export default function VirtualList({
  items = [],
  rowHeight = 40,
  height = 320,
  overscan = 4,
  renderRow,
  className = '',
  label,
  ...rest
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const frame = useRef(0);

  // Coalesce scroll events to one state update per frame.
  const onScroll = useCallback((e) => {
    const next = e.currentTarget.scrollTop;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      setScrollTop(next);
    });
  }, []);

  const { start, end, offset, total } = useMemo(() => {
    const t = items.length * rowHeight;
    const s = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
    const visible = Math.ceil(height / rowHeight) + overscan * 2;
    const e = Math.min(items.length, s + visible);
    return { start: s, end: e, offset: s * rowHeight, total: t };
  }, [items.length, rowHeight, height, overscan, scrollTop]);

  const slice = items.slice(start, end);

  return (
    <div
      className={`vls ${className}`.trim()}
      style={{ height }}
      onScroll={onScroll}
      role="listbox"
      aria-label={label}
      aria-setsize={items.length}
      tabIndex={0}
      {...rest}
    >
      {/* spacer gives the scrollbar the true document height */}
      <div className="vls__sizer" style={{ height: total }}>
        <div className="vls__win" style={{ transform: `translateY(${offset}px)` }}>
          {slice.map((item, i) => (
            <div
              key={start + i}
              className="vls__row"
              style={{ height: rowHeight }}
              role="option"
              aria-selected="false"
              aria-posinset={start + i + 1}
            >
              {renderRow ? renderRow(item, start + i) : String(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
