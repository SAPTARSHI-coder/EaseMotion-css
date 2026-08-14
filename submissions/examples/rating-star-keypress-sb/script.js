/**
 * EaseMotion CSS — Rating Component Star Keypress Selection
 * ============================================================
 * Adds full keyboard support to a star rating: ArrowRight/Up increases the
 * preview, ArrowLeft/Down decreases it, Enter/Space commits the selection.
 * The container exposes role=slider with aria-valuenow/min/max.
 *
 * API:
 *   const r = new RatingKeys(containerEl, { stars });
 *   r.setValue(n); r.getValue(); r.destroy();
 * ============================================================
 */

export class RatingKeys {
  constructor(container, options = {}) {
    if (!container || typeof container.addEventListener !== 'function') {
      throw new TypeError('RatingKeys requires a container element');
    }
    this.container = container;
    this.maxStars = Number.isFinite(options.stars) && options.stars > 0 ? Math.floor(options.stars) : 5;
    this.value = 0;
    this.preview = 0;
    this.container.setAttribute('role', 'slider');
    this.container.setAttribute('aria-label', 'Rating');
    this.container.setAttribute('aria-valuemin', '0');
    this.container.setAttribute('aria-valuemax', String(this.maxStars));
    this.container.setAttribute('aria-valuenow', '0');
    this.container.setAttribute('tabindex', '0');
    this._onKeydown = this._onKeydown.bind(this);
    this.container.addEventListener('keydown', this._onKeydown);
    this._render();
  }

  _render() {
    const active = this.preview || this.value;
    this.container.setAttribute('aria-valuenow', String(this.value));
    this.container.textContent = '';
    for (let i = 1; i <= this.maxStars; i++) {
      const star = document.createElement('span');
      star.className = 'ease-rating-star' + (i <= active ? ' is-active' : '');
      star.textContent = '★';
      this.container.appendChild(star);
    }
  }

  _change(delta) {
    let next = (this.preview || this.value) + delta;
    next = Math.min(this.maxStars, Math.max(0, next));
    this.preview = next;
    this._render();
  }

  _onKeydown(event) {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        this._change(1);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        this._change(-1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.setValue(this.preview || this.value);
        break;
    }
  }

  setValue(n) {
    if (!Number.isFinite(n) || n < 0 || n > this.maxStars) return false;
    this.value = Math.floor(n);
    this.preview = this.value;
    this._render();
    return true;
  }

  getValue() {
    return this.value;
  }

  destroy() {
    this.container.removeEventListener('keydown', this._onKeydown);
  }
}

export default RatingKeys;
