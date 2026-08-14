// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { ProgressAria, clamp } from './script.js';

describe('Progress Bar ARIA Valuenow Compliance', () => {
  let bar;

  beforeEach(() => {
    document.body.innerHTML = '';
    bar = document.createElement('div');
    const fill = document.createElement('div');
    fill.setAttribute('data-progress-bar', '');
    bar.appendChild(fill);
    document.body.appendChild(bar);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=progressbar and aria-valuemin/max', () => {
    const p = new ProgressAria(bar, { min: 0, max: 100, value: 40 });
    expect(bar.getAttribute('role')).toBe('progressbar');
    expect(bar.getAttribute('aria-valuemin')).toBe('0');
    expect(bar.getAttribute('aria-valuemax')).toBe('100');
    expect(bar.getAttribute('aria-valuenow')).toBe('40');
    p.destroy();
  });

  it('sets the fill width to the value percentage', () => {
    const p = new ProgressAria(bar, { min: 0, max: 100, value: 25 });
    expect(bar.querySelector('[data-progress-bar]').style.width).toBe('25%');
    p.destroy();
  });

  it('setValue updates aria-valuenow and width', () => {
    const p = new ProgressAria(bar, { value: 0 });
    p.setValue(60);
    expect(bar.getAttribute('aria-valuenow')).toBe('60');
    expect(bar.querySelector('[data-progress-bar]').style.width).toBe('60%');
    p.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('clamps a value above max down to max', () => {
    const p = new ProgressAria(bar, { min: 0, max: 100 });
    p.setValue(150);
    expect(p.getValue()).toBe(100);
    expect(bar.getAttribute('aria-valuenow')).toBe('100');
    p.destroy();
  });

  it('clamps a value below min up to min', () => {
    const p = new ProgressAria(bar, { min: 10, max: 90 });
    p.setValue(-5);
    expect(p.getValue()).toBe(10);
    p.destroy();
  });

  it('computes the correct percent for a non-zero min', () => {
    const p = new ProgressAria(bar, { min: 0, max: 200, value: 50 });
    expect(p.getPercent()).toBe(25);
    p.destroy();
  });

  it('defaults min=0/max=100 when not given', () => {
    const p = new ProgressAria(bar);
    expect(p.min).toBe(0);
    expect(p.max).toBe(100);
    p.destroy();
  });

  it('destroy() removes the ARIA attributes', () => {
    const p = new ProgressAria(bar, { value: 50 });
    p.destroy();
    expect(bar.getAttribute('role')).toBeNull();
    expect(bar.getAttribute('aria-valuenow')).toBeNull();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('setValue rejects non-finite values', () => {
    const p = new ProgressAria(bar, { value: 10 });
    expect(p.setValue(NaN)).toBe(false);
    expect(p.setValue(Infinity)).toBe(false);
    expect(p.getValue()).toBe(10);
    p.destroy();
  });

  it('clamp swaps min>max', () => {
    expect(clamp(5, 100, 0)).toBe(5);
  });

  it('throws without an element', () => {
    expect(() => new ProgressAria(null)).toThrow(TypeError);
    expect(() => new ProgressAria({})).toThrow(TypeError);
  });
});
