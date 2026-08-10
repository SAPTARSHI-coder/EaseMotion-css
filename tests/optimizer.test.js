/**
 * EaseMotion CSS — Engine Unit Tests
 * ============================================================
 * Tests for optimizer.js
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { extractEmAttributes, extractEaseClasses, pruneKeyframes, pruneClasses } from '../easemotion/engine/optimizer.js';

// ── Optimizer ─────────────────────────────────────────────────────

describe('optimizer — extractEmAttributes()', () => {
  it('extracts single em attribute', () => {
    const html = `<div em="fade-in 500ms"></div>`;
    expect(extractEmAttributes(html)).toEqual(['fade-in 500ms']);
  });

  it('extracts multiple em attributes', () => {
    const html = `<div em="fade-in"></div><p em="slide-up delay-100ms"></p>`;
    const values = extractEmAttributes(html);
    expect(values).toHaveLength(2);
    expect(values).toContain('fade-in');
    expect(values).toContain('slide-up delay-100ms');
  });

  it('returns empty array when no em attributes', () => {
    const html = `<div class="ease-fade-in"></div>`;
    expect(extractEmAttributes(html)).toHaveLength(0);
  });
});

describe('optimizer — extractEaseClasses()', () => {
  it('finds ease-* classes in HTML', () => {
    const html = `<div class="ease-fade-in ease-slide-up"></div>`;
    const classes = extractEaseClasses(html);
    expect(classes.has('ease-fade-in')).toBe(true);
    expect(classes.has('ease-slide-up')).toBe(true);
  });

  it('ignores non-ease classes', () => {
    const html = `<div class="container flex gap-4"></div>`;
    const classes = extractEaseClasses(html);
    expect(classes.size).toBe(0);
  });
});

describe('optimizer — pruneKeyframes()', () => {
  const css = `
    @keyframes ease-kf-fade-in { from { opacity:0 } to { opacity:1 } }
    @keyframes ease-kf-slide-up { from { transform:translateY(24px) } to { transform:none } }
  `;

  it('keeps used keyframes', () => {
    const result = pruneKeyframes(css, new Set(['ease-kf-fade-in']));
    expect(result).toContain('ease-kf-fade-in');
  });

  it('removes unused keyframes', () => {
    const result = pruneKeyframes(css, new Set(['ease-kf-fade-in']));
    expect(result).not.toContain('ease-kf-slide-up');
  });
});

describe('optimizer — pruneClasses()', () => {
  const css = `
    .ease-fade-in { animation: ease-kf-fade-in 300ms; }
    .ease-slide-up { animation: ease-kf-slide-up 300ms; }
  `;

  it('keeps used classes', () => {
    const result = pruneClasses(css, new Set(['ease-fade-in']));
    expect(result).toContain('.ease-fade-in');
  });

  it('removes unused classes', () => {
    const result = pruneClasses(css, new Set(['ease-fade-in']));
    expect(result).not.toContain('.ease-slide-up');
  });
});
