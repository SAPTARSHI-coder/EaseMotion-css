import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('EaseMotion-css Regression Tests', () => {
  let css;

  beforeAll(() => {
    const slidePath = resolve(__dirname, '../easemotion/slide.css');
    const fadePath = resolve(__dirname, '../easemotion/fade.css');
    css = readFileSync(slidePath, 'utf8') + readFileSync(fadePath, 'utf8');
  });

  it('Issue #403: ease-fade-in should not animate width/height', () => {
    const fadeKeyframes = css.match(/@keyframes ease-kf-fade-in\s*\{([\s\S]+?)\}/);
    expect(fadeKeyframes).toBeTruthy();
    const content = fadeKeyframes[1];
    expect(content).not.toContain('width');
    expect(content).not.toContain('height');
    expect(content).toContain('transform: scale(');
  });

  it('Issue #404: ease-slide-up and ease-slide-down combination should reset animation', () => {
    expect(css).toContain('.ease-slide-up.ease-slide-down');
    const resetRule = css.match(/\.ease-slide-up\.ease-slide-down\s*\{([\s\S]+?)\}/);
    expect(resetRule).toBeTruthy();
    const content = resetRule[1];
    expect(content).toContain('animation: none');
    expect(content).toContain('transform: translateY(0)');
  });

  it('Command Palette: component should have required classes', () => {
    const cpPath = resolve(__dirname, '../components/command-palette.css');
    const cpCss = readFileSync(cpPath, 'utf8');
    expect(cpCss).toContain('.ease-command-palette');
    expect(cpCss).toContain('.ease-command-palette-overlay');
    expect(cpCss).toContain('.ease-command-palette-item');
    expect(cpCss).toContain('.ease-command-palette-kbd');
  });
});
