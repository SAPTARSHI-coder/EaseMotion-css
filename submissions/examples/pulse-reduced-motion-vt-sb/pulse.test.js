// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { PulseAudit, PULSE_KEYFRAME_SELECTOR } from './script.js';

describe('Pulse Animation Reduced-Motion Audit', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('span');
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('exports the keyframe selector constant', () => {
    expect(PULSE_KEYFRAME_SELECTOR).toBe('.ease-pulse--animating');
  });

  it('adds ease-pulse class', () => {
    const a = new PulseAudit(root);
    expect(root.classList.contains('ease-pulse')).toBe(true);
    a.destroy();
  });

  it('start() animates when reduced motion is off', () => {
    const a = new PulseAudit(root);
    a.start();
    expect(a.isPulsing()).toBe(true);
    expect(root.classList.contains('ease-pulse--animating')).toBe(true);
    expect(root.classList.contains('ease-pulse--static')).toBe(false);
    a.destroy();
  });

  it('stop() removes animating and static classes', () => {
    const a = new PulseAudit(root);
    a.start();
    a.stop();
    expect(root.classList.contains('ease-pulse--animating')).toBe(false);
    expect(root.classList.contains('ease-pulse--static')).toBe(false);
    a.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('start() uses static ring when reduced motion is on', () => {
    window.matchMedia = () => ({ matches: true });
    const a = new PulseAudit(root);
    a.start();
    expect(root.classList.contains('ease-pulse--static')).toBe(true);
    expect(root.classList.contains('ease-pulse--animating')).toBe(false);
    delete window.matchMedia;
    a.destroy();
  });

  it('report() flags a violation when animating under reduced motion', () => {
    const a = new PulseAudit(root);
    a.start();
    // force the animating class while reduced motion reported true
    window.matchMedia = () => ({ matches: true });
    const report = a.report();
    expect(report.reducedMotion).toBe(true);
    expect(report.violations.length).toBeGreaterThan(0);
    expect(report.pass).toBe(false);
    delete window.matchMedia;
    a.destroy();
  });

  it('isCompliant() is true when not animating under reduced motion', () => {
    const a = new PulseAudit(root);
    a.start();
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('start()/stop() are no-ops when already in that state', () => {
    const a = new PulseAudit(root);
    expect(a.start()).toBe(true);
    expect(a.start()).toBe(false);
    expect(a.stop()).toBe(true);
    expect(a.stop()).toBe(false);
    a.destroy();
  });

  it('destroy() clears all classes', () => {
    const a = new PulseAudit(root);
    a.start();
    a.destroy();
    expect(root.className).toBe('');
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new PulseAudit(null)).toThrow(TypeError);
    expect(() => new PulseAudit({})).toThrow(TypeError);
  });
});
