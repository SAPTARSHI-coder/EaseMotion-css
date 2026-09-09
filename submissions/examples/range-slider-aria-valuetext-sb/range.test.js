// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { RangeAria } from './script.js';

describe('Range Slider ARIA Valuetext', () => {
  let input;

  beforeEach(() => {
    document.body.innerHTML = '';
    input = document.createElement('input');
    input.type = 'range';
    input.min = '0';
    input.max = '5';
    input.value = '0';
    document.body.appendChild(input);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=slider and aria-valuemin/max/now', () => {
    const r = new RangeAria(input);
    expect(input.getAttribute('role')).toBe('slider');
    expect(input.getAttribute('aria-valuemin')).toBe('0');
    expect(input.getAttribute('aria-valuemax')).toBe('5');
    expect(input.getAttribute('aria-valuenow')).toBe('0');
    r.destroy();
  });

  it('aria-valuetext defaults to "value of max"', () => {
    const r = new RangeAria(input);
    r.setValue(3);
    expect(input.getAttribute('aria-valuetext')).toBe('3 of 5');
    r.destroy();
  });

  it('a custom formatter controls aria-valuetext', () => {
    const r = new RangeAria(input, {
      formatter: (v) => ['Off', 'Low', 'Medium', 'High'][v] || 'High',
    });
    r.setValue(2);
    expect(input.getAttribute('aria-valuetext')).toBe('Medium');
    r.destroy();
  });

  it('input event re-renders aria-valuenow/valuetext', () => {
    const r = new RangeAria(input);
    input.value = '4';
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
    expect(input.getAttribute('aria-valuenow')).toBe('4');
    expect(input.getAttribute('aria-valuetext')).toBe('4 of 5');
    r.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('setValue clamps above max and below min', () => {
    const r = new RangeAria(input);
    r.setValue(99);
    expect(r.getValue()).toBe(5);
    r.setValue(-10);
    expect(r.getValue()).toBe(0);
    r.destroy();
  });

  it('a formatter that throws falls back to the raw value', () => {
    const r = new RangeAria(input, { formatter: () => { throw new Error('boom'); } });
    r.setValue(2);
    expect(input.getAttribute('aria-valuetext')).toBe('2');
    r.destroy();
  });

  it('defaults min=0/max=100 when attributes are missing', () => {
    const bare = document.createElement('input');
    bare.type = 'range';
    bare.value = '50';
    const r = new RangeAria(bare);
    expect(bare.getAttribute('aria-valuemin')).toBe('0');
    expect(bare.getAttribute('aria-valuemax')).toBe('100');
    r.destroy();
  });

  it('getValuetext returns the current aria-valuetext', () => {
    const r = new RangeAria(input);
    r.setValue(1);
    expect(r.getValuetext()).toBe('1 of 5');
    r.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('setValue rejects non-finite values', () => {
    const r = new RangeAria(input);
    expect(r.setValue(NaN)).toBe(false);
    expect(r.setValue('abc')).toBe(false);
    expect(r.getValue()).toBe(0);
    r.destroy();
  });

  it('throws without an input element', () => {
    expect(() => new RangeAria(null)).toThrow(TypeError);
    expect(() => new RangeAria({})).toThrow(TypeError);
  });
});
