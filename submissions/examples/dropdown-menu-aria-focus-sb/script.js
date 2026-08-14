/**
 * EaseMotion CSS — Dropdown Menu ARIA Menuitem Focus (roving tabindex)
 * ============================================================
 * A menu widget with role="menu", items role="menuitem", and arrow-key
 * roving tabindex: only one item holds tabindex=0, the rest tabindex=-1.
 * Home/End jump to first/last; Escape closes and returns focus to the trigger.
 *
 * API:
 *   const m = new MenuFocus(menuEl, { trigger });
 *   m.open(); m.close(); m.destroy();
 * ============================================================
 */

export class MenuFocus {
  constructor(menu, options = {}) {
    if (!menu || typeof menu.addEventListener !== 'function') {
      throw new TypeError('MenuFocus requires a menu element');
    }
    this.menu = menu;
    this.trigger = options.trigger || null;
    this.menu.setAttribute('role', 'menu');
    this.items = Array.from(menu.querySelectorAll('[data-menuitem]'));
    this.activeIndex = 0;
    this._onKeydown = this._onKeydown.bind(this);
    this.menu.addEventListener('keydown', this._onKeydown);
    this._refresh();
  }

  _refresh() {
    if (!this.items.length) return;
    this.activeIndex = Math.min(this.activeIndex, this.items.length - 1);
    this.items.forEach((item, i) => {
      item.setAttribute('role', 'menuitem');
      item.setAttribute('tabindex', i === this.activeIndex ? '0' : '-1');
    });
  }

  _focus(index) {
    if (!this.items.length) return;
    this.activeIndex = (index + this.items.length) % this.items.length;
    this._refresh();
    this.items[this.activeIndex].focus();
  }

  _onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this._focus(this.activeIndex + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this._focus(this.activeIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        this._focus(0);
        break;
      case 'End':
        event.preventDefault();
        this._focus(this.items.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
    }
  }

  open() {
    this.menu.setAttribute('aria-expanded', 'true');
    this._refresh();
    if (this.items[this.activeIndex]) this.items[this.activeIndex].focus();
  }

  close() {
    this.menu.setAttribute('aria-expanded', 'false');
    if (this.trigger && typeof this.trigger.focus === 'function') this.trigger.focus();
  }

  destroy() {
    this.menu.removeEventListener('keydown', this._onKeydown);
    this.items.forEach((item) => item.setAttribute('tabindex', '0'));
  }
}

export default MenuFocus;
