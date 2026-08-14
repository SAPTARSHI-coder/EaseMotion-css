/**
 * EaseMotion CSS — Modal Component Focus Trap
 * ============================================================
 * A modal dialog that traps focus within itself (Tab/Shift+Tab cycle),
 * moves focus into the dialog on open, restores focus to the trigger on
 * close, and closes on Escape + backdrop click.
 *
 * API:
 *   const m = new Modal(rootEl, { trigger });
 *   m.open(); m.close(); m.isOpen(); m.destroy();
 * ============================================================ */

export class Modal {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Modal requires a root element');
    }
    this.root = root;
    this.trigger = options.trigger || null;
    this._open = false;
    this._savedFocus = null;

    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('hidden', '');
    this.root.classList.add('ease-modal');

    this._onKeydown = this._onKeydown.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    this._onBackdrop = this._onBackdrop.bind(this);
    document.addEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.addEventListener('click', this._onTrigger);
    this.root.addEventListener('mousedown', this._onBackdrop);
  }

  _focusables() {
    return Array.from(
      this.root.querySelectorAll(
        'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  open() {
    if (this._open) return false;
    this._open = true;
    this._savedFocus = document.activeElement;
    this.root.removeAttribute('hidden');
    this.root.classList.add('is-open');
    this.root.setAttribute('aria-hidden', 'false');
    const focusables = this._focusables();
    if (focusables.length && typeof focusables[0].focus === 'function') {
      focusables[0].focus();
    } else if (typeof this.root.focus === 'function') {
      this.root.focus();
    }
    return true;
  }

  close() {
    if (!this._open) return false;
    this._open = false;
    this.root.setAttribute('hidden', '');
    this.root.classList.remove('is-open');
    this.root.setAttribute('aria-hidden', 'true');
    if (this._savedFocus && typeof this._savedFocus.focus === 'function') {
      this._savedFocus.focus();
    }
    return true;
  }

  toggle() {
    return this._open ? this.close() : this.open();
  }

  isOpen() {
    return this._open;
  }

  _onKeydown(event) {
    if (!this._open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key === 'Tab') {
      const focusables = this._focusables();
      if (!focusables.length) {
        event.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === first || !this.root.contains(document.activeElement)) {
          event.preventDefault();
          if (typeof last.focus === 'function') last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          if (typeof first.focus === 'function') first.focus();
        }
      }
    }
  }

  _onTrigger() {
    this.open();
  }

  _onBackdrop(event) {
    if (event.target === this.root) this.close();
  }

  destroy() {
    document.removeEventListener('keydown', this._onKeydown);
    if (this.trigger) this.trigger.removeEventListener('click', this._onTrigger);
    this.root.removeEventListener('mousedown', this._onBackdrop);
  }
}

export default Modal;
