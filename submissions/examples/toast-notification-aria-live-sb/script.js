/**
 * EaseMotion CSS — Toast Notification ARIA Live Region
 * ============================================================
 * Announces toast notifications via an aria-live region so screen-reader
 * users hear them without moving focus. Polite by default, assertive
 * when { politeness: 'assertive' }. Toasts auto-dismiss after a timeout.
 *
 * API:
 *   const t = new ToastRegion(rootEl);
 *   t.show('Saved!', { politeness: 'polite', timeout: 3000 });
 *   t.clear(); t.destroy();
 * ============================================================ */

export class ToastRegion {
  constructor(root, options = {}) {
    if (!root || typeof root.appendChild !== 'function') {
      throw new TypeError('ToastRegion requires a root element');
    }
    this.root = root;
    this.defaultPoliteness = options.politeness || 'polite';
    this.defaultTimeout = options.timeout || 4000;

    this.root.setAttribute('role', 'status');
    this.root.setAttribute('aria-live', this.defaultPoliteness);
    this.root.setAttribute('aria-atomic', 'true');
    this.root.classList.add('ease-toast-region');
    this.root.setAttribute('tabindex', '-1');
    this._idSeq = 0;
    this._timers = new Map();
  }

  show(message, options = {}) {
    if (typeof message !== 'string' || !message.trim()) {
      throw new TypeError('ToastRegion.show requires a non-empty message string');
    }
    const politeness = options.politeness || this.defaultPoliteness;
    const timeout = options.timeout ?? this.defaultTimeout;

    // Politeness can change per-toast by toggling aria-live before content.
    this.root.setAttribute('aria-live', politeness);

    const toast = document.createElement('div');
    toast.className = 'ease-toast';
    toast.id = 'ease-toast-' + (++this._idSeq);
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    this.root.appendChild(toast);

    if (timeout > 0) {
      const timer = setTimeout(() => this._remove(toast), timeout);
      this._timers.set(toast.id, timer);
    }
    return toast.id;
  }

  _remove(toast) {
    if (!toast || !toast.parentNode) return;
    if (this._timers.has(toast.id)) {
      clearTimeout(this._timers.get(toast.id));
      this._timers.delete(toast.id);
    }
    toast.parentNode.removeChild(toast);
  }

  dismiss(id) {
    const toast = id ? this.root.querySelector('#' + id.replace(/[^A-Za-z0-9_-]/g, '')) : null;
    if (toast) this._remove(toast);
  }

  clear() {
    Array.from(this.root.querySelectorAll('.ease-toast')).forEach((t) => this._remove(t));
  }

  count() {
    return this.root.querySelectorAll('.ease-toast').length;
  }

  destroy() {
    this._timers.forEach((t) => clearTimeout(t));
    this._timers.clear();
    this.clear();
  }
}

export default ToastRegion;
