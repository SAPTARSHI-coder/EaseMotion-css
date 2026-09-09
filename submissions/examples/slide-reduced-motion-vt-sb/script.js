/**
 * EaseMotion CSS — Slide Animation Reduced-Motion Audit (validation)
 * ============================================================
 * Audits a slide-in/slide-out animation and reports whether it honors
 * prefers-reduced-motion. When reduced motion is requested the panel
 * appears instantly (transition:none, no transform/opacity animation)
 * while still toggling aria-hidden.
 *
 * API:
 *   const a = new SlideAudit(rootEl, { direction });
 *   a.show(); a.hide(); a.toggle(); a.report(); a.isCompliant(); a.destroy();
 * ============================================================ */

export class SlideAudit {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('SlideAudit requires a root element');
    }
    this.root = root;
    this.direction = options.direction || 'left';
    this._visible = false;
    this._onKeydown = this._onKeydown.bind(this);
    this._mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };

    this.root.setAttribute('aria-hidden', 'true');
    this.root.classList.add('ease-slide', 'ease-slide--' + this.direction);
    this.root.addEventListener('keydown', this._onKeydown);
  }

  isReducedMotion() {
    return !!(this._mq && this._mq.matches);
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

  report() {
    const reduced = this.isReducedMotion();
    const hasTransition = this.root.style.transition !== 'none' && this.root.style.transition !== '';
    const violations = [];
    if (reduced && this._visible && hasTransition) {
      violations.push({
        id: 'prefers-reduced-motion',
        impact: 'serious',
        description: 'Slide transition runs while prefers-reduced-motion is active',
      });
    }
    return { reducedMotion: reduced, visible: this._visible, hasTransition, violations, pass: violations.length === 0 };
  }

  isCompliant() {
    return this.report().pass;
  }

  _onKeydown(event) {
    if (event.key === 'Escape') this.hide();
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
  }
}

export default SlideAudit;
