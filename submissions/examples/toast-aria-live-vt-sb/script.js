/**
 * EaseMotion CSS — Toast ARIA Live Audit (validation)
 * ============================================================
 * Wraps a real toast container and validates the aria-live invariants:
 *   - container has role=status (or alert) + aria-live + aria-atomic
 *   - toasts are appended to the live region (so AT announces them)
 *   - announcement is queued (no announcement when live=off)
 * Exposes report() + isCompliant() + announce(text, { type }).
 *
 * API:
 *   const a = new ToastAudit(rootEl, { live });
 *   a.announce('Saved'); a.report(); a.destroy();
 * ============================================================ */

export class ToastAudit {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('ToastAudit requires a root element');
    }
    this.root = root;
    this._live = options.live || 'polite'; // 'polite' | 'assertive' | 'off'

    this.root.setAttribute('role', 'status');
    this.root.setAttribute('aria-live', this._live);
    this.root.setAttribute('aria-atomic', 'true');
    this.root.classList.add('ease-toast-audit');
    this._announced = [];
  }

  announce(text, options = {}) {
    const type = options.type || 'info';
    const el = document.createElement('div');
    el.className = 'ease-toast-audit__item ease-toast-audit__item--' + type;
    el.textContent = String(text);
    this.root.appendChild(el);
    this._announced.push({ text: String(text), type });
    return this._announced[this._announced.length - 1];
  }

  clear() {
    this.root.innerHTML = '';
    this._announced = [];
  }

  getLive() {
    return this._live;
  }

  getAnnouncements() {
    return this._announced.slice();
  }

  report() {
    const role = this.root.getAttribute('role');
    const live = this.root.getAttribute('aria-live');
    const atomic = this.root.getAttribute('aria-atomic');
    const violations = [];
    if (role !== 'status' && role !== 'alert') violations.push({ id: 'aria-role', impact: 'critical' });
    if (live !== 'polite' && live !== 'assertive') violations.push({ id: 'aria-live', impact: 'critical' });
    if (atomic !== 'true') violations.push({ id: 'aria-atomic', impact: 'serious' });
    if (live === 'off' && this._announced.length > 0) violations.push({ id: 'live-off-announced', impact: 'serious' });
    return { role, live, atomic, count: this._announced.length, violations, pass: violations.length === 0 };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    this.clear();
  }
}

export default ToastAudit;
