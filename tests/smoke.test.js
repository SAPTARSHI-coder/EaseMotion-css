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
    
    css = variables + base + animations + utilities + buttons + cards + chip + footer + masonry + navbar + scrollProgress + sidebar + tabs + badges + loaders + tooltips + modals + commandPalette + viewTransitions + toast + tag + skeleton + scrollGallery + readMore + progress + passwordStrength + pagination + kbd + fab + connectionStatus + compareTable + btnMagnetic + breadcrumb + avatar + announceBar;
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    document = dom.window.document;
    
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  });

  const getAllSelectors = (rules) => {
    let result = new Set();
    const process = (rlist) => {
      for (const rule of rlist) {
        if (rule.selectorText) {
          rule.selectorText.split(',').forEach(s => result.add(s.trim()));
        }
        if (rule.cssRules) {
          process(rule.cssRules);
        }
      }
    };
    process(rules);
    return result;
  };

  const hasSelectorWithClass = (selectors, className) => {
    // className should include the dot, e.g., '.ease-btn'
    const name = className.startsWith('.') ? className.slice(1) : className;
    const regex = new RegExp(`(^|[\\s.,:()#])${name}(\\.|\\s|:|#|\\)|,|$)`);
    return Array.from(selectors).some(s => regex.test(s));
  };

  const findRuleBySelector = (rules, selector) => {
    for (const rule of rules) {
      if (rule.selectorText && rule.selectorText.split(',').map(s => s.trim()).includes(selector)) {
        return rule;
      } else if (rule.cssRules) {
        const found = findRuleBySelector(rule.cssRules, selector);
        if (found) return found;
      }
    }
    return null;
  };

  it('should have basic core classes defined', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(hasSelectorWithClass(selectors, '.ease-fade-in')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-slide-up')).toBe(true);
    expect(selectors).toContain(':root');
  });

  it('should not use exclusion selectors for slide animations', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(Array.from(selectors).some(s => s.includes('.ease-slide-up:not(.ease-slide-down)'))).toBe(false);
  });

  it('should apply base variables', () => {
    const rule = findRuleBySelector(document.styleSheets[0].cssRules, ':root');
    expect(rule.style.getPropertyValue('--ease-speed-medium')).toBeDefined();
  });

  it('should handle prefers-reduced-motion', () => {
    const sheet = document.styleSheets[0];
    const findMediaRule = (rules, text) => {
      for (const rule of rules) {
        if (rule.media && rule.media.mediaText.includes(text)) {
          return rule;
        } else if (rule.cssRules) {
          const found = findMediaRule(rule.cssRules, text);
          if (found) return found;
        }
      }
      return null;
    };
    expect(findMediaRule(sheet.cssRules, 'prefers-reduced-motion: reduce')).not.toBeNull();
  });

  it('should have component classes defined', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);

    expect(hasSelectorWithClass(selectors, '.ease-btn')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-btn-primary')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-card')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-chip')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-footer')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-masonry')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-navbar-glass')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-scroll-progress')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-sidebar')).toBe(true);
  });

  it('should expose scroll-progress theme variants', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(hasSelectorWithClass(selectors, '.ease-scroll-progress-success')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-scroll-progress-danger')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-scroll-progress-warning')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-scroll-progress-root')).toBe(true);
  });

  it('should hide plain text in loading buttons and keep the spinner visible', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(hasSelectorWithClass(selectors, '.ease-btn-loading')).toBe(true);
    
    const loadingRule = findRuleBySelector(document.styleSheets[0].cssRules, '.ease-btn-loading');
    expect(loadingRule.style.color).toBe('transparent');

    expect(hasSelectorWithClass(selectors, '.ease-btn-loading > *')).toBe(true);
    const childrenRule = findRuleBySelector(document.styleSheets[0].cssRules, '.ease-btn-loading > *');
    expect(childrenRule.style.visibility).toBe('hidden');

    expect(selectors).toContain('.ease-btn-loading::after');
    const afterRule = findRuleBySelector(document.styleSheets[0].cssRules, '.ease-btn-loading::after');
    expect(afterRule.style.borderWidth).toBe('2px');
    expect(afterRule.style.borderStyle).toBe('solid');
  });

  it('minified bundle should be valid and contain key classes', () => {
    const bundle = readFileSync(resolve(__dirname, '../easemotion.min.css'), 'utf8');
    const bundleDom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    const bundleStyle = bundleDom.window.document.createElement('style');
    bundleStyle.textContent = bundle;
    bundleDom.window.document.head.appendChild(bundleStyle);
    
    const selectors = getAllSelectors(bundleDom.window.document.styleSheets[0].cssRules);
    expect(hasSelectorWithClass(selectors, '.ease-fade-in')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-btn')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-card')).toBe(true);
    
    expect(bundle).toContain('@keyframes ease-kf-zoom-in');
    expect(bundle).toContain('prefers-reduced-motion:reduce');
    expect(bundle.trim().length).toBeGreaterThan(100);
  });
  
  it('should have tabs, badges, loaders, tooltips, and modal classes defined', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(hasSelectorWithClass(selectors, '.ease-tabs')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-tab-label')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-tab-panel')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-badge')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-badge-danger')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-badge-success')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-loader')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-loader-spin')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-loader-dots')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-tooltip')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-modal-overlay')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-modal')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-modal-header')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-command-palette-overlay')).toBe(true);
    expect(hasSelectorWithClass(selectors, '.ease-command-palette')).toBe(true);
  });

  it('should have dark mode variables via prefers-color-scheme', () => {
    const sheet = document.styleSheets[0];
    const findMediaRule = (rules, text) => {
      for (const rule of rules) {
        if (rule.media && rule.media.mediaText.includes(text)) {
          return rule;
        } else if (rule.cssRules) {
          const found = findMediaRule(rule.cssRules, text);
          if (found) return found;
        }
      }
      return null;
    };
    const darkModeRule = findMediaRule(sheet.cssRules, 'prefers-color-scheme: dark');
    expect(darkModeRule).not.toBeNull();
    
    let foundVar = false;
    const checkStyles = (rules) => {
      for (const rule of rules) {
        if (rule.style && rule.style.getPropertyValue('--ease-color-surface')) {
          foundVar = true;
          return;
        }
        if (rule.cssRules) {
          checkStyles(rule.cssRules);
        }
      }
    };
    checkStyles(darkModeRule.cssRules);
    expect(foundVar).toBe(true);
  });

  it('should have dark mode variables via [data-theme="dark"] selector', () => {
    const selectors = getAllSelectors(document.styleSheets[0].cssRules);
    expect(selectors).toContain('[data-theme="dark"]');
    
    const rule = findRuleBySelector(document.styleSheets[0].cssRules, '[data-theme="dark"]');
    expect(rule.style.getPropertyValue('--ease-color-bg')).toBeDefined();
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
