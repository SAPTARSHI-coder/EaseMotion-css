/**
 * EaseMotion CSS — VirtualList
 * ============================================================
 * Windowed rendering for long lists.
 *
 * The accessibility trap that most virtual lists fall into: rendering
 * only visible rows means the accessibility tree reports "list, 20 items"
 * when there are 20,000. A screen reader user has no idea how much data
 * exists, and browser find-in-page cannot reach anything off-screen.
 *
 * `aria-setsize` and `aria-posinset` on each row fix the first problem —
 * they declare the TRUE total and each row's real position, independent
 * of what is mounted. The second problem is unavoidable with windowing,
 * so it is documented rather than pretended away.
 *
 * Scroll handling is throttled through requestAnimationFrame rather than
 * running on every scroll event. A raw scroll handler that calls setState
 * fires far more often than the display refreshes, so the extra renders
 * are pure waste and can drop frames on a slow device.
 * ============================================================
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {Array}    props.items
 * @param {number}   [props.itemHeight=44]  Fixed row height in px.
 * @param {number}   [props.height=360]     Viewport height in px.
 * @param {number}   [props.overscan=4]     Rows rendered beyond the window.
 * @param {(item: any, index: number) => React.ReactNode} props.renderItem
 * @param {(item: any, index: number) => string|number} [props.getKey]
 * @param {string}   [props.label='List']
 * @param {string}   [props.className]
 */
export default function VirtualList({
  items = [],
  itemHeight = 44,
  height = 360,
  overscan = 4,
  renderItem,
  getKey,
  label = 'List',
  className = '',
  ...rest
}) {
  const viewportRef = useRef(null);
  const frameRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const safeHeight = Number.isFinite(itemHeight) && itemHeight > 0 ? itemHeight : 44;
  const total = items.length;

  // Throttled to one update per frame — a raw scroll handler fires far
  // more often than the display refreshes, so the extra renders are waste.
  const onScroll = useCallback((event) => {
    const next = event.currentTarget.scrollTop;

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      setScrollTop(next);
      frameRef.current = null;
    });
  }, []);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const { start, end, offset } = useMemo(() => {
    const visibleCount = Math.ceil(height / safeHeight);
    const first = Math.floor(scrollTop / safeHeight);

    const from = Math.max(0, first - overscan);
    const to = Math.min(total, first + visibleCount + overscan);

    return { start: from, end: to, offset: from * safeHeight };
  }, [scrollTop, height, safeHeight, overscan, total]);

  const windowItems = items.slice(start, end);

  /**
   * Scroll a specific index into view. Exposed because keyboard focus can
   * legitimately need to reach a row that is not mounted — without this
   * there is no way to programmatically reach item 9,000.
   */
  const scrollToIndex = useCallback(
    (index) => {
      const node = viewportRef.current;
      if (!node) return;

      const clamped = Math.max(0, Math.min(index, total - 1));
      node.scrollTop = clamped * safeHeight;
    },
    [total, safeHeight],
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Home') {
        event.preventDefault();
        scrollToIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        scrollToIndex(total - 1);
      } else if (event.key === 'PageDown') {
        event.preventDefault();
        scrollToIndex(start + Math.ceil(height / safeHeight));
      } else if (event.key === 'PageUp') {
        event.preventDefault();
        scrollToIndex(start - Math.ceil(height / safeHeight));
      }
    },
    [scrollToIndex, total, start, height, safeHeight],
  );

  if (total === 0) return null;

  const classes = ['ease-vlist-ad', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      ref={viewportRef}
      style={{ height: `${height}px` }}
      onScroll={onScroll}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="listbox"
      aria-label={label}
      // The true count, not the mounted count.
      aria-setsize={total}
      {...rest}
    >
      {/* Spacer gives the scrollbar its real proportions — without it the
          thumb would size to the mounted rows and jump on every update. */}
      <div
        className="ease-vlist-ad__sizer"
        style={{ height: `${total * safeHeight}px` }}
      >
        <div
          className="ease-vlist-ad__window"
          style={{ transform: `translateY(${offset}px)` }}
        >
          {windowItems.map((item, i) => {
            const index = start + i;

            return (
              <div
                className="ease-vlist-ad__row"
                key={getKey ? getKey(item, index) : index}
                style={{ height: `${safeHeight}px` }}
                role="option"
                aria-selected="false"
                // Real position within the full list, not the window.
                aria-setsize={total}
                aria-posinset={index + 1}
              >
                {renderItem ? renderItem(item, index) : String(item)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
