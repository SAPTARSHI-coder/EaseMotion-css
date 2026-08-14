/**
 * EaseMotion CSS — Rating Component Mouse Hover Star Highlight
 * ============================================================
 * Highlights the stars from 1 up to the hovered index on `mouseenter`, and
 * clears the hover highlight on `mouseleave`, without committing a selection.
 *
 * API:
 *   const r = new RatingHover(containerEl, { stars });
 *   r.setRating(n);   // committed value
 *   r.destroy();
 * ============================================================
 */

export class RatingHover {
  constructor(container, options = {}) {
    if (!container || typeof container.appendChild !== 'function') {
      throw new TypeError('RatingHover requires a container element');
    }
    this.container = container;
    this.maxStars = Number.isFinite(options.stars) && options.stars > 0 ? Math.floor(options.stars) : 5;
    this.rating = 0;
    this.hover = 0;
    this.stars = [];
    this._onStarEnter = this._onStarEnter.bind(this);
    this._onLeave = this._onLeave.bind(this);
    this._build();
  }

  _build() {
    this.container.setAttribute('role', 'radiogroup');
    this.container.setAttribute('aria-label', 'Rating');
    for (let i = 1; i <= this.maxStars; i++) {
      const star = document.createElement('span');
      star.className = 'ease-rating-star';
      star.setAttribute('data-index', String(i));
      star.setAttribute('role', 'radio');
      star.setAttribute('aria-checked', 'false');
      star.addEventListener('mouseenter', () => this._onStarEnter(i));
      this.container.appendChild(star);
      this.stars.push(star);
    }
    this.container.addEventListener('mouseleave', this._onLeave);
    this._render();
  }

  _onStarEnter(index) {
    if (!Number.isFinite(index) || index < 1 || index > this.maxStars) return;
    this.hover = index;
    this._render();
  }

  _onLeave() {
    this.hover = 0;
    this._render();
  }

  _render() {
    const active = this.hover || this.rating;
    for (let i = 0; i < this.stars.length; i++) {
      const filled = i < active;
      this.stars[i].classList.toggle('is-active', filled);
      this.stars[i].classList.toggle('is-hovered', this.hover > 0 && i < this.hover);
      this.stars[i].setAttribute('aria-checked', String(i + 1 === this.rating));
    }
  }

  setRating(n) {
    if (!Number.isFinite(n) || n < 0 || n > this.maxStars) return false;
    this.rating = Math.floor(n);
    this._render();
    return true;
  }

  destroy() {
    this.container.removeEventListener('mouseleave', this._onLeave);
    this.stars.forEach((s) => s.replaceWith(s.cloneNode(false)));
    this.container.innerHTML = '';
  }
}

export default RatingHover;
