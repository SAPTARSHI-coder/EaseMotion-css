// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PulseMotion } from './script.js';

describe('Pulse Animation Reduced Motion', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('span');
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('adds the ease-pulse class', () => {
    const p = new PulseMotion(root);
    expect(root.classList.contains('ease-pulse')).toBe(true);
    p.destroy();
  });

  it('start() adds the animating class by default', () => {
    const p = new PulseMotion(root);
    p.start();
    expect(p.isPulsing()).toBe(true);
    expect(root.classList.contains('ease-pulse--animating')).toBe(true);
    p.destroy();
  });

  it('stop() removes both animating and static classes', () => {
    const p = new PulseMotion(root);
    p.start();
    p.stop();
    expect(p.isPulsing()).toBe(false);
    expect(root.classList.contains('ease-pulse--animating')).toBe(false);
    p.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('start() is a no-op when already pulsing', () => {
    const p = new PulseMotion(root);
    p.start();
    expect(p.start()).toBe(false);
    p.destroy();
  });

  it('stop() is a no-op when not pulsing', () => {
    const p = new PulseMotion(root);
    expect(p.stop()).toBe(false);
    p.destroy();
  });

  it('reduced motion uses a static ring instead of animation', () => {
    window.matchMedia = () => ({
      matches: true,
      addEventListener: () => {},
      removeEventListener: () => {},
    });
    const p = new PulseMotion(root);
    p.start();
    expect(p.isReducedMotion()).toBe(true);
    expect(root.classList.contains('ease-pulse--static')).toBe(true);
    expect(root.classList.contains('ease-pulse--animating')).toBe(false);
    p.destroy();
    delete window.matchMedia;
  });

  it('destroy() removes all pulse classes', () => {
    const p = new PulseMotion(root);
    p.start();
    p.destroy();
    expect(root.className).toBe('');
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new PulseMotion(null)).toThrow(TypeError);
    expect(() => new PulseMotion({})).toThrow(TypeError);
  });
});
