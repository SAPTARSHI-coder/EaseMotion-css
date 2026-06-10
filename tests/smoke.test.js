import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

describe('EaseMotion-css Smoke Tests', () => {
  let dom;
  let document;
  let css;

  beforeAll(() => {
    const coreDir = resolve(__dirname, '../core');
    const componentsDir = resolve(__dirname, '../components');
    // Load core CSS files
    const coreFiles = ['variables.css', 'base.css', 'animations.css', 'utilities.css'];
    const coreCss = coreFiles.map((f) => readFileSync(resolve(coreDir, f), 'utf8')).join('');
    // Dynamically load all component CSS files
    const componentFiles = readdirSync(componentsDir).filter((f) => f.endsWith('.css'));
    const componentCss = componentFiles.map((f) => readFileSync(resolve(componentsDir, f), 'utf8')).join('');
    css = coreCss + componentCss;
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
    const sheet = document.styleSheets[0];
    
    const getSelectors = (rules) => {
      let selectors = [];
      for (const rule of rules) {
        if (rule.selectorText) {
          selectors.push(rule.selectorText);
        } else if (rule.cssRules) {
          selectors = selectors.concat(getSelectors([...rule.cssRules]));
        }
      }
      return selectors;
    };

    const selectors = getSelectors([...sheet.cssRules]);

    expect(selectors).toContain('.ease-btn');
    expect(selectors).toContain('.ease-btn-primary');
    expect(selectors).toContain('.ease-card');
    expect(selectors).toContain('.ease-chip');
    expect(selectors).toContain('.ease-footer');
    expect(selectors).toContain('.ease-masonry');
    expect(selectors).toContain('.ease-navbar-glass');
    expect(selectors).toContain('.ease-scroll-progress');
    expect(selectors).toContain('.ease-sidebar');
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
    expect(bundle.trim().length).toBeGreaterThan(100);
  });
  
  it('should have tabs, badges, loaders, tooltips, and modal classes defined', () => {
    expect(css).toContain('.ease-tabs');
    expect(css).toContain('.ease-tab-label');
    expect(css).toContain('.ease-tab-panel');
    expect(css).toContain('.ease-badge');
    expect(css).toContain('.ease-badge-danger');
    expect(css).toContain('.ease-badge-success');
    expect(css).toContain('.ease-loader');
    expect(css).toContain('.ease-loader-spin');
    expect(css).toContain('.ease-loader-dots');
    expect(css).toContain('.ease-tooltip');
    expect(css).toContain('.ease-modal-overlay');
    expect(css).toContain('.ease-modal');
    expect(css).toContain('.ease-modal-header');
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
