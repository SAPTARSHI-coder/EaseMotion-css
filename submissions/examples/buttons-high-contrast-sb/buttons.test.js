// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { applyButtonContrast, contrastRatio, BUTTON_CONTRAST_TOKENS } from './script.js';

const hexToRgb = (hex) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = ([r, g, b]) =>
  0.2126 * r + 0.7152 * g + 0.0722 * b;

describe('Buttons High Contrast Mode', () => {
  // ── Happy path ───────────────────────────────────────────────────

  it('exports contrast tokens with bg, text, hover, focus ring', () => {
    expect(BUTTON_CONTRAST_TOKENS['--ease-btn-bg']).toBeTruthy();
    expect(BUTTON_CONTRAST_TOKENS['--ease-btn-text']).toBeTruthy();
    expect(BUTTON_CONTRAST_TOKENS['--ease-btn-bg-hover']).toBeTruthy();
    expect(BUTTON_CONTRAST_TOKENS['--ease-btn-focus-ring']).toBeTruthy();
  });

  it('button bg vs text meets WCAG AA (≥4.5:1)', () => {
    const bg = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-bg']);
    const text = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-text']);
    const ratio = contrastRatio(luminance(bg), luminance(text));
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });

  it('button hover bg vs text meets WCAG AA (≥4.5:1)', () => {
    const bg = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-bg-hover']);
    const text = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-text']);
    const ratio = contrastRatio(luminance(bg), luminance(text));
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });

  it('focus ring vs button bg meets WCAG AA (≥3:1 for UI)', () => {
    const ring = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-focus-ring']);
    const bg = hexToRgb(BUTTON_CONTRAST_TOKENS['--ease-btn-bg']);
    const ratio = contrastRatio(luminance(ring), luminance(bg));
    expect(ratio).toBeGreaterThanOrEqual(3);
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('applyButtonContrast sets all tokens on the root', () => {
    document.documentElement.style.cssText = '';
    applyButtonContrast();
    const style = getComputedStyle(document.documentElement);
    expect(style.getPropertyValue('--ease-btn-bg').trim()).toBe(
      BUTTON_CONTRAST_TOKENS['--ease-btn-bg'],
    );
    expect(style.getPropertyValue('--ease-btn-text').trim()).toBe(
      BUTTON_CONTRAST_TOKENS['--ease-btn-text'],
    );
  });

  it('applyButtonContrast targets a custom root', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    applyButtonContrast(el);
    expect(el.style.getPropertyValue('--ease-btn-bg')).toBe(
      BUTTON_CONTRAST_TOKENS['--ease-btn-bg'],
    );
  });

  it('contrastRatio clamps out-of-range luminance', () => {
    expect(contrastRatio(-20, 300)).toBeGreaterThan(0);
    expect(contrastRatio(255, 255)).toBeCloseTo(1, 1);
  });

  it('contrastRatio returns 21 for pure black vs white', () => {
    expect(contrastRatio(0, 255)).toBeCloseTo(21, 0);
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('applyButtonContrast throws without a root element', () => {
    expect(() => applyButtonContrast(null)).toThrow(TypeError);
    expect(() => applyButtonContrast({})).toThrow(TypeError);
  });
});
