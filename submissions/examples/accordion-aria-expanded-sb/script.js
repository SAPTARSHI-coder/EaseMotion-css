/**
 * EaseMotion CSS — Accordion ARIA Expanded Attributes
 * ============================================================
 * Wires accordion header buttons to their panels via aria-controls and
 * keeps aria-expanded in sync with the open state. Supports single-open
 * (accordion) and multi-open (allowMultiple) modes.
 *
 * API:
 *   const a = new Accordion(rootEl, { allowMultiple });
 *   a.toggle(0); a.expand(0); a.collapse(0); a.isExpanded(0); a.destroy();
 * ============================================================
 */

export class Accordion {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Accordion requires a root element');
    }
    this.root = root;
    this.allowMultiple = !!options.allowMultiple;
    this.headers = Array.from(root.querySelectorAll('[data-accordion-header]'));
    if (!this.headers.length) {
      throw new Error('Accordion requires at least one [data-accordion-header]');
    }

    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('click', this._onClick);

    this.headers.forEach((header, i) => {
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
      header.setAttribute('tabindex', '0');
      const panel = this._panelFor(header);
      if (panel) {
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-hidden', 'true');
        if (!header.getAttribute('aria-controls')) {
          header.setAttribute('aria-controls', panel.id);
        }
      }
      if (i === 0 && options.defaultOpen !== false) {
        this.expand(i, { silent: true });
      }
    });
  }

  _panelFor(header) {
    const id = header.getAttribute('aria-controls');
    if (!id) return null;
    return document.getElementById(id);
  }

  _setExpanded(index, expanded, options = {}) {
    const header = this.headers[index];
    if (!header) return false;
    header.setAttribute('aria-expanded', String(expanded));
    const panel = this._panelFor(header);
    if (panel) panel.setAttribute('aria-hidden', String(!expanded));
    header.classList.toggle('is-open', expanded);
    if (!options.silent && typeof header.dispatchEvent === 'function') {
      header.dispatchEvent(new window.Event('toggle', { bubbles: true }));
    }
    return true;
  }

  expand(index, options) {
    if (!this.allowMultiple && !options?.silent) {
      this.headers.forEach((h, i) => {
        if (i !== index) this._setExpanded(i, false, { silent: true });
      });
    }
    return this._setExpanded(index, true, options);
  }

  collapse(index, options) {
    return this._setExpanded(index, false, options);
  }

  toggle(index, options) {
    return this.isExpanded(index) ? this.collapse(index, options) : this.expand(index, options);
  }

  isExpanded(index) {
    const header = this.headers[index];
    return !!header && header.getAttribute('aria-expanded') === 'true';
  }

  _onClick(event) {
    const header = event.target.closest('[data-accordion-header]');
    if (!header) return;
    const index = this.headers.indexOf(header);
    if (index >= 0) this.toggle(index);
  }

  destroy() {
    this.root.removeEventListener('click', this._onClick);
  }
}

export default Accordion;
