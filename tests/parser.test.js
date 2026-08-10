/**
 * EaseMotion CSS — Engine Unit Tests
 * ============================================================
 * Tests for parser.js
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import { parse }             from '../easemotion/engine/parser.js';

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
