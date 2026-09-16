// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { SlideAudit } from './script.js';

describe('Slide Animation Reduced-Motion Audit', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('adds ease-slide + direction class', () => {
    const a = new SlideAudit(root, { direction: 'right' });
    expect(root.classList.contains('ease-slide')).toBe(true);
    expect(root.classList.contains('ease-slide--right')).toBe(true);
    a.destroy();
  });

  it('starts hidden with aria-hidden=true', () => {
    const a = new SlideAudit(root);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(a.isVisible()).toBe(false);
    a.destroy();
  });

  it('show() sets aria-hidden=false and is-visible class', () => {
    const a = new SlideAudit(root);
    a.show();
    expect(a.isVisible()).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    expect(root.classList.contains('is-visible')).toBe(true);
    a.destroy();
  });

  it('hide() restores aria-hidden=true', () => {
    const a = new SlideAudit(root);
    a.show();
    a.hide();
    expect(a.isVisible()).toBe(false);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    a.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('toggle flips visibility', () => {
    const a = new SlideAudit(root);
    a.toggle();
    expect(a.isVisible()).toBe(true);
    a.toggle();
    expect(a.isVisible()).toBe(false);
    a.destroy();
  });

  it('Escape hides the panel', () => {
    const a = new SlideAudit(root);
    a.show();
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(a.isVisible()).toBe(false);
    a.destroy();
  });

  it('reduced motion sets transition to none on show()', () => {
    window.matchMedia = () => ({ matches: true });
    const a = new SlideAudit(root);
    a.show();
    expect(a.isReducedMotion()).toBe(true);
    expect(root.style.transition).toBe('none');
    delete window.matchMedia;
    a.destroy();
  });

  it('report() is compliant when not animating under reduced motion', () => {
    const a = new SlideAudit(root);
    a.show();
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('defaults to left direction', () => {
    const a = new SlideAudit(root);
    expect(root.classList.contains('ease-slide--left')).toBe(true);
    a.destroy();
  });

  it('destroy() removes the keydown listener without throwing', () => {
    const a = new SlideAudit(root);
    expect(() => a.destroy()).not.toThrow();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new SlideAudit(null)).toThrow(TypeError);
    expect(() => new SlideAudit({})).toThrow(TypeError);
  });
});
