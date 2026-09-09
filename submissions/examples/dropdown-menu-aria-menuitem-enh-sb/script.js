/**
 * EaseMotion CSS — Dropdown Menu ARIA Menuitem Focus (enhancement)
 * ============================================================
 * A disclosure menu using role=menu / role=menuitem with full keyboard
 * support: Enter/Space toggle, ArrowUp/Down move between items, Escape
 * closes, roving tabindex (only the active item is focusable).
 *
 * API:
 *   const m = new DropdownMenu(rootEl, { trigger });
 *   m.open(); m.close(); m.toggle(); m.isOpen(); m.destroy();
 * ============================================================ */

export class DropdownMenu {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('DropdownMenu requires a root element');
    }
    this.root = root;
    this.trigger = options.trigger || null;
    this._open = false;
    this.items = Array.from(root.querySelectorAll('[data-menu-item]'));

    this.root.setAttribute('role', 'menu');
    this.root.setAttribute('aria-hidden', 'true');
    this.items.forEach((item, i) => {
      item.setAttribute('role', 'menuitem');
      item.setAttribute('tabindex', i === 0 ? '0' : '-1');
    });

    this._active = 0;
    this._onKeydown = this._onKeydown.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.addEventListener('click', this._onTrigger);
  }

  open() {
    if (this._open) return false;
    this._open = true;
    this.root.setAttribute('aria-hidden', 'false');
    if (this.trigger) this.trigger.setAttribute('aria-expanded', 'true');
    const first = this.items[0];
    if (first && typeof first.focus === 'function') first.focus();
    return true;
  }

  close() {
    if (!this._open) return false;
    this._open = false;
    this.root.setAttribute('aria-hidden', 'true');
    if (this.trigger) {
      this.trigger.setAttribute('aria-expanded', 'false');
      if (typeof this.trigger.focus === 'function') this.trigger.focus();
    }
    return true;
  }

  toggle() {
    return this._open ? this.close() : this.open();
  }

  isOpen() {
    return this._open;
  }

  _move(delta) {
    if (!this.items.length) return;
    this._active = (this._active + delta + this.items.length) % this.items.length;
    this._applyRoving();
  }

  _applyRoving() {
    this.items.forEach((item, i) => item.setAttribute('tabindex', i === this._active ? '0' : '-1'));
    const t = this.items[this._active];
    if (t && typeof t.focus === 'function') t.focus();
  }

  _onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown': event.preventDefault(); this._move(1); break;
      case 'ArrowUp': event.preventDefault(); this._move(-1); break;
      case 'Home': event.preventDefault(); this._active = 0; this._applyRoving(); break;
      case 'End': event.preventDefault(); this._active = this.items.length - 1; this._applyRoving(); break;
      case 'Escape': event.preventDefault(); this.close(); break;
    }
  }

  _onTrigger() {
    this.toggle();
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.removeEventListener('click', this._onTrigger);
  }
}

export default DropdownMenu;
