import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, extname, join } from 'node:path';

describe('EaseMotion-css Smoke Tests', () => {
  let dom;
  let document;
  let css;

  function loadCssDir(dir) {
    let result = '';
    if (!existsSync(dir)) return result;
    const files = readdirSync(dir);
    files
      .filter(f => extname(f) === '.css')
      .sort()
      .forEach(f => {
        result += readFileSync(join(dir, f), 'utf8') + '\n';
      });
    return result;
  }

  beforeAll(() => {
    const rootDir = resolve(__dirname, '../../..');
    const coreDir = join(rootDir, 'core');
    const componentsDir = join(rootDir, 'components');
    const easemotionDir = join(rootDir, 'easemotion');
    
    css = loadCssDir(coreDir) + loadCssDir(componentsDir) + loadCssDir(easemotionDir);
    
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    document = dom.window.document;
    
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  });

  it('should have basic core classes defined', () => {
    expect(css).toContain('.ease-fade-in');
    expect(css).toContain('.ease-slide-up');
    expect(css).toContain(':root');
  });

  it('should have component classes defined', () => {
    expect(css).toContain('.ease-btn');
    expect(css).toContain('.ease-card');
    expect(css).toContain('.ease-modal');
    expect(css).toContain('.ease-tooltip');
    expect(css).toContain('.ease-scroll-progress');
  });

  it('should apply base variables', () => {
    const styleTag = document.querySelector('style');
    expect(styleTag.textContent).toContain('--ease-speed-medium');
  });

  it('should handle prefers-reduced-motion', () => {
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('should have valid keyframe definitions', () => {
    const keyframeRegex = /@keyframes\s+([^\s{]+)/g;
    let match;
    let count = 0;
    while ((match = keyframeRegex.exec(css)) !== null) {
      count++;
    }
    expect(count).toBeGreaterThan(5);
  });
});
