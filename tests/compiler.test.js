/**
 * EaseMotion CSS — Engine Unit Tests
 * ============================================================
 * Tests for compiler.js
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { parse }             from '../easemotion/engine/parser.js';
import { compile, className } from '../easemotion/engine/compiler.js';

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
