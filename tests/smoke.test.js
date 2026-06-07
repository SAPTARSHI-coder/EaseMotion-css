import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('EaseMotion-css Smoke Tests', () => {
  let dom;
  let document;
  let css;

  beforeAll(() => {
    const coreDir = resolve(__dirname, '../core');
    const componentsDir = resolve(__dirname, '../components');
    const variables = readFileSync(resolve(coreDir, 'variables.css'), 'utf8');
    const base = readFileSync(resolve(coreDir, 'base.css'), 'utf8');
    const animations = readFileSync(resolve(coreDir, 'animations.css'), 'utf8');
    const utilities = readFileSync(resolve(coreDir, 'utilities.css'), 'utf8');
    const buttons = readFileSync(resolve(componentsDir, 'buttons.css'), 'utf8');
    const cards = readFileSync(resolve(componentsDir, 'cards.css'), 'utf8');
    const chip = readFileSync(resolve(componentsDir, 'chip.css'), 'utf8');
    const footer = readFileSync(resolve(componentsDir, 'footer.css'), 'utf8');
    const masonry = readFileSync(resolve(componentsDir, 'masonry.css'), 'utf8');
    const navbar = readFileSync(resolve(componentsDir, 'navbar.css'), 'utf8');
    const scrollProgress = readFileSync(resolve(componentsDir, 'scroll-progress.css'), 'utf8');
    const sidebar = readFileSync(resolve(componentsDir, 'sidebar.css'), 'utf8');
    
    css = variables + base + animations + utilities + buttons + cards + chip + footer + masonry + navbar + scrollProgress + sidebar;
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

  it('should not use exclusion selectors for slide animations', () => {
    expect(css).not.toContain('.ease-slide-up:not(.ease-slide-down)');
    expect(css).not.toContain('.ease-slide-down:not(.ease-slide-up)');
  });

  it('should apply base variables', () => {
    const styleTag = document.querySelector('style');
    expect(styleTag.textContent).toContain('--ease-speed-medium');
  });

  it('should handle prefers-reduced-motion', () => {
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('should have component classes defined', () => {
    expect(css).toContain('.ease-btn');
    expect(css).toContain('.ease-btn-primary');
    expect(css).toContain('.ease-card');
    expect(css).toContain('.ease-chip');
    expect(css).toContain('.ease-footer');
    expect(css).toContain('.ease-masonry');
    expect(css).toContain('.ease-navbar-glass');
    expect(css).toContain('.ease-scroll-progress');
    expect(css).toContain('.ease-sidebar');
  });

  it('should hide plain text in loading buttons and keep the spinner visible', () => {
    expect(css).toContain('.ease-btn-loading');
    expect(css).toContain('font-size: 0');
    expect(css).toContain('.ease-btn-loading > *');
    expect(css).toContain('visibility: hidden');
    expect(css).toContain('.ease-btn-loading::after');
    expect(css).toContain('border: 2px solid currentColor');
  });

  it('minified bundle should be valid and contain key classes', () => {
    const bundle = readFileSync(resolve(__dirname, '../easemotion.min.css'), 'utf8');
    expect(bundle).toContain('.ease-fade-in');
    expect(bundle).toContain('.ease-btn');
    expect(bundle).toContain('.ease-card');
    expect(bundle).toContain('@keyframes ease-kf-zoom-in');
    expect(bundle).toContain('prefers-reduced-motion:reduce');
    expect(bundle.length).toBeGreaterThan(20000);
  });

  it('should not have duplicate @keyframes definitions', () => {
    const keyframeCounts = {};
    const keyframeRegex = /@keyframes\s+([^\s{]+)/g;
    let match;
    while ((match = keyframeRegex.exec(css)) !== null) {
      const name = match[1];
      keyframeCounts[name] = (keyframeCounts[name] || 0) + 1;
    }
    const duplicates = Object.entries(keyframeCounts)
      .filter(([, count]) => count > 1)
      .map(([name]) => name);
    expect(duplicates).toEqual([]);
  });
});
