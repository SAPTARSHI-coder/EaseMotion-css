/**
 * EaseMotion CSS — Engine Unit Tests
 * ============================================================
 * Tests for parser.js, compiler.js, and optimizer.js
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { parse }             from '../easemotion/engine/parser.js';
import { compile, className } from '../easemotion/engine/compiler.js';
import { extractEmAttributes, extractEaseClasses, pruneKeyframes, pruneClasses } from '../easemotion/engine/optimizer.js';

// ── Parser ────────────────────────────────────────────────────────

describe('parser — parse()', () => {
  it('parses a basic animation name', () => {
    const ast = parse('fade-in');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('fade-in');
  });

  it('returns null for unknown animation name', () => {
    expect(parse('fly-away')).toBeNull();
    expect(parse('')).toBeNull();
    expect(parse(null)).toBeNull();
  });

  it('parses duration in ms', () => {
    const ast = parse('fade-in 750ms');
    expect(ast.duration).toBe(750);
  });

  it('parses duration in seconds', () => {
    const ast = parse('slide-up 1.5s');
    expect(ast.duration).toBe(1500);
  });

  it('uses default duration of 300ms when none specified', () => {
    const ast = parse('bounce');
    expect(ast.duration).toBe(300);
  });

  it('parses easing keyword', () => {
    const ast = parse('fade-in ease-out');
    expect(ast.easing).toBe('cubic-bezier(0, 0, 0.2, 1)');
  });

  it('parses spring easing alias', () => {
    const ast = parse('slide-up spring');
    expect(ast.easing).toBe('cubic-bezier(0.34, 1.56, 0.64, 1)');
  });

  it('parses delay modifier', () => {
    const ast = parse('fade-in delay-200ms');
    expect(ast.delay).toBe(200);
  });

  it('parses delay in seconds', () => {
    const ast = parse('fade-in delay-1s');
    expect(ast.delay).toBe(1000);
  });

  it('parses repeat modifier', () => {
    const ast = parse('bounce repeat-3');
    expect(ast.iterations).toBe(3);
  });

  it('parses repeat-infinite', () => {
    const ast = parse('spin repeat-infinite');
    expect(ast.iterations).toBe('infinite');
  });

  it('parses all tokens together', () => {
    const ast = parse('slide-up 800ms ease-out delay-100ms repeat-2 both');
    expect(ast.animation).toBe('slide-up');
    expect(ast.duration).toBe(800);
    expect(ast.easing).toBe('cubic-bezier(0, 0, 0.2, 1)');
    expect(ast.delay).toBe(100);
    expect(ast.iterations).toBe(2);
    expect(ast.fill).toBe('both');
  });

  it('is case-insensitive', () => {
    const ast = parse('FADE-IN 500MS EASE-OUT');
    expect(ast.animation).toBe('fade-in');
    expect(ast.duration).toBe(500);
  });
});

// ── Compiler ──────────────────────────────────────────────────────

describe('compiler — className()', () => {
  it('returns a string starting with _em_', () => {
    const ast = parse('fade-in 500ms ease-out');
    const cls = className(ast);
    expect(cls).toMatch(/^_em_[0-9a-f]{6}$/);
  });

  it('is deterministic — same input always same output', () => {
    const ast1 = parse('slide-up 300ms ease');
    const ast2 = parse('slide-up 300ms ease');
    expect(className(ast1)).toBe(className(ast2));
  });

  it('differs for different durations', () => {
    const a = parse('fade-in 300ms');
    const b = parse('fade-in 500ms');
    expect(className(a)).not.toBe(className(b));
  });
});

describe('compiler — compile()', () => {
  it('returns a valid CSS rule string', () => {
    const ast = parse('fade-in 500ms ease-out');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain(`.${cls}`);
    expect(css).toContain('animation:');
    expect(css).toContain('ease-kf-fade-in');
    expect(css).toContain('500ms');
  });

  it('includes prefers-reduced-motion guard', () => {
    const ast = parse('fade-in');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('prefers-reduced-motion');
    expect(css).toContain('0.01ms');
  });

  it('includes delay when set', () => {
    const ast = parse('slide-up delay-200ms');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('200ms');
  });

  it('returns empty string for unknown animation', () => {
    const ast = { animation: 'nonexistent', duration: 300, easing: 'linear', delay: 0, iterations: 1, fill: 'both', direction: 'normal' };
    const css = compile(ast, '_em_test01');
    expect(css).toBe('');
  });
});

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
