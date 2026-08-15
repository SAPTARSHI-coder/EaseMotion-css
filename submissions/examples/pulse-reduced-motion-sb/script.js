/**
 * EaseMotion CSS — Pulse Animation Reduced Motion
 * ============================================================
 * Adds a prefers-reduced-motion guard to pulse (attention) animations.
 * When reduced motion is enabled, the pulse is replaced by a static,
 * high-visibility ring so the affordance is still discoverable without
 * movement.
 *
 * API:
 *   const p = new PulseMotion(rootEl);
 *   p.start(); p.stop(); p.isReducedMotion(); p.destroy();
 * ============================================================
 */

export class PulseMotion {
  constructor(root) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('PulseMotion requires a root element');
    }
    this.root = root;
    this._pulsing = false;
    this._mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };
    this.root.classList.add('ease-pulse');
  }

  isReducedMotion() {
    return this._mq && this._mq.matches;
  }

  start() {
    if (this._pulsing) return false;
    this._pulsing = true;
    if (this.isReducedMotion()) {
      this.root.classList.add('ease-pulse--static');
    } else {
      this.root.classList.add('ease-pulse--animating');
    }
    return true;
  }

  stop() {
    if (!this._pulsing) return false;
    this._pulsing = false;
    this.root.classList.remove('ease-pulse--animating', 'ease-pulse--static');
    return true;
  }

  isPulsing() {
    return this._pulsing;
  }

  destroy() {
    this.stop();
    this.root.classList.remove('ease-pulse');
  }
}

export default PulseMotion;
