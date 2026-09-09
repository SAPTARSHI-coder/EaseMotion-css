/**
 * EaseMotion CSS — Tooltip ARIA Describedby Link (enhancement)
 * ============================================================
 * A tooltip that links a trigger element to a tooltip element via
 * aria-describedby. The tooltip is hidden with the HTML hidden attribute
 * (NOT display:none, so SRs can read it) and toggled on hover/focus.
 * Respects prefers-reduced-motion (no fade animation).
 *
 * API:
 *   const t = new Tooltip(triggerEl, options);
 *   t.show(); t.hide(); t.toggle(); t.isVisible(); t.destroy();
 * ============================================================ */

let _idSeq = 0;

export class Tooltip {
  constructor(trigger, options = {}) {
    if (!trigger || typeof trigger.addEventListener !== 'function') {
      throw new TypeError('Tooltip requires a trigger element');
    }
    this.trigger = trigger;
    this.text = options.text || trigger.getAttribute('title') || '';
    this._reduced = typeof window !== 'undefined' && window.matchMedia
      ? !!window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    this.tooltip = document.createElement('span');
    this.tooltip.id = 'ease-tooltip-' + (++_idSeq);
    this.tooltip.setAttribute('role', 'tooltip');
    this.tooltip.textContent = this.text;
    this.tooltip.setAttribute('hidden', '');
    this.tooltip.classList.add('ease-tooltip');
    if (this._reduced) this.tooltip.classList.add('ease-tooltip--static');

    this.trigger.setAttribute('aria-describedby', this.tooltip.id);
    this.trigger.classList.add('ease-tooltip-trigger');
    this.trigger.appendChild(this.tooltip);
    if (this.trigger.getAttribute('title')) this.trigger.removeAttribute('title');

    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._onKey = this._onKey.bind(this);
    this.trigger.addEventListener('mouseenter', this._show);
    this.trigger.addEventListener('mouseleave', this._hide);
    this.trigger.addEventListener('focusin', this._show);
    this.trigger.addEventListener('focusout', this._hide);
    this.trigger.addEventListener('keydown', this._onKey);
  }

  show() {
    this.tooltip.removeAttribute('hidden');
    this.tooltip.classList.add('is-visible');
    this.trigger.setAttribute('aria-expanded', 'true');
  }

  hide() {
    this.tooltip.setAttribute('hidden', '');
    this.tooltip.classList.remove('is-visible');
    this.trigger.setAttribute('aria-expanded', 'false');
  }

  toggle() {
    this.isVisible() ? this.hide() : this.show();
  }

  isVisible() {
    return !this.tooltip.hasAttribute('hidden');
  }

  getText() {
    return this.text;
  }

  _show() { this.show(); }
  _hide() { this.hide(); }

  _onKey(event) {
    if (event.key === 'Escape') this.hide();
  }

  destroy() {
    this.trigger.removeEventListener('mouseenter', this._show);
    this.trigger.removeEventListener('mouseleave', this._hide);
    this.trigger.removeEventListener('focusin', this._show);
    this.trigger.removeEventListener('focusout', this._hide);
    this.trigger.removeEventListener('keydown', this._onKey);
    this.trigger.removeAttribute('aria-describedby');
    this.trigger.removeAttribute('aria-expanded');
    if (this.tooltip.parentNode) this.tooltip.parentNode.removeChild(this.tooltip);
  }
}

export default Tooltip;
