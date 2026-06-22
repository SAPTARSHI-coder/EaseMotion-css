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
const tabs = readFileSync(resolve(componentsDir, 'tabs.css'), 'utf8');
const badges = readFileSync(resolve(componentsDir, 'badges.css'), 'utf8');
const loaders = readFileSync(resolve(componentsDir, 'loaders.css'), 'utf8');
const tooltips = readFileSync(resolve(componentsDir, 'tooltips.css'), 'utf8');
const modals = readFileSync(resolve(componentsDir, 'modals.css'), 'utf8');
    const commandPalette = readFileSync(resolve(componentsDir, 'command-palette.css'), 'utf8');
    const viewTransitions = readFileSync(resolve(componentsDir, 'view-transitions.css'), 'utf8');
    const toast = readFileSync(resolve(componentsDir, 'toast.css'), 'utf8');
    const tag = readFileSync(resolve(componentsDir, 'tag.css'), 'utf8');
    const skeleton = readFileSync(resolve(componentsDir, 'skeleton.css'), 'utf8');
    const scrollGallery = readFileSync(resolve(componentsDir, 'scroll-gallery.css'), 'utf8');
    const readMore = readFileSync(resolve(componentsDir, 'read-more.css'), 'utf8');
    const progress = readFileSync(resolve(componentsDir, 'progress.css'), 'utf8');
    const passwordStrength = readFileSync(resolve(componentsDir, 'password-strength.css'), 'utf8');
    const pagination = readFileSync(resolve(componentsDir, 'pagination.css'), 'utf8');
    const kbd = readFileSync(resolve(componentsDir, 'kbd.css'), 'utf8');
    const fab = readFileSync(resolve(componentsDir, 'fab.css'), 'utf8');
    const connectionStatus = readFileSync(resolve(componentsDir, 'connection-status.css'), 'utf8');
    const compareTable = readFileSync(resolve(componentsDir, 'compare-table.css'), 'utf8');
    const btnMagnetic = readFileSync(resolve(componentsDir, 'btn-magnetic.css'), 'utf8');
    const breadcrumb = readFileSync(resolve(componentsDir, 'breadcrumb.css'), 'utf8');
    const avatar = readFileSync(resolve(componentsDir, 'avatar.css'), 'utf8');
    const announceBar = readFileSync(resolve(componentsDir, 'announce-bar.css'), 'utf8');
    const progressRing = readFileSync(resolve(componentsDir, 'progress-ring.css'), 'utf8');
    
    css = variables + base + animations + utilities + buttons + cards + chip + footer + masonry + navbar + scrollProgress + sidebar + tabs + badges + loaders + tooltips + modals + commandPalette + viewTransitions + toast + tag + skeleton + scrollGallery + readMore + progress + passwordStrength + pagination + kbd + fab + connectionStatus + compareTable + btnMagnetic + breadcrumb + avatar + announceBar + progressRing;
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
      let result = [];
      for (const rule of rules) {
        if (rule.selectorText) {
          result.push(rule.selectorText);
        } else if (rule.cssRules) {
          result.push(...getSelectors(rule.cssRules));
        }
      }
      return result;
    };

    const selectors = getSelectors(sheet.cssRules);

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

  it('should expose scroll-progress theme variants', () => {
    expect(css).toContain('.ease-scroll-progress-success');
    expect(css).toContain('.ease-scroll-progress-danger');
    expect(css).toContain('.ease-scroll-progress-warning');
    expect(css).toContain('.ease-scroll-progress-root');
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
    expect(css).toContain('.ease-command-palette-overlay');
    expect(css).toContain('.ease-command-palette');
  });

  it('should have progress-ring classes defined', () => {
    expect(css).toContain('.ease-ring');
    expect(css).toContain('.ease-ring-svg');
    expect(css).toContain('.ease-ring-track');
    expect(css).toContain('.ease-ring-fill');
    expect(css).toContain('.ease-ring-label');
    expect(css).toContain('.ease-ring-value');
  });

  it('should have dark mode variables via prefers-color-scheme', () => {
    expect(css).toContain('@media (prefers-color-scheme: dark)');
    expect(css).toContain('--ease-color-surface: #141e33');
  });

  it('should have dark mode variables via [data-theme="dark"] selector', () => {
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toContain('--ease-color-bg:      #0b1121');
  });

  it("should override ease-reveal under prefers-reduced-motion: reduce", () => {
    const sheet = document.styleSheets[0];
    let foundMediaRule = false;
    let foundEaseRevealInMedia = false;

    const findMediaRules = (rules) => {
      let result = [];
      for (const rule of rules) {
        if (rule.media) {
          result.push(rule);
        }
        if (rule.cssRules) {
          result.push(...findMediaRules(rule.cssRules));
        }
      }
      return result;
    };

    const mediaRules = findMediaRules(sheet.cssRules);

    for (const rule of mediaRules) {
      if (rule.media.mediaText.includes("prefers-reduced-motion: reduce")) {
        foundMediaRule = true;
        for (const subRule of rule.cssRules) {
          if (subRule.selectorText === ".ease-reveal") {
            foundEaseRevealInMedia = true;
            expect(subRule.style.opacity).toBe("1");
            expect(subRule.style.transform).toBe("none");
            expect(subRule.style.transition).toBe("none");
          }
        }
      }
    }
    expect(foundMediaRule).toBe(true);
    expect(foundEaseRevealInMedia).toBe(true);
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
