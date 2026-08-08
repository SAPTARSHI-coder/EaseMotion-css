/**
 * EaseMotion CSS — StickyTable
 * ============================================================
 * Data table with a sticky header and optionally pinned columns.
 *
 * The layering is the hard part, and it is where most implementations
 * break. Three overlapping sticky regions exist:
 *
 *   the header row      (sticky top)
 *   the pinned columns  (sticky left)
 *   the corner cells    (both at once)
 *
 * A single z-index cannot resolve this. If the header wins, pinned cells
 * scroll underneath it correctly but the corner cell disappears behind
 * the header as soon as you scroll right. If the pinned column wins, the
 * corner survives but body rows slide over the header. The corner needs a
 * HIGHER z-index than either, which is only obvious once you have seen it
 * fail.
 *
 * `border-collapse: collapse` is also incompatible with sticky cells —
 * collapsed borders belong to the table, not the cell, so they scroll
 * away and leave sticky headers with no bottom edge. `separate` plus
 * box-shadow borders is the fix.
 * ============================================================
 */

import { useMemo } from 'react';

/**
 * @param {object} props
 * @param {Array<{key: string, label: string, align?: 'start'|'end', width?: string}>} props.columns
 * @param {Array<object>} props.rows
 * @param {number}  [props.pinnedColumns=0]  Leading columns to pin.
 * @param {(row: object, index: number) => string|number} [props.getKey]
 * @param {string}  [props.caption]
 * @param {number}  [props.maxHeight=420]
 * @param {string}  [props.className]
 */
export default function StickyTable({
  columns = [],
  rows = [],
  pinnedColumns = 0,
  getKey,
  caption,
  maxHeight = 420,
  className = '',
  ...rest
}) {
  const pinned = Number.isFinite(pinnedColumns)
    ? Math.max(0, Math.min(Math.floor(pinnedColumns), columns.length))
    : 0;

  // Cumulative left offsets for pinned columns. Each pinned column must
  // sit at the sum of the widths before it, or they stack on top of
  // each other at left: 0.
  const offsets = useMemo(() => {
    const out = [];
    let running = 0;

    for (let i = 0; i < pinned; i += 1) {
      out.push(running);
      // Falls back to a sane default when no width is given — an
      // unmeasurable column cannot be offset correctly, so a fixed
      // width is required for pinning to work.
      const width = parseFloat(columns[i]?.width ?? '160');
      running += Number.isFinite(width) ? width : 160;
    }

    return out;
  }, [columns, pinned]);

  if (columns.length === 0 || rows.length === 0) return null;

  const classes = ['ease-stable-ad', className].filter(Boolean).join(' ');

  const cellClass = (index, isHeader) => {
    const parts = ['ease-stable-ad__cell'];

    if (isHeader) parts.push('ease-stable-ad__cell--head');
    if (index < pinned) parts.push('ease-stable-ad__cell--pinned');
    // The corner needs its own class: it is both sticky-top and
    // sticky-left, and needs to outrank both.
    if (isHeader && index < pinned) parts.push('ease-stable-ad__cell--corner');
    if (index === pinned - 1) parts.push('ease-stable-ad__cell--pinned-last');

    return parts.join(' ');
  };

  const cellStyle = (index, column) => {
    const style = {};

    if (column?.width) style.width = column.width;
    if (index < pinned) style.left = `${offsets[index]}px`;
    if (column?.align === 'end') style.textAlign = 'right';

    return style;
  };

  return (
    <div
      className={classes}
      style={{ maxHeight: `${maxHeight}px` }}
      // Focusable so keyboard users can scroll the region without a
      // pointer — a scrollable div with no tabindex is unreachable.
      tabIndex={0}
      role="region"
      aria-label={caption ?? 'Data table'}
      {...rest}
    >
      <table className="ease-stable-ad__table">
        {caption && <caption className="ease-stable-ad__caption">{caption}</caption>}

        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                className={cellClass(index, true)}
                key={column.key}
                style={cellStyle(index, column)}
                scope="col"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={getKey ? getKey(row, rowIndex) : rowIndex}>
              {columns.map((column, index) =>
                index < pinned ? (
                  // Pinned leading cells are row headers, not data —
                  // this is what lets a screen reader announce "Revenue,
                  // Northwind" instead of a bare number.
                  <th
                    className={cellClass(index, false)}
                    key={column.key}
                    style={cellStyle(index, column)}
                    scope="row"
                  >
                    {row[column.key]}
                  </th>
                ) : (
                  <td
                    className={cellClass(index, false)}
                    key={column.key}
                    style={cellStyle(index, column)}
                  >
                    {row[column.key]}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
