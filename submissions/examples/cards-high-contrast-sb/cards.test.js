// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { applyCardContrast, CARD_CONTRAST_TOKENS } from './script.js';

const hexToRgb = (hex) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

function ratio(fg, bg) {
  const a = [fg, bg].map((c) => {
    const v = Math.min(Math.max(0, c), 255) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const lighter = Math.max(a[0], a[1]);
  const darker = Math.min(a[0], a[1]);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('Cards High Contrast Mode', () => {
  // ── Happy path ───────────────────────────────────────────────────

  it('exports contrast tokens for bg, text, muted, border', () => {
    expect(CARD_CONTRAST_TOKENS['--ease-card-bg']).toBeTruthy();
    expect(CARD_CONTRAST_TOKENS['--ease-card-text']).toBeTruthy();
    expect(CARD_CONTRAST_TOKENS['--ease-card-muted']).toBeTruthy();
    expect(CARD_CONTRAST_TOKENS['--ease-card-border']).toBeTruthy();
  });

  it('card text vs bg meets WCAG AA (≥4.5:1)', () => {
    const r = ratio(
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-text'])),
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-bg'])),
    );
    expect(r).toBeGreaterThanOrEqual(4.5);
  });

  it('card muted text vs bg meets WCAG AA (≥4.5:1)', () => {
    const r = ratio(
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-muted'])),
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-bg'])),
    );
    expect(r).toBeGreaterThanOrEqual(4.5);
  });

  it('card border vs bg meets WCAG AA for UI (≥3:1)', () => {
    const r = ratio(
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-border'])),
      luminance(hexToRgb(CARD_CONTRAST_TOKENS['--ease-card-bg'])),
    );
    expect(r).toBeGreaterThanOrEqual(3);
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('applyCardContrast sets all tokens on the root', () => {
    document.documentElement.style.cssText = '';
    applyCardContrast();
    const style = getComputedStyle(document.documentElement);
    expect(style.getPropertyValue('--ease-card-text').trim()).toBe(
      CARD_CONTRAST_TOKENS['--ease-card-text'],
    );
    expect(style.getPropertyValue('--ease-card-border').trim()).toBe(
      CARD_CONTRAST_TOKENS['--ease-card-border'],
    );
  });

  it('applyCardContrast targets a custom root', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    applyCardContrast(el);
    expect(el.style.getPropertyValue('--ease-card-bg')).toBe(
      CARD_CONTRAST_TOKENS['--ease-card-bg'],
    );
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('applyCardContrast throws without a root element', () => {
    expect(() => applyCardContrast(null)).toThrow(TypeError);
    expect(() => applyCardContrast({})).toThrow(TypeError);
  });
});
