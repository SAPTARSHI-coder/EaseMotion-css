/**
 * EaseMotion CSS — Engine Unit Tests (Fade Out Submissions)
 * ============================================================
 * Tests for parser.js and compiler.js targeting Fade Out.
 * Submitted via submissions/ due to core freeze.
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { parse } from '../../../easemotion/engine/parser.js';
import { compile, className } from '../../../easemotion/engine/compiler.js';

describe('Fade Out keyframes (Submission)', () => {
  it('successfully parses valid Fade Out keyframes', () => {
    const ast = parse('fade-out 400ms ease-in-out delay-100ms repeat-2');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('fade-out');
    expect(ast.duration).toBe(400);
    expect(ast.easing).toBe('cubic-bezier(0.4, 0, 0.2, 1)');
    expect(ast.delay).toBe(100);
    expect(ast.iterations).toBe(2);
  });

  it('generates AST matching expected structure', () => {
    const ast = parse('fade-out');
    expect(ast).toEqual({
      animation: 'fade-out',
      duration: 300,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      delay: 0,
      iterations: 1,
      fill: 'both',
      direction: 'normal'
    });
  });

  it('generates compiler output successfully', () => {
    const ast = parse('fade-out 500ms');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain(`.${cls}`);
    expect(css).toContain('ease-kf-fade-out');
    expect(css).toContain('500ms');
    expect(css).not.toContain('ease-kf-fade-in');
  });

  it('rejects malformed keyframe syntax / invalid input', () => {
    expect(parse('')).toBeNull();
    expect(parse('   ')).toBeNull();
    expect(parse(null)).toBeNull();
    
    // An animation string without a valid animation name should be rejected
    expect(parse('500ms ease-out')).toBeNull();
  });

  it('handles missing closing braces gracefully (ignored tokens)', () => {
    const ast = parse('fade-out 500ms { missing closing braces');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('fade-out');
    expect(ast.duration).toBe(500);
  });

  it('validates duplicate percentage handling by using last token', () => {
    const ast = parse('fade-out 200ms 400ms delay-100ms delay-200ms');
    expect(ast.duration).toBe(400);
    expect(ast.delay).toBe(200);
  });
});
