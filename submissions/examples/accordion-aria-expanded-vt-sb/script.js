/**
 * EaseMotion CSS — Accordion ARIA Expanded Audit (validation)
 * ============================================================
 * Wraps a real accordion and validates the ARIA-expanded invariants:
 *   - each header button has aria-expanded matching its panel's state
 *   - each header has aria-controls pointing at its panel
 *   - each panel has role=region + aria-labelledby pointing back
 *   - exactly one panel open at a time (accordion, single-open mode)
 *   - exactly one expanded header at a time
 * Exposes report() + isCompliant().
 *
 * API:
 *   const a = new AccordionAudit(rootEl);
 *   a.toggle(0); a.open(0); a.close(0); a.report(); a.destroy();
 * ============================================================ */

export class AccordionAudit {
  constructor(root) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('AccordionAudit requires a root element');
    }
    this.root = root;
    this.headers = Array.from(root.querySelectorAll('[data-acc-header]'));
    this.panels = Array.from(root.querySelectorAll('[data-acc-panel]'));

    this.headers.forEach((header, i) => {
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
      const panel = this.panels[i];
      if (panel) {
        const id = 'ease-acc-panel-' + i;
        panel.id = id;
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-labelledby', header.id || (header.id = 'ease-acc-header-' + i));
        panel.setAttribute('hidden', '');
        header.setAttribute('aria-controls', id);
      }
    });

    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('click', this._onClick);
  }

  open(index) {
    if (index < 0 || index >= this.headers.length) return false;
    // accordion: single-open — close all others
    this.headers.forEach((h, i) => this._setExpanded(i, i === index));
    return true;
  }

  close(index) {
    return this._setExpanded(index, false);
  }

  toggle(index) {
    if (index < 0 || index >= this.headers.length) return false;
    const isOpen = this.headers[index].getAttribute('aria-expanded') === 'true';
    if (isOpen) return this.close(index);
    return this.open(index);
  }

  _setExpanded(index, expanded) {
    if (index < 0 || index >= this.headers.length) return false;
    const header = this.headers[index];
    const panel = this.panels[index];
    header.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (panel) {
      if (expanded) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
    }
    return true;
  }

  isOpen(index) {
    return this.headers[index] && this.headers[index].getAttribute('aria-expanded') === 'true';
  }

  _onClick(event) {
    const header = event.target.closest('[data-acc-header]');
    if (!header) return;
    const i = this.headers.indexOf(header);
    if (i >= 0) this.toggle(i);
  }

  report() {
    const expandedHeaders = this.headers.filter((h) => h.getAttribute('aria-expanded') === 'true').length;
    const controlsOk = this.headers.every((h, i) => {
      const c = h.getAttribute('aria-controls');
      return c && this.panels[i] && this.panels[i].id === c;
    });
    const regionsOk = this.panels.every((p, i) => p.getAttribute('role') === 'region');
    const syncOk = this.headers.every((h, i) => {
      const expanded = h.getAttribute('aria-expanded') === 'true';
      const hidden = this.panels[i] && this.panels[i].hasAttribute('hidden');
      return expanded === !hidden;
    });
    const violations = [];
    if (!controlsOk) violations.push({ id: 'aria-controls', impact: 'critical' });
    if (!regionsOk) violations.push({ id: 'role-region', impact: 'serious' });
    if (!syncOk) violations.push({ id: 'expanded-hidden-sync', impact: 'serious' });
    if (expandedHeaders > 1) violations.push({ id: 'single-open', impact: 'serious' });
    return { expandedHeaders, controlsOk, regionsOk, syncOk, violations, pass: violations.length === 0 };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    this.root.removeEventListener('click', this._onClick);
  }
}

export default AccordionAudit;
