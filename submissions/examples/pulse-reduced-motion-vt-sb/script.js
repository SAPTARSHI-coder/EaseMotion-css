/**
 * EaseMotion CSS — Pulse Animation Reduced-Motion Audit (validation)
 * ============================================================
 * Audits a pulse animation and reports whether it honors
 * prefers-reduced-motion. When reduced motion is requested the pulse
 * is replaced by a static ring; otherwise the keyframe animation runs.
 *
 * API:
 *   const a = new PulseAudit(rootEl);
 *   a.start(); a.stop(); a.report(); a.isCompliant(); a.destroy();
 * ============================================================ */

const PULSE_KEYFRAME_SELECTOR = '.ease-pulse--animating';

export class PulseAudit {
  constructor(root) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('PulseAudit requires a root element');
    }
    this.root = root;
    this._pulsing = false;
    this.root.classList.add('ease-pulse');
  }

  isReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return !!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  /** Returns an axe-core-style audit report object. */
  report() {
    const animated = this.root.classList.contains('ease-pulse--animating');
    const reduced = this.isReducedMotion();
    const violations = [];
    if (reduced && animated) {
      violations.push({
        id: 'prefers-reduced-motion',
        impact: 'serious',
        description: 'Pulse animation runs while prefers-reduced-motion is active',
      });
    }
    return {
      target: this.root.className,
      reducedMotion: reduced,
      animating: animated,
      violations,
      pass: violations.length === 0,
    };
  }

  isCompliant() {
    return this.report().pass;
  }

  destroy() {
    this.stop();
    this.root.classList.remove('ease-pulse');
  }
}

export { PULSE_KEYFRAME_SELECTOR };
export default PulseAudit;
