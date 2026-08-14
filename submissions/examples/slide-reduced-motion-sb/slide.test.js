// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SlideMotion } from './script.js';

describe('Slide Animation Reduced Motion', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.id = 'panel';
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('adds ease-slide class and direction modifier', () => {
    const s = new SlideMotion(root, { direction: 'right' });
    expect(root.classList.contains('ease-slide')).toBe(true);
    expect(root.classList.contains('ease-slide--right')).toBe(true);
    s.destroy();
  });

  it('starts hidden with aria-hidden=true', () => {
    const s = new SlideMotion(root);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(s.isVisible()).toBe(false);
    s.destroy();
  });

  it('show() sets aria-hidden=false and is-visible class', () => {
    const s = new SlideMotion(root);
    s.show();
    expect(s.isVisible()).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    expect(root.classList.contains('is-visible')).toBe(true);
    s.destroy();
  });

  it('hide() sets aria-hidden=true and removes is-visible', () => {
    const s = new SlideMotion(root);
    s.show();
    s.hide();
    expect(s.isVisible()).toBe(false);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(root.classList.contains('is-visible')).toBe(false);
    s.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('toggle() flips visibility', () => {
    const s = new SlideMotion(root);
    s.toggle();
    expect(s.isVisible()).toBe(true);
    s.toggle();
    expect(s.isVisible()).toBe(false);
    s.destroy();
  });

  it('Escape hides the panel', () => {
    const s = new SlideMotion(root);
    s.show();
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(s.isVisible()).toBe(false);
    s.destroy();
  });

  it('reduced motion sets transition to none on show()', () => {
    const fakeMq = { matches: true, addEventListener: () => {}, removeEventListener: () => {} };
    window.matchMedia = () => fakeMq;
    const s = new SlideMotion(root);
    s.show();
    expect(s.isReducedMotion()).toBe(true);
    expect(root.style.transition).toBe('none');
    expect(root.style.transform).toBe('none');
    expect(root.style.opacity).toBe('1');
    s.destroy();
    delete window.matchMedia;
  });

  it('defaults to left direction', () => {
    const s = new SlideMotion(root);
    expect(root.classList.contains('ease-slide--left')).toBe(true);
    s.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new SlideMotion(null)).toThrow(TypeError);
    expect(() => new SlideMotion({})).toThrow(TypeError);
  });
});
