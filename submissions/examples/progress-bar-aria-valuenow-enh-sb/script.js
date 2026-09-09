/**
 * EaseMotion CSS — Progress Bar ARIA Valuenow Compliance (enhancement)
 * ============================================================
 * A determinate progress bar exposing role=progressbar + aria-valuenow
 * (current value), aria-valuemin (0), aria-valuemax (100), and
 * aria-valuetext (human-readable). Keeps the value, label, and text
 * node in sync.
 *
 * API:
 *   const p = new ProgressBar(rootEl, { label });
 *   p.setValue(40); p.getValue(); p.getLabel(); p.destroy();
 * ============================================================ */

export class ProgressBar {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('ProgressBar requires a root element');
    }
    this.root = root;
    this._value = 0;
    this._label = options.label || '';

    this.root.setAttribute('role', 'progressbar');
    this.root.setAttribute('aria-valuemin', '0');
    this.root.setAttribute('aria-valuemax', '100');
    this.root.setAttribute('aria-valuenow', '0');
    this.root.classList.add('ease-progress');

    if (this._label) {
      const labelId = this.root.id || ('ease-progress-' + Math.random().toString(36).slice(2, 8));
      this.root.id = labelId;
      this.root.setAttribute('aria-labelledby', labelId);
    }

    this._bar = document.createElement('div');
    this._bar.className = 'ease-progress__bar';
    this._bar.style.width = '0%';
    this.root.appendChild(this._bar);
  }

  setValue(value) {
    const v = Math.max(0, Math.min(100, Number(value) || 0));
    this._value = v;
    this.root.setAttribute('aria-valuenow', String(v));
    this.root.setAttribute('aria-valuetext', v + '%');
    this._bar.style.width = v + '%';
    return v;
  }

  getValue() {
    return this._value;
  }

  getLabel() {
    return this._label;
  }

  setLabel(label) {
    this._label = label;
    if (label) this.root.setAttribute('aria-label', label);
    return this._label;
  }

  destroy() {
    if (this._bar.parentNode) this._bar.parentNode.removeChild(this._bar);
    this.root.removeAttribute('role');
    this.root.removeAttribute('aria-valuemin');
    this.root.removeAttribute('aria-valuemax');
    this.root.removeAttribute('aria-valuenow');
    this.root.removeAttribute('aria-valuetext');
  }
}

export default ProgressBar;
