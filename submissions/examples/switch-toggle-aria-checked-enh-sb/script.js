/**
 * EaseMotion CSS — Switch Toggle ARIA Checked State (enhancement)
 * ============================================================
 * A switch built on a <button> with role=switch + aria-checked. Click
 * and Space/Enter toggle the state; the visible knob follows. Exposes
 * getState()/setState() and dispatches a 'change' event.
 *
 * API:
 *   const s = new Switch(rootEl, { checked, label });
 *   s.toggle(); s.getState(); s.setState(true); s.destroy();
 * ============================================================ */

export class Switch {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Switch requires a root element');
    }
    this.root = root;
    this._checked = !!options.checked;

    this.root.setAttribute('role', 'switch');
    this.root.setAttribute('tabindex', '0');
    this.root.setAttribute('aria-checked', String(this._checked));
    if (options.label) this.root.setAttribute('aria-label', options.label);
    this.root.classList.add('ease-switch');

    this._knob = document.createElement('span');
    this._knob.className = 'ease-switch__knob';
    this.root.appendChild(this._knob);
    this.root.classList.toggle('is-on', this._checked);

    this._onKeydown = this._onKeydown.bind(this);
    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);
    this.root.addEventListener('click', this._onClick);
  }

  toggle() {
    return this.setState(!this._checked);
  }

  setState(value) {
    this._checked = !!value;
    this.root.setAttribute('aria-checked', String(this._checked));
    this.root.classList.toggle('is-on', this._checked);
    this.root.dispatchEvent(new window.CustomEvent('change', { detail: { checked: this._checked } }));
    return this._checked;
  }

  getState() {
    return this._checked;
  }

  _onKeydown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle();
    }
  }

  _onClick() {
    this.toggle();
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    this.root.removeEventListener('click', this._onClick);
    this.root.removeAttribute('role');
    this.root.removeAttribute('tabindex');
    this.root.removeAttribute('aria-checked');
    if (this._knob.parentNode) this._knob.parentNode.removeChild(this._knob);
  }
}

export default Switch;
