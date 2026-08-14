/**
 * EaseMotion CSS — Carousel Pause on Focus (enhancement)
 * ============================================================
 * A rotating carousel that pauses when any slide or control receives
 * focus (WCAG 2.2.2 Pause, Stop, Hide). role=region + aria-label on
 * the root; each slide is a group with aria-label. A Pause/Play button
 * toggles autoplay. Reduced motion disables autoplay entirely.
 *
 * API:
 *   const c = new Carousel(rootEl, { interval });
 *   c.play(); c.pause(); c.next(); c.prev(); c.goTo(2); c.destroy();
 * ============================================================ */

export class Carousel {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('Carousel requires a root element');
    }
    this.root = root;
    this.interval = Math.max(0, Number(options.interval) || 4000);
    this.slides = Array.from(root.querySelectorAll('[data-slide]'));
    this._active = 0;
    this._playing = false;
    this._timer = null;
    this._reduced = typeof window !== 'undefined' && window.matchMedia
      ? !!window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    this.root.setAttribute('role', 'region');
    this.root.setAttribute('aria-label', options.label || 'Image carousel');
    this.root.setAttribute('aria-roledescription', 'carousel');
    this.root.classList.add('ease-carousel');

    this.slides.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', (i + 1) + ' of ' + this.slides.length);
      slide.setAttribute('aria-hidden', i === this._active ? 'false' : 'true');
      slide.classList.toggle('is-active', i === this._active);
    });

    this._onFocusIn = this._onFocusIn.bind(this);
    this._onFocusOut = this._onFocusOut.bind(this);
    this.root.addEventListener('focusin', this._onFocusIn);
    this.root.addEventListener('focusout', this._onFocusOut);

    this._tick = this._tick.bind(this);
    if (!this._reduced && this.interval > 0) this.play();
  }

  play() {
    if (this._reduced || this.interval === 0 || this._playing) return false;
    this._playing = true;
    this._timer = setInterval(this._tick, this.interval);
    return true;
  }

  pause() {
    if (!this._playing) return false;
    this._playing = false;
    clearInterval(this._timer);
    this._timer = null;
    return true;
  }

  isPlaying() {
    return this._playing;
  }

  isPaused() {
    return !this._playing;
  }

  isReducedMotion() {
    return this._reduced;
  }

  _tick() {
    this.next();
  }

  goTo(index) {
    if (index < 0 || index >= this.slides.length) return false;
    this.slides[this._active].setAttribute('aria-hidden', 'true');
    this.slides[this._active].classList.remove('is-active');
    this._active = index;
    this.slides[index].setAttribute('aria-hidden', 'false');
    this.slides[index].classList.add('is-active');
    return true;
  }

  next() {
    return this.goTo((this._active + 1) % this.slides.length);
  }

  prev() {
    return this.goTo((this._active - 1 + this.slides.length) % this.slides.length);
  }

  getActive() {
    return this._active;
  }

  _onFocusIn() {
    this.pause();
  }

  _onFocusOut() {
    this.play();
  }

  destroy() {
    this.pause();
    this.root.removeEventListener('focusin', this._onFocusIn);
    this.root.removeEventListener('focusout', this._onFocusOut);
  }
}

export default Carousel;
