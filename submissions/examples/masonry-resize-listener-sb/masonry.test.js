// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { calcColumns, MasonryColumns } from './script.js';

describe('Masonry Column Calculation Resize Listener', () => {
  let el;

  beforeEach(() => {
    vi.useFakeTimers();
    el = document.createElement('div');
    Object.defineProperty(el, 'clientWidth', { configurable: true, value: 960 });
    document.body.appendChild(el);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('calcColumns returns 1 column when the container is narrower than min', () => {
    expect(calcColumns(200, 320, 16)).toBe(1);
  });

  it('calcColumns increases with available width', () => {
    expect(calcColumns(320, 320, 0)).toBe(1);
    expect(calcColumns(640, 320, 0)).toBe(2);
    expect(calcColumns(960, 320, 0)).toBe(3);
  });

  it('accounts for the gap when computing columns', () => {
    // 2 cols: 2*320 + 1*16 = 656 <= 660 ; 3 cols: 3*320 + 2*16 = 992 > 660
    expect(calcColumns(660, 320, 16)).toBe(2);
  });

  it('the constructor applies the computed columns to the element', () => {
    const m = new MasonryColumns(el, { minColumnWidth: 320, gap: 0 });
    expect(el.getAttribute('data-masonry-columns')).toBe('3');
    expect(el.style.getPropertyValue('--ease-masonry-columns')).toBe('3');
    m.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('recalculates columns after a debounced resize', () => {
    const m = new MasonryColumns(el, { minColumnWidth: 320, gap: 0, debounceMs: 100 });
    Object.defineProperty(el, 'clientWidth', { configurable: true, value: 1280 });
    window.dispatchEvent(new window.Event('resize'));
    // not yet (debounced)
    expect(el.getAttribute('data-masonry-columns')).toBe('3');
    vi.advanceTimersByTime(100);
    expect(el.getAttribute('data-masonry-columns')).toBe('4');
    m.destroy();
  });

  it('does not recalc before the debounce window elapses', () => {
    const m = new MasonryColumns(el, { minColumnWidth: 320, gap: 0, debounceMs: 100 });
    Object.defineProperty(el, 'clientWidth', { configurable: true, value: 1280 });
    window.dispatchEvent(new window.Event('resize'));
    vi.advanceTimersByTime(99);
    expect(el.getAttribute('data-masonry-columns')).toBe('3');
    m.destroy();
  });

  it('destroy() detaches the resize listener', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const m = new MasonryColumns(el);
    m.destroy();
    expect(removeSpy).toHaveBeenCalled();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('calcColumns returns 1 for non-finite/negative width', () => {
    expect(calcColumns(NaN, 320, 0)).toBe(1);
    expect(calcColumns(-1, 320, 0)).toBe(1);
    expect(calcColumns(0, 320, 0)).toBe(1);
  });

  it('calcColumns returns 1 for non-finite/negative minColumnWidth', () => {
    expect(calcColumns(960, NaN, 0)).toBe(1);
    expect(calcColumns(960, -1, 0)).toBe(1);
  });

  it('calcColumns coerces a negative gap to 0', () => {
    expect(calcColumns(640, 320, -10)).toBe(2);
  });

  it('the constructor throws without a valid element', () => {
    expect(() => new MasonryColumns(null)).toThrow(TypeError);
    expect(() => new MasonryColumns({})).toThrow(TypeError);
  });
});
