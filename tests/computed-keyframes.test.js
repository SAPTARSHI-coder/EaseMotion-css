/**
 * EaseMotion CSS — Computed Keyframes Test Suite
 * ============================================================
 * Automated tests for parsing complex animation DSL statements,
 * keyframe extraction, chained property preservation, timing functions,
 * shorthand compilation, and optimizer execution speed.
 *
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { parse } from '../easemotion/engine/parser.js';
import { compile, className } from '../easemotion/engine/compiler.js';
import {
  extractEmAttributes,
  extractEaseClasses,
  pruneKeyframes,
  pruneClasses,
  optimizeHtml,
} from '../easemotion/engine/optimizer.js';

// Load full animations.css core bundle for integration tests
const animationsCssPath = path.resolve(__dirname, '../core/animations.css');
const fullAnimationsCss = fs.readFileSync(animationsCssPath, 'utf8');

// ── 1. Complex Animation DSL Parsing & Shorthand Compilation ───────

describe('Computed Keyframes — DSL Parsing & Shorthand Compilation', () => {
  it('parses complex hyphenated DSL statement: ease-spin-slow-infinite-bounce-reverse', () => {
    const ast = parse('ease-spin-slow-infinite-bounce-reverse');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('spin');
    expect(ast.duration).toBe(600); // 'slow' -> 600ms
    expect(ast.easing).toBe('cubic-bezier(0.34, 1.56, 0.64, 1)'); // 'bounce' easing
    expect(ast.iterations).toBe('infinite');
    expect(ast.direction).toBe('reverse');
  });

  it('compiles complex hyphenated DSL statement into valid CSS shorthand', () => {
    const ast = parse('ease-spin-slow-infinite-bounce-reverse');
    const cls = className(ast);
    const css = compile(ast, cls);

    expect(css).toContain(`.${cls} {`);
    expect(css).toContain('animation: ease-kf-spin 600ms cubic-bezier(0.34, 1.56, 0.64, 1) infinite reverse both;');
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
    expect(css).toContain('animation-duration: 0.01ms !important;');
  });

  it('parses complex space-separated DSL with duration, spring, delay, repeat, fill', () => {
    const ast = parse('fade-in 500ms spring delay-200ms repeat-2 both');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('fade-in');
    expect(ast.duration).toBe(500);
    expect(ast.easing).toBe('cubic-bezier(0.34, 1.56, 0.64, 1)'); // spring alias
    expect(ast.delay).toBe(200);
    expect(ast.iterations).toBe(2);
    expect(ast.fill).toBe('both');

    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('animation: ease-kf-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms 2 both;');
  });

  it('parses complex DSL with linear timing, seconds duration/delay, infinite repeat, alternate direction', () => {
    const ast = parse('slide-up 1.5s linear delay-1s repeat-infinite alternate');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('slide-up');
    expect(ast.duration).toBe(1500);
    expect(ast.easing).toBe('linear');
    expect(ast.delay).toBe(1000);
    expect(ast.iterations).toBe('infinite');
    expect(ast.direction).toBe('alternate');

    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('animation: ease-kf-slide-up 1500ms linear 1000ms infinite alternate both;');
  });

  it('parses snap timing alias and alternate-reverse direction', () => {
    const ast = parse('zoom-in 800ms snap repeat-3 alternate-reverse');
    expect(ast.animation).toBe('zoom-in');
    expect(ast.easing).toBe('cubic-bezier(0.77, 0, 0.175, 1)'); // snap alias
    expect(ast.duration).toBe(800);
    expect(ast.iterations).toBe(3);
    expect(ast.direction).toBe('alternate-reverse');
  });

  it('verifies all canonical timing function keywords resolve accurately', () => {
    const timingTests = [
      { token: 'ease', expected: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      { token: 'ease-in', expected: 'cubic-bezier(0.4, 0, 1, 1)' },
      { token: 'ease-out', expected: 'cubic-bezier(0, 0, 0.2, 1)' },
      { token: 'ease-in-out', expected: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      { token: 'linear', expected: 'linear' },
      { token: 'spring', expected: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
      { token: 'bounce', expected: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
      { token: 'snap', expected: 'cubic-bezier(0.77, 0, 0.175, 1)' },
    ];

    for (const { token, expected } of timingTests) {
      const ast = parse(`spin ${token}`);
      expect(ast.easing).toBe(expected);
    }
  });

  it('verifies speed aliases (fast, medium, slow)', () => {
    expect(parse('pulse fast').duration).toBe(150);
    expect(parse('pulse medium').duration).toBe(300);
    expect(parse('pulse slow').duration).toBe(600);
  });
});

// ── 2. Keyframe Extraction & Syntax Integrity ──────────────────────

describe('Computed Keyframes — Extraction & Syntax Integrity', () => {
  it('extracts required @keyframes without CSS syntax errors', async () => {
    const html = `
      <div em="ease-spin-slow-infinite-bounce-reverse"></div>
      <section em="fade-in 500ms spring"></section>
    `;

    const { css } = await optimizeHtml(html, fullAnimationsCss);

    expect(css).toContain('@keyframes ease-kf-spin');
    expect(css).toContain('@keyframes ease-kf-fade-in');

    // Syntax check: matching curly brace counts
    const openBraces = (css.match(/\{/g) || []).length;
    const closeBraces = (css.match(/\}/g) || []).length;
    expect(openBraces).toBeGreaterThan(0);
    expect(openBraces).toBe(closeBraces);

    // No illegal syntax tokens like undefined or NaN
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('NaN');
  });

  it('prunes unused keyframes while retaining target keyframe declarations', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-bounce', 'ease-kf-shake']));

    expect(pruned).toContain('@keyframes ease-kf-bounce');
    expect(pruned).toContain('@keyframes ease-kf-shake');
    expect(pruned).not.toContain('@keyframes ease-kf-spin');
    expect(pruned).not.toContain('@keyframes ease-kf-flip');
  });

  it('retains complete keyframe frame selectors (0%, 50%, 100% / from, to)', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-bounce']));
    expect(pruned).toMatch(/0%,\s*100%/);
    expect(pruned).toMatch(/50%/);
    expect(pruned).toContain('transform: translate3d(0, -20px, 0)');
  });
});

// ── 3. Chained Property Handling ───────────────────────────────────

describe('Computed Keyframes — Chained Properties', () => {
  it('preserves chained properties (transform + opacity) in fade-in keyframes', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-fade-in']));
    expect(pruned).toContain('opacity: 0;');
    expect(pruned).toContain('transform: scale(0.95);');
    expect(pruned).toContain('opacity: 1;');
    expect(pruned).toContain('transform: scale(1);');
  });

  it('preserves chained properties (transform + opacity) in slide-up keyframes', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-slide-up']));
    expect(pruned).toContain('opacity: 0;');
    expect(pruned).toContain('transform: translate3d(0, 24px, 0);');
    expect(pruned).toContain('transform: translate3d(0, 0, 0);');
  });

  it('preserves chained properties (filter + opacity) in blur-to-focus keyframes', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-blur-to-focus']));
    expect(pruned).toContain('filter: blur(12px);');
    expect(pruned).toContain('filter: blur(0px);');
    expect(pruned).toContain('opacity: 1;');
  });

  it('preserves chained properties (box-shadow + transform) in contract-shadow-emphasis', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-contract-shadow-emphasis']));
    expect(pruned).toContain('box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);');
    expect(pruned).toContain('transform: scale(0.96);');
  });

  it('preserves chained properties (border-radius + transform) in squish-border', () => {
    const pruned = pruneKeyframes(fullAnimationsCss, new Set(['ease-kf-squish-border']));
    expect(pruned).toContain('border-radius: 12px;');
    expect(pruned).toContain('transform: scaleX(0.88);');
  });

  it('preserves multi-property animation pipeline when processed by optimizeHtml', async () => {
    const html = `<div em="fade-in 400ms"></div><div em="slide-up 600ms"></div>`;
    const { css } = await optimizeHtml(html, fullAnimationsCss);

    expect(css).toContain('ease-kf-fade-in');
    expect(css).toContain('ease-kf-slide-up');
    expect(css).toContain('transform: scale(0.95)');
    expect(css).toContain('transform: translate3d(0, 24px, 0)');
  });
});

// ── 4. Execution Speed & Optimizer Benchmarks ─────────────────────

describe('Computed Keyframes — Execution Speed & Optimizer Benchmarks', () => {
  it('executes optimizeHtml on large DOM string under performance threshold (< 50ms)', async () => {
    // Generate HTML string with 100 elements using em attributes and ease classes
    const elements = [];
    const animList = ['fade-in', 'slide-up'];

    for (let i = 0; i < 100; i++) {
      const anim = animList[i % animList.length];
      elements.push(`<div class="card ease-${anim}" em="${anim} 400ms delay-${(i % 5) * 50}ms">Item ${i}</div>`);
    }

    const largeHtml = `<main>${elements.join('\n')}</main>`;

    const start = performance.now();
    const result = await optimizeHtml(largeHtml, fullAnimationsCss);
    const duration = performance.now() - start;

    expect(result.css).toBeDefined();
    expect(result.stats.originalBytes).toBeGreaterThan(0);
    expect(result.stats.optimizedBytes).toBeLessThan(result.stats.originalBytes);
    expect(parseFloat(result.stats.savings)).toBeGreaterThan(0);

    // Performance assertion: full HTML optimization completes in under 50 milliseconds
    expect(duration).toBeLessThan(50);
  });

  it('executes 1000 pruneKeyframes operations efficiently (< 100ms total)', () => {
    const keyframeSet = new Set(['ease-kf-spin', 'ease-kf-bounce', 'ease-kf-fade-in']);

    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      pruneKeyframes(fullAnimationsCss, keyframeSet);
    }
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(100);
  });

  it('deduplicates compiled CSS for identical complex DSL expressions', () => {
    const ast1 = parse('ease-spin-slow-infinite-bounce-reverse');
    const ast2 = parse('ease-spin-slow-infinite-bounce-reverse');

    const class1 = className(ast1);
    const class2 = className(ast2);

    expect(class1).toBe(class2);

    const css1 = compile(ast1, class1);
    const css2 = compile(ast2, class2);

    expect(css1).toBe(css2);
  });

  it('calculates correct optimization byte reduction stats', async () => {
    const html = `<div class="ease-bounce"></div>`;
    const result = await optimizeHtml(html, fullAnimationsCss);

    expect(result.stats.originalBytes).toBe(new TextEncoder().encode(fullAnimationsCss).length);
    expect(result.stats.optimizedBytes).toBeLessThan(result.stats.originalBytes);
    expect(typeof result.stats.savings).toBe('string');
    expect(result.stats.savings).toMatch(/^\d+\.\d+%$/);
  });
});
