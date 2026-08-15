/**
 * EaseMotion CSS — Carousel Autoplay Pause on Focus
 * ============================================================
 * Pauses autoplay while any slide or control inside the carousel is focused
 * (focusin/focusout on the carousel root), and resumes when focus leaves.
 *
 * API:
 *   const c = new CarouselPause(rootEl, { interval });
 *   c.play(); c.pause(); c.next(); c.isPaused();
 *   c.onPauseChange(fn);   // fn(true|false) on pause/resume
 *   c.destroy();
 * ============================================================
 */

export class CarouselPause {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('CarouselPause requires a root element');
    }
    this.root = root;
    this.interval = Number.isFinite(options.interval) && options.interval > 0 ? options.interval : 4000;
    this.slides = Array.from(root.querySelectorAll('[class*="slide"]'));
    this.index = 0;
    this._timer = null;
    this._paused = false;
    this._listeners = [];
    this._onFocusIn = this._onFocusIn.bind(this);
    this._onFocusOut = this._onFocusOut.bind(this);
    this.root.setAttribute('role', 'region');
    this.root.setAttribute('aria-roledescription', 'carousel');
    this.root.addEventListener('focusin', this._onFocusIn);
    this.root.addEventListener('focusout', this._onFocusOut);
    this._render();
  }

  _render() {
    this.slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', String(i !== this.index));
      if (i === this.index) {
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });
  }

  _notify() {
    this._listeners.forEach((fn) => {
      try { fn(this._paused); } catch { /* listener error */ }
    });
  }

  _onFocusIn() {
    if (this._paused) return;
    this.pause();
  }

  _onFocusOut(event) {
    if (!this.root.contains(event.relatedTarget)) {
      this.play();
    }
  }

  _schedule() {
    if (this._timer) clearTimeout(this._timer);
    if (this._paused) return;
    this._timer = setTimeout(() => {
      this.next();
      this._schedule();
    }, this.interval);
  }

  pause() {
    if (this._paused) return;
    this._paused = true;
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    this._notify();
  }

  play() {
    if (!this._paused) return;
    this._paused = false;
    this._schedule();
    this._notify();
  }

  next() {
    if (!this.slides.length) return;
    this.index = (this.index + 1) % this.slides.length;
    this._render();
  }

  isPaused() {
    return this._paused;
  }

  onPauseChange(fn) {
    if (typeof fn === 'function') this._listeners.push(fn);
  }

  destroy() {
    if (this._timer) clearTimeout(this._timer);
    this.root.removeEventListener('focusin', this._onFocusIn);
    this.root.removeEventListener('focusout', this._onFocusOut);
    this._listeners = [];
  }
}

export default CarouselPause;
