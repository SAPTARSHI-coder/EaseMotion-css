/**
 * EaseMotion CSS — Progress Bar ARIA Valuenow Compliance
 * ============================================================
 * Keeps a progressbar's `role`, `aria-valuemin`, `aria-valuemax`, and
 * `aria-valuenow` in sync with the visual width. Clamps the value into
 * [min, max] and computes the percentage width.
 *
 * API:
 *   const p = new ProgressAria(barEl, { min, max, value });
 *   p.setValue(50);   // clamps + updates aria-valuenow + width
 *   p.getValue();
 *   p.destroy();
 * ============================================================
 */

export function clamp(value, min, max) {
  if (!Number.isFinite(value)) value = min;
  if (!Number.isFinite(min)) min = 0;
  if (!Number.isFinite(max)) max = 100;
  if (min > max) [min, max] = [max, min];
  return Math.min(max, Math.max(min, value));
}

export class ProgressAria {
  constructor(element, options = {}) {
    if (!element || typeof element.setAttribute !== 'function') {
      throw new TypeError('ProgressAria requires an element');
    }
    this.element = element;
    this.min = Number.isFinite(options.min) ? options.min : 0;
    this.max = Number.isFinite(options.max) ? options.max : 100;
    this.value = options.value != null && Number.isFinite(options.value) ? options.value : this.min;

    this.element.setAttribute('role', 'progressbar');
    this.element.setAttribute('aria-valuemin', String(this.min));
    this.element.setAttribute('aria-valuemax', String(this.max));
    this._render();
  }

  setValue(value) {
    if (!Number.isFinite(value)) return false;
    this.value = clamp(value, this.min, this.max);
    this._render();
    return true;
  }

  getValue() {
    return this.value;
  }

  getPercent() {
    const range = this.max - this.min || 1;
    return ((this.value - this.min) / range) * 100;
  }

  _render() {
    this.element.setAttribute('aria-valuenow', String(Math.round(this.value)));
    const bar = this.element.querySelector('[data-progress-bar]') || this.element;
    bar.style.width = this.getPercent() + '%';
  }

  destroy() {
    this.element.removeAttribute('role');
    this.element.removeAttribute('aria-valuemin');
    this.element.removeAttribute('aria-valuemax');
    this.element.removeAttribute('aria-valuenow');
  }
}

export default ProgressAria;
