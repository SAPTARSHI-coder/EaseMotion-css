/**
 * EaseMotion CSS — Masonry Column Calculation Resize Listener
 * ============================================================
 * Computes the number of CSS columns for `.ease-masonry` from the container
 * width and a minimum column width, and recalculates on window resize via a
 * debounced listener. Mirrors the responsive behaviour in components/masonry.css.
 *
 * API:
 *   const m = new MasonryColumns(el, { minColumnWidth, gap });
 *   m.computeColumns(); // returns the new column count
 *   m.destroy();        // detaches the resize listener
 * ============================================================
 */

export function calcColumns(containerWidth, minColumnWidth, gap = 0) {
  if (!Number.isFinite(containerWidth) || containerWidth <= 0) return 1;
  if (!Number.isFinite(minColumnWidth) || minColumnWidth <= 0) return 1;
  if (!Number.isFinite(gap) || gap < 0) gap = 0;
  let columns = 1;
  while ((columns + 1) * minColumnWidth + columns * gap <= containerWidth) {
    columns++;
  }
  return Math.max(1, Math.floor(columns));
}

export class MasonryColumns {
  constructor(element, options = {}) {
    if (!element || typeof element.clientWidth === 'undefined') {
      throw new TypeError('MasonryColumns requires an element with clientWidth');
    }
    this.element = element;
    this.minColumnWidth = Number.isFinite(options.minColumnWidth) && options.minColumnWidth > 0
      ? options.minColumnWidth
      : 320;
    this.gap = Number.isFinite(options.gap) && options.gap >= 0 ? options.gap : 16;
    this.debounceMs = Number.isFinite(options.debounceMs) && options.debounceMs >= 0
      ? options.debounceMs
      : 150;
    this._timeout = null;
    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
    this.computeColumns();
  }

  computeColumns() {
    const count = calcColumns(this.element.clientWidth, this.minColumnWidth, this.gap);
    this.element.style.setProperty('--ease-masonry-columns', String(count));
    this.element.setAttribute('data-masonry-columns', String(count));
    return count;
  }

  _onResize() {
    if (this._timeout) clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.computeColumns();
    }, this.debounceMs);
  }

  destroy() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    window.removeEventListener('resize', this._onResize);
  }
}

export default MasonryColumns;
