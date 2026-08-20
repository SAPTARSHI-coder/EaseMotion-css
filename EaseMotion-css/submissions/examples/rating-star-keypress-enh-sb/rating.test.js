// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { Rating } from './script.js';

describe('Rating Star Keypress Selection', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  function keydown(key) {
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('sets role=slider + tabindex=0 + aria-valuemin/max', () => {
    const r = new Rating(root, { max: 5, value: 0 });
    expect(root.getAttribute('role')).toBe('slider');
    expect(root.getAttribute('tabindex')).toBe('0');
    expect(root.getAttribute('aria-valuemin')).toBe('0');
    expect(root.getAttribute('aria-valuemax')).toBe('5');
    r.destroy();
  });

  it('creates max star buttons with aria-label', () => {
    const r = new Rating(root, { max: 5, value: 0 });
    expect(root.querySelectorAll('.ease-rating__star').length).toBe(5);
    expect(root.querySelector('[data-index="1"]').getAttribute('aria-label')).toBe('2 stars');
    r.destroy();
  });

  it('starts with value 0 (no stars active)', () => {
    const r = new Rating(root, { max: 5, value: 0 });
    expect(root.querySelectorAll('.is-active').length).toBe(0);
    r.destroy();
  });

  it('ArrowRight increases value by 1', () => {
    const r = new Rating(root, { max: 5, value: 2 });
    keydown('ArrowRight');
    expect(r.getValue()).toBe(3);
    expect(root.getAttribute('aria-valuenow')).toBe('3');
    r.destroy();
  });

  it('ArrowLeft decreases value by 1', () => {
    const r = new Rating(root, { max: 5, value: 3 });
    keydown('ArrowLeft');
    expect(r.getValue()).toBe(2);
    r.destroy();
  });

  it('Home sets value to 0, End sets to max', () => {
    const r = new Rating(root, { max: 5, value: 3 });
    keydown('Home');
    expect(r.getValue()).toBe(0);
    keydown('End');
    expect(r.getValue()).toBe(5);
    r.destroy();
  });

  it('value clamps to [0, max]', () => {
    const r = new Rating(root, { max: 5, value: 3 });
    r.setValue(-5); expect(r.getValue()).toBe(0);
    r.setValue(99); expect(r.getValue()).toBe(5);
    r.destroy();
  });

  it('clicking the 4th star sets value to 4', () => {
    const r = new Rating(root, { max: 5, value: 0 });
    root.querySelector('[data-index="3"]').click();
    expect(r.getValue()).toBe(4);
    r.destroy();
  });

  it('aria-valuetext is "N of max stars"', () => {
    const r = new Rating(root, { max: 5, value: 3 });
    expect(root.getAttribute('aria-valuetext')).toBe('3 of 5 stars');
    r.destroy();
  });

  it('active stars get aria-pressed=true', () => {
    const r = new Rating(root, { max: 5, value: 2 });
    const stars = root.querySelectorAll('.ease-rating__star');
    expect(stars[0].getAttribute('aria-pressed')).toBe('true');
    expect(stars[2].getAttribute('aria-pressed')).toBe('false');
    r.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const r = new Rating(root, { max: 5, value: 2 });
    expect(() => r.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new Rating(null)).toThrow(TypeError);
  });
});
