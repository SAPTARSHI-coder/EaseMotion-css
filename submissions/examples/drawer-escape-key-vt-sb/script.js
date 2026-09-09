/**
 * EaseMotion CSS — Drawer Escape Key Audit (validation)
 * ============================================================
 * Wraps a real slide-in drawer and validates the escape-key invariants:
 *   - role=dialog + aria-modal=true while open
 *   - Escape closes the drawer
 *   - focus returns to the trigger on close
 * Exposes report() + isCompliant().
 *
 * API:
 *   const a = new DrawerAudit(rootEl, { trigger });
 *   a.open(); a.close(); a.toggle(); a.isOpen(); a.report(); a.destroy();
 * ============================================================ */

export class DrawerAudit {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('DrawerAudit requires a root element');
    }
    this.root = root;
    this.trigger = options.trigger || null;
    this._open = false;

    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('aria-hidden', 'true');
    this.root.setAttribute('hidden', '');
    this.root.classList.add('ease-drawer-audit');

    this._onKeydown = this._onKeydown.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    document.addEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.addEventListener('click', this._onTrigger);
  }

  open() {
    if (this._open) return false;
    this._open = true;
    this.root.removeAttribute('hidden');
    this.root.setAttribute('aria-hidden', 'false');
    const focusable = this.root.querySelector('[autofocus],button,input,a,[tabindex]');
    if (focusable && typeof focusable.focus === 'function') focusable.focus();
    return true;
  }

  close() {
    if (!this._open) return false;
    this._open = false;
    this.root.setAttribute('hidden', '');
    this.root.setAttribute('aria-hidden', 'true');
    if (this.trigger && typeof this.trigger.focus === 'function') this.trigger.focus();
    return true;
  }

  toggle() {
    return this._open ? this.close() : this.open();
  }

  isOpen() {
    return this._open;
  }

  _onKeydown(event) {
    if (this._open && event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  _onTrigger() {
    this.open();
  }

  report() {
    const role = this.root.getAttribute('role');
    const ariaModal = this.root.getAttribute('aria-modal');
    const ariaHidden = this.root.getAttribute('aria-hidden');
    const violations = [];
    if (role !== 'dialog') violations.push({ id: 'aria-role', impact: 'critical' });
    if (ariaModal !== 'true') violations.push({ id: 'aria-modal', impact: 'critical' });
    if (this._open && ariaHidden !== 'false') violations.push({ id: 'aria-hidden-open', impact: 'serious' });
    if (!this._open && ariaHidden !== 'true') violations.push({ id: 'aria-hidden-closed', impact: 'serious' });
    return { role, ariaModal, ariaHidden, open: this._open, violations, pass: violations.length === 0 };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    document.removeEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.removeEventListener('click', this._onTrigger);
  }
}

export default DrawerAudit;
