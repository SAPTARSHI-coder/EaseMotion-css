/**
 * EaseMotion CSS — Rating Star Keypress Selection (enhancement)
 * ============================================================
 * A star-rating with role=slider (composite) semantics: the group has
 * role=slider + aria-valuemin/max/now/text, each star is a button with
 * aria-label. ArrowLeft/Right adjust the value by ±1, Home/End jump.
 * Respects prefers-reduced-motion (no star-fill transition).
 *
 * API:
 *   const r = new Rating(rootEl, { max, value });
 *   r.setValue(3); r.getValue(); r.destroy();
 * ============================================================ */

export class Rating {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Rating requires a root element');
    }
    this.root = root;
    this.max = Math.max(1, Number(options.max) || 5);
    this._value = Math.max(0, Math.min(this.max, Number(options.value) || 0));

    this.root.setAttribute('role', 'slider');
    this.root.setAttribute('tabindex', '0');
    this.root.setAttribute('aria-valuemin', '0');
    this.root.setAttribute('aria-valuemax', String(this.max));
    this.root.classList.add('ease-rating');

    this.stars = [];
    for (let i = 0; i < this.max; i++) {
      const star = document.createElement('button');
      star.type = 'button';
      star.setAttribute('aria-label', (i + 1) + ' star' + (i ? 's' : ''));
      star.className = 'ease-rating__star';
      star.dataset.index = String(i);
      this.root.appendChild(star);
      this.stars.push(star);
    }

    this._onKeydown = this._onKeydown.bind(this);
    this._onClick = this._onClick.bind(this);
    this.root.addEventListener('keydown', this._onKeydown);
    this.root.addEventListener('click', this._onClick);
    this._render();
  }

  setValue(v) {
    this._value = Math.max(0, Math.min(this.max, Number(v) || 0));
    this._render();
    return this._value;
  }

  getValue() {
    return this._value;
  }

  _render() {
    this.root.setAttribute('aria-valuenow', String(this._value));
    this.root.setAttribute('aria-valuetext', this._value + ' of ' + this.max + ' stars');
    this.stars.forEach((star, i) => {
      const active = i < this._value;
      star.setAttribute('aria-pressed', active ? 'true' : 'false');
      star.classList.toggle('is-active', active);
    });
  }

  _onKeydown(event) {
    const k = event.key;
    if (k === 'ArrowRight' || k === 'ArrowUp') { event.preventDefault(); this.setValue(this._value + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowDown') { event.preventDefault(); this.setValue(this._value - 1); }
    else if (k === 'Home') { event.preventDefault(); this.setValue(0); }
    else if (k === 'End') { event.preventDefault(); this.setValue(this.max); }
  }

  _onClick(event) {
    const star = event.target.closest('[data-index]');
    if (!star) return;
    this.setValue(Number(star.dataset.index) + 1);
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    this.root.removeEventListener('click', this._onClick);
  }
}

export default Rating;
