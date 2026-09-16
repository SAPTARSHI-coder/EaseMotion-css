/**
 * EaseMotion CSS — Tooltip ARIA Describedby Link
 * ============================================================
 * Wires a trigger element's `aria-describedby` to a tooltip element with
 * role="tooltip", and shows/hides it on focus/blur and mouseenter/mouseleave.
 * The tooltip id is generated if missing and reused on re-init.
 *
 * API:
 *   const t = new TooltipAria(triggerEl, tooltipEl);
 *   t.show(); t.hide(); t.destroy();
 * ============================================================
 */

let _seq = 0;

export class TooltipAria {
  constructor(trigger, tooltip) {
    if (!trigger || !tooltip || typeof trigger.addEventListener !== 'function') {
      throw new TypeError('TooltipAria requires a trigger and a tooltip element');
    }
    this.trigger = trigger;
    this.tooltip = tooltip;
    this.tooltip.setAttribute('role', 'tooltip');
    if (!this.tooltip.id) {
      this.tooltip.id = 'ease-tooltip-' + ++_seq;
    }
    this.trigger.setAttribute('aria-describedby', this.tooltip.id);
    this._shown = false;
    this._onFocusIn = this._onFocusIn.bind(this);
    this._onFocusOut = this._onFocusOut.bind(this);
    this._onEnter = this._onEnter.bind(this);
    this._onLeave = this._onLeave.bind(this);
    this.trigger.addEventListener('focus', this._onFocusIn);
    this.trigger.addEventListener('blur', this._onFocusOut);
    this.trigger.addEventListener('mouseenter', this._onEnter);
    this.trigger.addEventListener('mouseleave', this._onLeave);
    this.hide();
  }

  show() {
    this._shown = true;
    this.tooltip.setAttribute('data-visible', 'true');
  }

  hide() {
    this._shown = false;
    this.tooltip.setAttribute('data-visible', 'false');
  }

  _onFocusIn() {
    this.show();
  }

  _onFocusOut() {
    this.hide();
  }

  _onEnter() {
    this.show();
  }

  _onLeave() {
    this.hide();
  }

  destroy() {
    this.trigger.removeEventListener('focus', this._onFocusIn);
    this.trigger.removeEventListener('blur', this._onFocusOut);
    this.trigger.removeEventListener('mouseenter', this._onEnter);
    this.trigger.removeEventListener('mouseleave', this._onLeave);
    if (this.trigger.getAttribute('aria-describedby') === this.tooltip.id) {
      this.trigger.removeAttribute('aria-describedby');
    }
  }
}

export default TooltipAria;
