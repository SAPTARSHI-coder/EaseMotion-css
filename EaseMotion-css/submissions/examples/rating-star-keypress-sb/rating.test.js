// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { RatingKeys } from './script.js';

describe('Rating Component Star Keypress Selection', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    container.setAttribute('tabindex', '0');
    document.body.appendChild(container);
  });

  function key(k) {
    container.dispatchEvent(new window.KeyboardEvent('keydown', { key: k, bubbles: true }));
  }

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=slider with aria-valuemin/max/now', () => {
    const r = new RatingKeys(container, { stars: 5 });
    expect(container.getAttribute('role')).toBe('slider');
    expect(container.getAttribute('aria-valuemin')).toBe('0');
    expect(container.getAttribute('aria-valuemax')).toBe('5');
    expect(container.getAttribute('aria-valuenow')).toBe('0');
    r.destroy();
  });

  it('ArrowRight increases the preview', () => {
    const r = new RatingKeys(container, { stars: 5 });
    key('ArrowRight');
    expect(r.preview).toBe(1);
    expect(container.querySelectorAll('.is-active')).toHaveLength(1);
    r.destroy();
  });

  it('ArrowLeft decreases the preview', () => {
    const r = new RatingKeys(container, { stars: 5 });
    r.setValue(3);
    key('ArrowLeft');
    expect(r.preview).toBe(2);
    r.destroy();
  });

  it('Enter commits the previewed value to the value', () => {
    const r = new RatingKeys(container, { stars: 5 });
    key('ArrowRight');
    key('ArrowRight');
    key('Enter');
    expect(r.getValue()).toBe(2);
    expect(container.getAttribute('aria-valuenow')).toBe('2');
    r.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('ArrowUp also increases; ArrowDown decreases', () => {
    const r = new RatingKeys(container, { stars: 5 });
    key('ArrowUp');
    expect(r.preview).toBe(1);
    key('ArrowDown');
    expect(r.preview).toBe(0);
    r.destroy();
  });

  it('Space commits the previewed value', () => {
    const r = new RatingKeys(container, { stars: 5 });
    key('ArrowRight');
    key('ArrowRight');
    key('ArrowRight');
    key(' ');
    expect(r.getValue()).toBe(3);
    r.destroy();
  });

  it('preview clamps at max and 0', () => {
    const r = new RatingKeys(container, { stars: 3 });
    key('ArrowRight');
    key('ArrowRight');
    key('ArrowRight');
    key('ArrowRight');
    expect(r.preview).toBe(3);
    key('ArrowLeft');
    key('ArrowLeft');
    key('ArrowLeft');
    key('ArrowLeft');
    expect(r.preview).toBe(0);
    r.destroy();
  });

  it('Enter with no preview commits the current value unchanged', () => {
    const r = new RatingKeys(container, { stars: 5 });
    r.setValue(4);
    key('Enter');
    expect(r.getValue()).toBe(4);
    r.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('setValue rejects out-of-range / non-number', () => {
    const r = new RatingKeys(container, { stars: 5 });
    expect(r.setValue(-1)).toBe(false);
    expect(r.setValue(6)).toBe(false);
    expect(r.setValue(NaN)).toBe(false);
    expect(r.getValue()).toBe(0);
    r.destroy();
  });

  it('throws without a valid container', () => {
    expect(() => new RatingKeys(null)).toThrow(TypeError);
    expect(() => new RatingKeys({})).toThrow(TypeError);
  });
});
