/**
 * EaseMotion CSS — Range Slider ARIA Valuetext Labels (enhancement)
 * ============================================================
 * Wraps a native <input type=range> so it exposes role=slider with
 * aria-valuemin/max/now/text, aria-orientation, and a human-readable
 * aria-valuetext built from a formatter (e.g. "40 dB"). Keeps the
 * native value, ARIA value, and the visible label in sync and updates
 * them on input/change. Arrow/Home/End come from the native control.
 *
 * API:
 *   const s = new RangeSlider(inputEl, { format, label });
 *   s.setValue(40); s.getValue(); s.destroy();
 * ============================================================ */

export class RangeSlider {
  constructor(input, options = {}) {
    if (!input || typeof input.addEventListener !== 'function') {
      throw new TypeError('RangeSlider requires an input element');
    }
    this.input = input;
    this.format = typeof options.format === 'function' ? options.format : (v) => String(v);
    this._label = options.label || '';

    this.input.setAttribute('role', 'slider');
    this.input.setAttribute('aria-valuemin', String(this.input.min || 0));
    this.input.setAttribute('aria-valuemax', String(this.input.max || 100));
    this.input.setAttribute('aria-orientation', options.vertical ? 'vertical' : 'horizontal');
    if (this._label) this.input.setAttribute('aria-label', this._label);

    this._onInput = this._onInput.bind(this);
    this.input.addEventListener('input', this._onInput);
    this._render();
  }

  _render() {
    const v = Number(this.input.value) || 0;
    this.input.setAttribute('aria-valuenow', String(v));
    this.input.setAttribute('aria-valuetext', this.format(v));
  }

  setValue(v) {
    const min = Number(this.input.min) || 0;
    const max = Number(this.input.max) || 100;
    const clamped = Math.max(min, Math.min(max, Number(v) || 0));
    this.input.value = String(clamped);
    this._render();
    return clamped;
  }

  getValue() {
    return Number(this.input.value) || 0;
  }

  getValueText() {
    return this.format(this.getValue());
  }

  setLabel(label) {
    this._label = label;
    if (label) this.input.setAttribute('aria-label', label);
    return this._label;
  }

  _onInput() {
    this._render();
  }

  destroy() {
    this.input.removeEventListener('input', this._onInput);
    this.input.removeAttribute('role');
    this.input.removeAttribute('aria-valuemin');
    this.input.removeAttribute('aria-valuemax');
    this.input.removeAttribute('aria-valuenow');
    this.input.removeAttribute('aria-valuetext');
    this.input.removeAttribute('aria-orientation');
  }
}

export default RangeSlider;
