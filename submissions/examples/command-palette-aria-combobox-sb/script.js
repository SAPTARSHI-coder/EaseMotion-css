/**
 * EaseMotion CSS — Command Palette ARIA Combobox Role
 * ============================================================
 * Implements the ARIA 1.2 combobox pattern for a command palette: the search
 * input has role="combobox", aria-expanded, aria-controls, and aria-activedescendant;
 * the listbox has role="listbox"; options have role="option" + aria-selected.
 *
 * API:
 *   const cp = new CommandPalette(inputEl, listEl, options);
 *   cp.setItems([{ id, label }, ...]);
 *   cp.filter('te');   // returns matches, updates listbox + activedescendant
 *   cp.move(1 | -1);   // moves active option
 *   cp.selectActive(); // returns selected item
 *   cp.destroy();
 * ============================================================
 */

export class CommandPalette {
  constructor(input, listbox, options = []) {
    if (!input || !listbox || typeof input.addEventListener !== 'function') {
      throw new TypeError('CommandPalette requires an input and a listbox element');
    }
    this.input = input;
    this.listbox = listbox;
    this.items = [];
    this.matches = [];
    this.activeIndex = -1;

    this.input.setAttribute('role', 'combobox');
    this.input.setAttribute('aria-expanded', 'false');
    this.input.setAttribute('autocomplete', 'off');
    this.input.setAttribute('aria-haspopup', 'listbox');
    this.listbox.setAttribute('role', 'listbox');

    this._onInput = this._onInput.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this.input.addEventListener('input', this._onInput);
    this.input.addEventListener('keydown', this._onKeydown);

    if (Array.isArray(options) && options.length) this.setItems(options);
  }

  setItems(items) {
    if (!Array.isArray(items)) return;
    this.items = items
      .filter((it) => it && typeof it.label === 'string')
      .map((it, i) => ({ id: it.id != null ? String(it.id) : 'cmd-' + i, label: it.label }));
    this.filter(this.input.value || '');
  }

  filter(query) {
    const q = typeof query === 'string' ? query.trim().toLowerCase() : '';
    this.matches = q
      ? this.items.filter((it) => it.label.toLowerCase().includes(q))
      : this.items.slice();
    this.activeIndex = this.matches.length ? 0 : -1;
    this._render();
    return this.matches;
  }

  _render() {
    this.listbox.innerHTML = '';
    this.matches.forEach((item, i) => {
      const opt = document.createElement('div');
      opt.className = 'ease-command-palette-item' + (i === this.activeIndex ? ' ease-command-palette-item-active' : '');
      opt.setAttribute('role', 'option');
      opt.setAttribute('id', item.id);
      opt.setAttribute('aria-selected', String(i === this.activeIndex));
      opt.textContent = item.label;
      this.listbox.appendChild(opt);
    });
    const expanded = this.matches.length > 0;
    this.input.setAttribute('aria-expanded', String(expanded));
    if (expanded && this.activeIndex >= 0) {
      this.input.setAttribute('aria-controls', this.listbox.id || '');
      this.input.setAttribute('aria-activedescendant', this.matches[this.activeIndex].id);
    } else {
      this.input.removeAttribute('aria-activedescendant');
      this.input.setAttribute('aria-expanded', 'false');
    }
  }

  move(delta) {
    if (!Number.isFinite(delta) || !this.matches.length) return -1;
    let next = this.activeIndex + (delta > 0 ? 1 : -1);
    next = (next + this.matches.length) % this.matches.length;
    this.activeIndex = next;
    this._render();
    return this.activeIndex;
  }

  selectActive() {
    if (this.activeIndex < 0 || this.activeIndex >= this.matches.length) return null;
    return this.matches[this.activeIndex];
  }

  _onInput() {
    this.filter(this.input.value);
  }

  _onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.move(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.move(-1);
        break;
      case 'Enter':
        event.preventDefault();
        this.selectActive();
        break;
    }
  }

  destroy() {
    this.input.removeEventListener('input', this._onInput);
    this.input.removeEventListener('keydown', this._onKeydown);
  }
}

export default CommandPalette;
