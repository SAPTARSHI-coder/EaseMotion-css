/**
 * EaseMotion CSS — Switch Toggle ARIA Checked State
 * ============================================================
 * A switch widget with role="switch" and aria-checked, toggled by click
 * and Space/Enter. Emits onChange(fn) callbacks and supports an initial
 * checked state.
 *
 * API:
 *   const s = new SwitchToggle(rootEl, { checked });
 *   s.setChecked(true); s.isChecked(); s.toggle();
 *   s.onChange(fn); s.destroy();
 * ============================================================
 */

export class SwitchToggle {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('SwitchToggle requires a root element');
    }
    this.root = root;
    this._checked = !!options.checked;
    this._listeners = [];

    this.root.setAttribute('role', 'switch');
    this.root.setAttribute('tabindex', '0');
    this._render();
    this._onClick = this._onClick.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this.root.addEventListener('click', this._onClick);
    this.root.addEventListener('keydown', this._onKeydown);
  }

  _render() {
    this.root.setAttribute('aria-checked', String(this._checked));
    this.root.classList.toggle('is-on', this._checked);
  }

  _emit() {
    this._listeners.forEach((fn) => {
      try { fn(this._checked); } catch { /* listener error */ }
    });
  }

  setChecked(checked) {
    const next = !!checked;
    if (next === this._checked) return false;
    this._checked = next;
    this._render();
    this._emit();
    return true;
  }

  toggle() {
    return this.setChecked(!this._checked);
  }

  isChecked() {
    return this._checked;
  }

  onChange(fn) {
    if (typeof fn === 'function') this._listeners.push(fn);
  }

  _onClick() {
    this.toggle();
  }

  _onKeydown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle();
    }
  }

  destroy() {
    this.root.removeEventListener('click', this._onClick);
    this.root.removeEventListener('keydown', this._onKeydown);
    this._listeners = [];
  }
}

export default SwitchToggle;
