/**
 * EaseMotion CSS — Tab Component Arrow Key Navigation
 * ============================================================
 * A tablist where Left/Right (or Up/Down) arrows move focus between
 * tabs, Home/End jump to the first/last tab, and the active tab gets
 * aria-selected=true + tabindex=0 (roving tabindex). Activating a tab
 * shows its associated tabpanel (aria-controls/aria-labelledby link).
 *
 * API:
 *   const t = new TabNav(rootEl);
 *   t.select(2); t.getActive(); t.destroy();
 * ============================================================
 */

export class TabNav {
  constructor(root) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('TabNav requires a root element');
    }
    this.root = root;
    this.tabs = Array.from(root.querySelectorAll('[role="tab"]'));
    if (!this.tabs.length) {
      throw new Error('TabNav requires at least one [role="tab"] element');
    }
    this.active = 0;

    this._onKeydown = this._onKeydown.bind(this);
    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);
    this.root.addEventListener('click', this._onClick);

    this.tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === this.active));
      tab.setAttribute('tabindex', i === this.active ? '0' : '-1');
    });
    this._showPanel(this.active);
  }

  _showPanel(index) {
    this.active = index;
    this.tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      tab.classList.toggle('is-active', selected);
      const panelId = tab.getAttribute('aria-controls');
      if (panelId) {
        const panel = document.getElementById(panelId);
        if (panel) panel.setAttribute('aria-hidden', String(!selected));
      }
    });
  }

  select(index) {
    if (index < 0 || index >= this.tabs.length) return false;
    this._showPanel(index);
    if (typeof this.tabs[index].focus === 'function') this.tabs[index].focus();
    return true;
  }

  getActive() {
    return this.active;
  }

  _focus(index) {
    const i = (index + this.tabs.length) % this.tabs.length;
    this._showPanel(i);
    if (typeof this.tabs[i].focus === 'function') this.tabs[i].focus();
  }

  _onKeydown(event) {
    const horizontal = this.root.getAttribute('aria-orientation') !== 'vertical';
    const next = horizontal ? 'ArrowRight' : 'ArrowDown';
    const prev = horizontal ? 'ArrowLeft' : 'ArrowUp';
    switch (event.key) {
      case next:
        event.preventDefault();
        this._focus(this.active + 1);
        break;
      case prev:
        event.preventDefault();
        this._focus(this.active - 1);
        break;
      case 'Home':
        event.preventDefault();
        this._focus(0);
        break;
      case 'End':
        event.preventDefault();
        this._focus(this.tabs.length - 1);
        break;
      default:
        break;
    }
  }

  _onClick(event) {
    const tab = event.target.closest('[role="tab"]');
    if (!tab) return;
    const index = this.tabs.indexOf(tab);
    if (index >= 0) this.select(index);
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    this.root.removeEventListener('click', this._onClick);
  }
}

export default TabNav;
