/**
 * EaseMotion CSS — Drawer Component Escape Key Listener
 * ============================================================
 * A slide-in drawer that closes on Escape and returns focus to the
 * trigger. The drawer exposes role="dialog" + aria-modal="true" while
 * open.
 *
 * API:
 *   const d = new Drawer(rootEl, { trigger });
 *   d.open(); d.close(); d.isOpen(); d.onChange(fn); d.destroy();
 * ============================================================
 */

export class Drawer {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Drawer requires a root element');
    }
    this.root = root;
    this.trigger = options.trigger || null;
    this._open = false;
    this._listeners = [];

    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('aria-hidden', 'true');
    this.root.classList.add('ease-drawer');
    this.root.setAttribute('hidden', '');

    this._onKeydown = this._onKeydown.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    document.addEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.addEventListener('click', this._onTrigger);
  }

  open() {
    if (this._open) return false;
    this._open = true;
    this.root.removeAttribute('hidden');
    this.root.classList.add('is-open');
    this.root.setAttribute('aria-hidden', 'false');
    this._emit();
    return true;
  }

  close() {
    if (!this._open) return false;
    this._open = false;
    this.root.setAttribute('hidden', '');
    this.root.classList.remove('is-open');
    this.root.setAttribute('aria-hidden', 'true');
    if (this.trigger && typeof this.trigger.focus === 'function') {
      this.trigger.focus();
    }
    this._emit();
    return true;
  }

  toggle() {
    return this._open ? this.close() : this.open();
  }

  isOpen() {
    return this._open;
  }

  onChange(fn) {
    if (typeof fn === 'function') this._listeners.push(fn);
  }

  _emit() {
    this._listeners.forEach((fn) => {
      try { fn(this._open); } catch { /* listener error */ }
    });
  }

  _onKeydown(event) {
    if (this._open && event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  _onTrigger() {
    this.toggle();
  }

  destroy() {
    document.removeEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.removeEventListener('click', this._onTrigger);
    this._listeners = [];
  }
}

export default Drawer;
