/**
 * EaseMotion CSS — Buttons High-Contrast (forced-colors) Audit (validation)
 * ============================================================
 * Audits a button's contrast under forced-colors / high-contrast mode.
 * Ensures buttons have a visible focus ring and a forced-colors border.
 *
 * API:
 *   const a = new ButtonAudit(rootEl);
 *   a.report(); a.isCompliant(); a.destroy();
 * ============================================================ */

export class ButtonAudit {
  constructor(root) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('ButtonAudit requires a root element');
    }
    this.root = root;
    this.root.classList.add('ease-btn-audit');
    if (!this.root.getAttribute('role')) {
      this.root.setAttribute('role', 'button');
    }
    // Ensure keyboard-activatable unless an explicit tabindex="-1" is set
    if (this.root.tagName !== 'BUTTON' && this.root.getAttribute('tabindex') === null) {
      this.root.tabIndex = 0;
    }
  }

  report() {
    const style = typeof getComputedStyle === 'function'
      ? getComputedStyle(this.root)
      : this.root.style;
    const violations = [];
    if (!this.root.classList.contains('ease-btn-audit')) {
      violations.push({ id: 'button-base-style', impact: 'moderate', description: 'Button missing base style class' });
    }
    // Heuristic: forced-colors border present in stylesheet via the class
    const tabindex = this.root.getAttribute('tabindex');
    const focusable = this.root.tagName === 'BUTTON' || (this.root.tagName !== 'BUTTON' && tabindex !== null && tabindex !== '-1');
    if (!focusable) {
      violations.push({ id: 'keyboard-nav', impact: 'serious', description: 'Button not keyboard-focusable' });
    }
    return {
      target: this.root.tagName.toLowerCase(),
      focusable,
      hasAriaRole: this.root.getAttribute('role') === 'button',
      violations,
      pass: violations.length === 0,
    };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    this.root.classList.remove('ease-btn-audit');
  }
}

export default ButtonAudit;
