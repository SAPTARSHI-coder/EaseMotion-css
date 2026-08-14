/**
 * EaseMotion CSS — Dropdown Click-Outside Dismiss Listener
 * ============================================================
 * Toggles a `.ease-dropdown-menu` open/closed and dismisses it when a click
 * lands outside the dropdown (or on Escape). Mirrors the markup in components/.
 *
 * API:
 *   const d = new DropdownToggle(buttonEl, menuEl);
 *   d.toggle(); d.open(); d.close(); d.destroy();
 * ============================================================
 */

export class DropdownToggle {
  constructor(button, menu) {
    if (!button || !menu || typeof button.addEventListener !== 'function') {
      throw new TypeError('DropdownToggle requires a button and a menu element');
    }
    this.button = button;
    this.menu = menu;
    this.isOpen = false;
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this.button.addEventListener('click', this._onButtonClick);
    document.addEventListener('click', this._onDocumentClick, true);
    document.addEventListener('keydown', this._onKeydown);
  }

  _onButtonClick(event) {
    event.stopPropagation();
    this.toggle();
  }

  _onDocumentClick(event) {
    if (!this.isOpen) return;
    const target = event.target;
    if (target instanceof Node && (this.menu.contains(target) || this.button.contains(target))) {
      return;
    }
    this.close();
  }

  _onKeydown(event) {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
      this.button.focus();
    }
  }

  open() {
    this.isOpen = true;
    this.menu.setAttribute('data-open', 'true');
    this.button.setAttribute('aria-expanded', 'true');
  }

  close() {
    if (!this.isOpen) return false;
    this.isOpen = false;
    this.menu.setAttribute('data-open', 'false');
    this.button.setAttribute('aria-expanded', 'false');
    return true;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  destroy() {
    this.button.removeEventListener('click', this._onButtonClick);
    document.removeEventListener('click', this._onDocumentClick, true);
    document.removeEventListener('keydown', this._onKeydown);
  }
}

export default DropdownToggle;
