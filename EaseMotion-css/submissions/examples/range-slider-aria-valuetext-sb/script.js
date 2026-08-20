/**
 * EaseMotion CSS — Range Slider ARIA Valuetext
 * ============================================================
 * Keeps a range input's aria-valuenow and aria-valuetext in sync with its
 * value. aria-valuetext is a human-readable label (e.g. "3 of 5") computed
 * from a formatter, so screen readers announce meaning, not just a number.
 *
 * API:
 *   const r = new RangeAria(inputEl, { formatter });
 *   r.setValue(3); r.getValue(); r.destroy();
 * ============================================================
 */

export class RangeAria {
  constructor(input, options = {}) {
    if (!input || typeof input.addEventListener !== 'function') {
      throw new TypeError('RangeAria requires an input element');
    }
    this.input = input;
    this.formatter =
      typeof options.formatter === 'function'
        ? options.formatter
        : (value, min, max) => value + ' of ' + max;
    this.min = input.hasAttribute('min') && Number.isFinite(Number(input.min)) ? Number(input.min) : 0;
    this.max = input.hasAttribute('max') && Number.isFinite(Number(input.max)) ? Number(input.max) : 100;
    this.input.setAttribute('role', 'slider');
    this._render();
    this._onInput = this._onInput.bind(this);
    this.input.addEventListener('input', this._onInput);
  }

  _render() {
    const value = this._rawValue();
    this.input.setAttribute('aria-valuenow', String(value));
    this.input.setAttribute('aria-valuemin', String(this.min));
    this.input.setAttribute('aria-valuemax', String(this.max));
    let text;
    try {
      text = String(this.formatter(value, this.min, this.max));
    } catch {
      text = String(value);
    }
    this.input.setAttribute('aria-valuetext', text);
  }

  _rawValue() {
    const v = Number(this.input.value);
    return Number.isFinite(v) ? v : this.min;
  }

  _onInput() {
    this._render();
  }

  setValue(value) {
    if (!Number.isFinite(value)) return false;
    const clamped = Math.min(this.max, Math.max(this.min, value));
    this.input.value = clamped;
    this._render();
    return true;
  }

  getValue() {
    return this._rawValue();
  }

  getValuetext() {
    return this.input.getAttribute('aria-valuetext');
  }

  destroy() {
    this.input.removeEventListener('input', this._onInput);
  }
}

export default RangeAria;
