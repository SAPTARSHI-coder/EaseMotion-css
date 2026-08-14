/**
 * EaseMotion CSS — Modal Focus Trap Audit (validation)
 * ============================================================
 * Wraps a real modal dialog and validates the focus-trap invariants:
 *   - root has role=dialog + aria-modal=true
 *   - while open, Tab cycles within focusables (last→first, first→last)
 *   - Escape closes
 *   - focus moves into the dialog on open and back to the trigger on close
 * Exposes report() + isCompliant().
 *
 * API:
 *   const a = new ModalAudit(rootEl, { trigger });
 *   a.open(); a.close(); a.report(); a.isCompliant(); a.destroy();
 * ============================================================ */

export class ModalAudit {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('ModalAudit requires a root element');
    }
    this.root = root;
    this.trigger = options.trigger || null;
    this._open = false;
    this._savedFocus = null;

    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('hidden', '');
    this.root.setAttribute('aria-hidden', 'true');
    this.root.classList.add('ease-modal-audit');

    this._onKeydown = this._onKeydown.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    document.addEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.addEventListener('click', this._onTrigger);
  }

  _focusables() {
    return Array.from(
      this.root.querySelectorAll(
        'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  open() {
    if (this._open) return false;
    this._open = true;
    this._savedFocus = document.activeElement;
    this.root.removeAttribute('hidden');
    this.root.setAttribute('aria-hidden', 'false');
    const f = this._focusables();
    if (f.length) f[0].focus();
    return true;
  }

  close() {
    if (!this._open) return false;
    this._open = false;
    this.root.setAttribute('hidden', '');
    this.root.setAttribute('aria-hidden', 'true');
    if (this._savedFocus) this._savedFocus.focus();
    return true;
  }

  isOpen() {
    return this._open;
  }

  _onKeydown(event) {
    if (!this._open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key === 'Tab') {
      const f = this._focusables();
      if (!f.length) { event.preventDefault(); return; }
      const first = f[0];
      const last = f[f.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === first) { event.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
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
    if (this._open && ariaHidden === 'true') violations.push({ id: 'aria-hidden-open', impact: 'serious' });
    if (this._open && this._focusables().length === 0) violations.push({ id: 'no-focusables', impact: 'serious' });
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

export default ModalAudit;
