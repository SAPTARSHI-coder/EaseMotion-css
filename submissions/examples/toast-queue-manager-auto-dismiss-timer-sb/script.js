/**
 * EaseMotion CSS — Toast Queue Manager with Auto-Dismiss Timer
 * ============================================================
 * A self-contained submission demonstrating a toast queue manager that
 * schedules a per-toast auto-dismiss timer, caps the queue, dedups by id,
 * and cancels the timer when a toast is dismissed early.
 *
 * Uses the framework's `ease-toast-*` classes from components/toast.css.
 *
 * API (the manager is framework-agnostic — it takes a container element):
 *   const toasts = new ToastQueueManager(regionEl, { maxQueue, defaultDuration });
 *   const id = toasts.push({ message, title?, type?, duration?, id? });
 *   toasts.dismiss(id);
 *   toasts.clear();
 *   toasts.size();
 *
 * Exported as an ES module so the accompanying Vitest spec can import it.
 * ============================================================
 */

export class ToastQueueManager {
  constructor(region, options = {}) {
    if (!region || typeof region.appendChild !== 'function') {
      throw new TypeError('ToastQueueManager requires a container element');
    }
    this.region = region;
    this.maxQueue = Number.isFinite(options.maxQueue) && options.maxQueue > 0 ? options.maxQueue : 5;
    this.defaultDuration =
      Number.isFinite(options.defaultDuration) && options.defaultDuration >= 0
        ? options.defaultDuration
        : 4000;
    this._queue = [];
    this._timers = {};
  }

  static VALID_TYPES = {
    success: 'ease-toast-success',
    danger: 'ease-toast-danger',
    warning: 'ease-toast-warning',
    info: 'ease-toast-info',
  };

  _typeClass(type) {
    return ToastQueueManager.VALID_TYPES[type] || '';
  }

  push(options) {
    if (!options || typeof options !== 'object') return null;
    const { message } = options;
    if (typeof message !== 'string' || message.trim() === '') return null;

    let duration = options.duration;
    if (duration === undefined) {
      duration = this.defaultDuration;
    } else if (!Number.isFinite(duration) || duration < 0) {
      return null;
    }

    const id =
      options.id != null
        ? String(options.id)
        : 'ease-toast-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);

    if (this._queue.indexOf(id) !== -1) return id;

    while (this._queue.length >= this.maxQueue) {
      this.dismiss(this._queue[0]);
    }

    const el = document.createElement('div');
    el.className = 'ease-toast ease-toast-enter ' + this._typeClass(options.type);
    el.setAttribute('data-toast-id', id);
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');

    const body = document.createElement('div');
    body.className = 'ease-toast-body';
    if (options.title) {
      const strong = document.createElement('strong');
      strong.textContent = String(options.title);
      body.appendChild(strong);
    }
    const p = document.createElement('p');
    p.textContent = message;
    body.appendChild(p);
    el.appendChild(body);

    el.addEventListener('click', () => this.dismiss(id));
    this.region.appendChild(el);
    this._queue.push(id);

    if (duration > 0) {
      this._timers[id] = setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }

  dismiss(id) {
    if (id == null) return false;
    id = String(id);
    const idx = this._queue.indexOf(id);
    if (idx === -1) return false;

    this._queue.splice(idx, 1);

    if (this._timers[id]) {
      clearTimeout(this._timers[id]);
      delete this._timers[id];
    }

    const el = this.region.querySelector('[data-toast-id="' + CSS.escape(id) + '"]');
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
    return true;
  }

  clear() {
    const ids = this._queue.slice();
    for (const id of ids) this.dismiss(id);
  }

  size() {
    return this._queue.length;
  }
}

export default ToastQueueManager;
