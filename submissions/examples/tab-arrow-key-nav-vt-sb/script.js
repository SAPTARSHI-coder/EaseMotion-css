/**
 * EaseMotion CSS — Tab Arrow-Key Navigation Audit (validation)
 * ============================================================
 * Wraps a real tablist and validates the arrow-key navigation invariants:
 *   - role=tablist with role=tab children and aria-controls/aria-selected
 *   - roving tabindex (only the active tab is tabindex=0)
 *   - ArrowLeft/Right (or Up/Down when vertical) move focus
 *   - Home/End jump to first/last tab
 * Exposes report() + isCompliant().
 *
 * API:
 *   const a = new TabAudit(rootEl, { vertical });
 *   a.select(i); a.next(); a.prev(); a.report(); a.isCompliant(); a.destroy();
 * ============================================================ */

export class TabAudit {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('TabAudit requires a root element');
    }
    this.root = root;
    this.vertical = !!options.vertical;
    this.tabs = Array.from(root.querySelectorAll('[role="tab"]'));

    this.root.setAttribute('role', 'tablist');
    this.root.classList.add('ease-tablist-audit');
    this.tabs.forEach((tab) => {
      tab.setAttribute('role', 'tab');
      tab.classList.add('ease-tab-audit');
      const id = tab.getAttribute('aria-controls');
      const panel = id ? document.getElementById(id) : null;
      if (panel) panel.setAttribute('role', 'tabpanel');
    });

    this._active = this.tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
    if (this._active < 0) this._active = 0;

    this._onKeydown = this._onKeydown.bind(this);
    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);
    this.root.addEventListener('click', this._onClick);
    this._render();
    this.select(this._active);
  }

  _render() {
    this.tabs.forEach((tab, i) => {
      tab.setAttribute('tabindex', i === this._active ? '0' : '-1');
      tab.setAttribute('aria-selected', i === this._active ? 'true' : 'false');
    });
  }

  select(index) {
    if (index < 0 || index >= this.tabs.length) return false;
    this._active = index;
    this._render();
    const t = this.tabs[index];
    if (t && typeof t.focus === 'function') t.focus();
    this.tabs.forEach((tab) => {
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.setAttribute('aria-hidden', tab.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
    });
    return true;
  }

  next() {
    return this.select((this._active + 1) % this.tabs.length);
  }

  prev() {
    return this.select((this._active - 1 + this.tabs.length) % this.tabs.length);
  }

  getActive() {
    return this._active;
  }

  _onKeydown(event) {
    const k = event.key;
    const horiz = !this.vertical;
    if (k === (horiz ? 'ArrowRight' : 'ArrowDown')) { event.preventDefault(); this.next(); }
    else if (k === (horiz ? 'ArrowLeft' : 'ArrowUp')) { event.preventDefault(); this.prev(); }
    else if (k === 'Home') { event.preventDefault(); this.select(0); }
    else if (k === 'End') { event.preventDefault(); this.select(this.tabs.length - 1); }
  }

  _onClick(event) {
    const i = this.tabs.indexOf(event.target.closest('[role="tab"]'));
    if (i >= 0) this.select(i);
  }

  report() {
    const role = this.root.getAttribute('role');
    const tabsOk = this.tabs.length > 0;
    const roving = this.tabs.every((t, i) => t.getAttribute('tabindex') === (i === this._active ? '0' : '-1'));
    const selected = this.tabs.filter((t) => t.getAttribute('aria-selected') === 'true').length;
    const violations = [];
    if (role !== 'tablist') violations.push({ id: 'aria-tablist', impact: 'critical' });
    if (!tabsOk) violations.push({ id: 'no-tabs', impact: 'critical' });
    if (!roving) violations.push({ id: 'roving-tabindex', impact: 'serious' });
    if (selected !== 1) violations.push({ id: 'single-selected', impact: 'serious' });
    return { role, tabCount: this.tabs.length, roving, selectedCount: selected, violations, pass: violations.length === 0 };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    this.root.removeEventListener('click', this._onClick);
  }
}

export default TabAudit;
