/**
 * EaseMotion CSS — Slide Animation Reduced Motion
 * ============================================================
 * Adds a prefers-reduced-motion guard to slide-in/slide-out animations.
 * When the user has reduced motion enabled, the slide is shown instantly
 * (no transform/opacity transition) instead of animating.
 *
 * API:
 *   const s = new SlideMotion(rootEl, { direction });
 *   s.show(); s.hide(); s.isReducedMotion(); s.destroy();
 * ============================================================
 */

export class SlideMotion {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('SlideMotion requires a root element');
    }
    this.root = root;
    this.direction = options.direction || 'left';
    this._visible = false;
    this._onKeydown = this._onKeydown.bind(this);

    this.root.setAttribute('aria-hidden', 'true');
    this.root.classList.add('ease-slide', 'ease-slide--' + this.direction);
    this._mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };
    this.root.addEventListener('keydown', this._onKeydown);
  }

  isReducedMotion() {
    return this._mq && this._mq.matches;
  }

  show() {
    this._visible = true;
    this.root.setAttribute('aria-hidden', 'false');
    this.root.classList.add('is-visible');
    this.root.style.transition = this.isReducedMotion() ? 'none' : '';
    if (this.isReducedMotion()) {
      this.root.style.transform = 'none';
      this.root.style.opacity = '1';
    }
  }

  hide() {
    this._visible = false;
    this.root.setAttribute('aria-hidden', 'true');
    this.root.classList.remove('is-visible');
    if (this.isReducedMotion()) {
      this.root.style.transform = '';
      this.root.style.opacity = '';
    }
  }

  toggle() {
    return this._visible ? this.hide() : this.show();
  }

  isVisible() {
    return this._visible;
  }

  _onKeydown(event) {
    if (event.key === 'Escape') this.hide();
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
  }
}

export default SlideMotion;
