/**
 * EaseMotion CSS — Command Palette ARIA Combobox (enhancement)
 * ============================================================
 * An ARIA 1.2 combobox + listbox pattern:
 *   - the input has role=combobox + aria-controls + aria-expanded
 *   - the list has role=listbox
 *   - each option has role=option + aria-selected
 *   - Up/Down move the active option, Enter selects, Escape clears
 *
 * API:
 *   const c = new CommandPalette(rootEl, { options });
 *   c.open(); c.close(); c.query('save'); c.selectActive(); c.destroy();
 * ============================================================ */

export class CommandPalette {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('CommandPalette requires a root element');
    }
    this.root = root;
    this.options = Array.isArray(options.options) ? options.options.slice() : [];
    this._open = false;
    this._active = 0;
    this._filtered = this.options.slice();

    this.input = root.querySelector('[data-cp-input]') || document.createElement('input');
    this.list = root.querySelector('[data-cp-list]') || document.createElement('ul');

    this.input.setAttribute('role', 'combobox');
    this.input.setAttribute('aria-expanded', 'false');
    this.input.setAttribute('aria-autocomplete', 'list');
    this.input.setAttribute('aria-controls', 'cp-list');
    this.list.id = 'cp-list';
    this.list.setAttribute('role', 'listbox');

    this._onInput = this._onInput.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this.input.addEventListener('input', this._onInput);
    this.input.addEventListener('keydown', this._onKeydown);
    this.list.addEventListener('click', this._onListClick.bind(this));

    this._render();
  }

  _render() {
    this.list.innerHTML = '';
    this._filtered.forEach((opt, i) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('id', 'cp-option-' + i);
      li.setAttribute('aria-selected', i === this._active ? 'true' : 'false');
      li.textContent = opt;
      this.list.appendChild(li);
    });
    this.input.setAttribute('aria-activedescendant', this._filtered.length ? 'cp-option-' + this._active : '');
  }

  open() {
    this._open = true;
    this.input.setAttribute('aria-expanded', 'true');
  }

  close() {
    this._open = false;
    this.input.setAttribute('aria-expanded', 'false');
  }

  isOpen() {
    return this._open;
  }

  query(term) {
    const t = String(term || '').toLowerCase();
    this._filtered = this.options.filter((o) => String(o).toLowerCase().includes(t));
    this._active = 0;
    this._render();
    return this._filtered.slice();
  }

  move(delta) {
    if (!this._filtered.length) return false;
    this._active = (this._active + delta + this._filtered.length) % this._filtered.length;
    this._render();
    return true;
  }

  selectActive() {
    if (!this._filtered.length) return null;
    const val = this._filtered[this._active];
    this.input.value = val;
    this.close();
    return val;
  }

  _onInput() {
    if (!this._open) this.open();
    this.query(this.input.value);
  }

  _onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown': event.preventDefault(); this.open(); this.move(1); break;
      case 'ArrowUp': event.preventDefault(); this.move(-1); break;
      case 'Enter': event.preventDefault(); this.selectActive(); break;
      case 'Escape': event.preventDefault(); this.close(); break;
    }
  }

  _onListClick(event) {
    const li = event.target.closest('[role="option"]');
    if (!li) return;
    const i = Array.from(this.list.children).indexOf(li);
    if (i >= 0) { this._active = i; this.selectActive(); }
  }

  destroy() {
    this.input.removeEventListener('input', this._onInput);
    this.input.removeEventListener('keydown', this._onKeydown);
  }
}

export default CommandPalette;
