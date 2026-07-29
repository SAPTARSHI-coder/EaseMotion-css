import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const animationsPath = resolve(__dirname, '../../core/animations.css');
const animationsCss = readFileSync(animationsPath, 'utf8');

describe('EaseMotion core animation keyframes', () => {

  const expectedKeyframes = [
    'ease-kf-fade-in',
    'ease-kf-fade-out',
    'ease-kf-slide-up',
    'ease-kf-slide-down',
    'ease-kf-slide-in-left',
    'ease-kf-slide-in-right',
    'ease-kf-zoom-in',
    'ease-kf-flip',
    'ease-kf-bounce',
    'ease-kf-rotate',
    'ease-kf-pulse',
    'ease-kf-ping',
    'ease-kf-shake',
  ];

  for (const kf of expectedKeyframes) {
    it(`should define @keyframes ${kf}`, () => {
      const regex = new RegExp(`@keyframes\\s+${kf}\\s*\\{`);
      expect(animationsCss).toMatch(regex);
    });
  }

  it('should have all 13 core keyframes defined without duplicates', () => {
    const regex = /@keyframes\s+(ease-kf-(?:fade-in|fade-out|slide-up|slide-down|slide-in-left|slide-in-right|zoom-in|flip|bounce|rotate|pulse|ping|shake))\s*\{/g;
    const matches = animationsCss.match(regex);
    expect(matches).toHaveLength(13);
  });

  it('should have ease-kf-fade-in with opacity 0 to 1 transition', () => {
    const block = extractKeyframe('ease-kf-fade-in', animationsCss);
    expect(block).toContain('opacity: 0');
    expect(block).toContain('opacity: 1');
    expect(block).toContain('transform');
  });

  it('should have ease-kf-fade-out with opacity 1 to 0', () => {
    const block = extractKeyframe('ease-kf-fade-out', animationsCss);
    expect(block).toContain('opacity: 1');
    expect(block).toContain('opacity: 0');
  });

  it('should have ease-kf-slide-up with translateY', () => {
    const block = extractKeyframe('ease-kf-slide-up', animationsCss);
    expect(block).toContain('translate3d(0,24px,0)');
    expect(block).toContain('translate3d(0,0,0)');
  });

  it('should have ease-kf-slide-down with translateY negative start', () => {
    const block = extractKeyframe('ease-kf-slide-down', animationsCss);
    expect(block).toContain('translate3d(0,-24px,0)');
    expect(block).toContain('translate3d(0,0,0)');
  });

  it('should have ease-kf-slide-in-left with translateX negative start', () => {
    const block = extractKeyframe('ease-kf-slide-in-left', animationsCss);
    expect(block).toContain('translate3d(-32px,0,0)');
    expect(block).toContain('translate3d(0,0,0)');
  });

  it('should have ease-kf-slide-in-right with translateX positive start', () => {
    const block = extractKeyframe('ease-kf-slide-in-right', animationsCss);
    expect(block).toContain('translate3d(32px,0,0)');
    expect(block).toContain('translate3d(0,0,0)');
  });

  it('should have ease-kf-zoom-in with scale transform', () => {
    const block = extractKeyframe('ease-kf-zoom-in', animationsCss);
    expect(block).toContain('scale');
    expect(block).toContain('opacity: 0');
    expect(block).toContain('opacity: 1');
  });

  it('should have ease-kf-flip with rotateY perspective', () => {
    const block = extractKeyframe('ease-kf-flip', animationsCss);
    expect(block).toContain('rotateY');
    expect(block).toContain('perspective');
  });

  it('should have ease-kf-bounce with translateY bounce pattern', () => {
    const block = extractKeyframe('ease-kf-bounce', animationsCss);
    expect(block).toContain('translate');
    expect(block).toContain('cubic-bezier');
    const pctLines = block.match(/\d+%/g);
    expect(pctLines.length).toBeGreaterThanOrEqual(3);
  });

  it('should have ease-kf-rotate with full 360deg rotation', () => {
    const block = extractKeyframe('ease-kf-rotate', animationsCss);
    expect(block).toContain('transform: rotate(0deg)');
    expect(block).toContain('transform: rotate(360deg)');
  });

  it('should have ease-kf-pulse with opacity oscillation', () => {
    const block = extractKeyframe('ease-kf-pulse', animationsCss);
    expect(block).toContain('opacity: 1');
    expect(block).toContain('opacity: 0.45');
    expect(block).toContain('opacity: 1');
  });

  it('should have ease-kf-ping with scale transform', () => {
    const block = extractKeyframe('ease-kf-ping', animationsCss);
    expect(block).toContain('transform: scale(1)');
    expect(block).toContain('transform: scale(2)');
    expect(block).toContain('opacity: 0');
  });

  it('should have ease-kf-shake with horizontal translateX oscillation', () => {
    const block = extractKeyframe('ease-kf-shake', animationsCss);
    expect(block).toContain('translateX');
    const matches = block.match(/translateX/g);
    expect(matches.length).toBeGreaterThanOrEqual(3);
  });

  it('should have each expected keyframe appear exactly once (no duplicates)', () => {
    for (const kf of expectedKeyframes) {
      const regex = new RegExp(`@keyframes\\s+${kf}`, 'g');
      const matches = animationsCss.match(regex);
      expect(matches).toHaveLength(1);
    }
  });

  it('should include a prefers-reduced-motion block', () => {
    expect(animationsCss).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('should disable animations for all ease- classes under prefers-reduced-motion', () => {
    const mediaMatch = animationsCss.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([^}]+)\}/);
    expect(mediaMatch).not.toBeNull();
    const block = mediaMatch[1];
    expect(block).toContain('animation: none');
    expect(block).toContain('animation-duration: 0s');
  });
});

function extractKeyframe(name, css) {
  const regex = new RegExp(`@keyframes\\s+${name}\\s*\\{([^}]+(?:\\{[^}]+\\}[^}]*)*)\\}`, 's');
  const match = css.match(regex);
  if (!match) return '';
  return match[0];
}
