/**
 * EaseMotion CSS — Slide Up Keyframes Unit Tests
 * ============================================================
 * Tests for parser.js and compiler.js focused on the
 * "slide-up" animation keyframe lifecycle.
 *
 * Run: npx vitest run --dir submissions/examples/slide-up-keyframes-tests
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { parse }             from '../../../../easemotion/engine/parser.js';
import { compile, className } from '../../../../easemotion/engine/compiler.js';

describe('parser — slide-up keyframes', () => {
  it('parses slide-up animation name', () => {
    const ast = parse('slide-up');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('slide-up');
  });

  it('parses slide-up with duration in ms', () => {
    const ast = parse('slide-up 600ms');
    expect(ast.duration).toBe(600);
  });

  it('parses slide-up with duration in seconds', () => {
    const ast = parse('slide-up 1.2s');
    expect(ast.duration).toBe(1200);
  });

  it('uses default duration for bare slide-up', () => {
    const ast = parse('slide-up');
    expect(ast.duration).toBe(300);
  });

  it('parses slide-up with ease-out easing', () => {
    const ast = parse('slide-up ease-out');
    expect(ast.easing).toBe('cubic-bezier(0, 0, 0.2, 1)');
  });

  it('parses slide-up with spring easing', () => {
    const ast = parse('slide-up spring');
    expect(ast.easing).toBe('cubic-bezier(0.34, 1.56, 0.64, 1)');
  });

  it('parses slide-up with linear easing', () => {
    const ast = parse('slide-up linear');
    expect(ast.easing).toBe('linear');
  });

  it('parses slide-up with ease-in easing', () => {
    const ast = parse('slide-up ease-in');
    expect(ast.easing).toBe('cubic-bezier(0.4, 0, 1, 1)');
  });

  it('parses slide-up with delay', () => {
    const ast = parse('slide-up delay-300ms');
    expect(ast.delay).toBe(300);
  });

  it('parses slide-up with delay in seconds', () => {
    const ast = parse('slide-up delay-0.5s');
    expect(ast.delay).toBe(500);
  });

  it('parses slide-up with repeat count', () => {
    const ast = parse('slide-up repeat-3');
    expect(ast.iterations).toBe(3);
  });

  it('parses slide-up with repeat-infinite', () => {
    const ast = parse('slide-up repeat-infinite');
    expect(ast.iterations).toBe('infinite');
  });

  it('parses slide-up with fill mode', () => {
    const ast = parse('slide-up both');
    expect(ast.fill).toBe('both');
  });

  it('parses slide-up with direction', () => {
    const ast = parse('slide-up alternate');
    expect(ast.direction).toBe('alternate');
  });

  it('parses slide-up with all modifiers', () => {
    const ast = parse('slide-up 800ms ease-out delay-200ms repeat-3 both alternate');
    expect(ast.animation).toBe('slide-up');
    expect(ast.duration).toBe(800);
    expect(ast.easing).toBe('cubic-bezier(0, 0, 0.2, 1)');
    expect(ast.delay).toBe(200);
    expect(ast.iterations).toBe(3);
    expect(ast.fill).toBe('both');
    expect(ast.direction).toBe('alternate');
  });

  it('parses slide-up case-insensitively', () => {
    const ast = parse('SLIDE-UP 500MS');
    expect(ast.animation).toBe('slide-up');
    expect(ast.duration).toBe(500);
  });

  it('returns null for em-like string without slide-up', () => {
    expect(parse('not-slide-up')).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(parse('')).toBeNull();
  });

  it('returns null for null input', () => {
    expect(parse(null)).toBeNull();
  });
});

describe('compiler — slide-up keyframes', () => {
  it('generates class name starting with _em_', () => {
    const ast = parse('slide-up 500ms');
    const cls = className(ast);
    expect(cls).toMatch(/^_em_[0-9a-f]{6}$/);
  });

  it('generates deterministic class name for same input', () => {
    const ast1 = parse('slide-up 400ms ease-out');
    const ast2 = parse('slide-up 400ms ease-out');
    expect(className(ast1)).toBe(className(ast2));
  });

  it('generates different class names for different durations', () => {
    const a = parse('slide-up 300ms');
    const b = parse('slide-up 500ms');
    expect(className(a)).not.toBe(className(b));
  });

  it('generates different class names for different easings', () => {
    const a = parse('slide-up ease-out');
    const b = parse('slide-up spring');
    expect(className(a)).not.toBe(className(b));
  });

  it('produces valid CSS for a simple slide-up', () => {
    const ast = parse('slide-up');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain(`.${cls}`);
    expect(css).toContain('animation:');
    expect(css).toContain('ease-kf-slide-up');
  });

  it('produces CSS with correct duration', () => {
    const ast = parse('slide-up 750ms');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('750ms');
  });

  it('produces CSS with correct easing', () => {
    const ast = parse('slide-up spring');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('cubic-bezier(0.34, 1.56, 0.64, 1)');
  });

  it('includes delay when set', () => {
    const ast = parse('slide-up delay-200ms');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('200ms');
  });

  it('includes iteration count when set', () => {
    const ast = parse('slide-up repeat-3');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('3');
  });

  it('includes infinite iteration in CSS', () => {
    const ast = parse('slide-up repeat-infinite');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('infinite');
  });

  it('includes fill mode when set', () => {
    const ast = parse('slide-up both');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('both');
  });

  it('includes direction when set', () => {
    const ast = parse('slide-up alternate');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('alternate');
  });

  it('includes prefers-reduced-motion guard', () => {
    const ast = parse('slide-up');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('prefers-reduced-motion');
    expect(css).toContain('0.01ms');
  });

  it('references ease-kf-slide-up keyframe', () => {
    const ast = parse('slide-up');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('ease-kf-slide-up');
  });

  it('produces valid CSS syntax with semicolons', () => {
    const ast = parse('slide-up 500ms ease-out');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain(';');
    expect(css).toContain('{');
    expect(css).toContain('}');
  });

  it('returns empty string for unknown animation', () => {
    const ast = { animation: 'invalid', duration: 300, easing: 'linear', delay: 0, iterations: 1, fill: 'none', direction: 'normal' };
    const css = compile(ast, '_em_bad01');
    expect(css).toBe('');
  });
});
