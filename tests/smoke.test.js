import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('EaseMotion-css Smoke Tests', () => {
  let dom;
  let document;
  let css;

  const renderTabs = (count, activeIndex = 0) => {
    const root = document.createElement('div');
    const tabs = Array.from({ length: count }, (_, index) => {
      const checked = index === activeIndex ? ' checked' : '';

      return `
        <div class="ease-tab">
          <input
            class="ease-tab-input"
            type="radio"
            name="test-tabs-${count}"
            id="test-tabs-${count}-${index}"
            ${checked}
          />
          <label
            class="ease-tab-label"
            for="test-tabs-${count}-${index}"
            role="tab"
          >
            Tab ${index + 1}
          </label>
          <div class="ease-tab-panel" role="tabpanel">
            Panel ${index + 1}
          </div>
        </div>
      `;
    }).join('');

    root.innerHTML = `
      <div class="ease-tabs">
        <div class="ease-tabs-nav" role="tablist">${tabs}</div>
      </div>
    `;
    document.body.appendChild(root);

    return root;
  };

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
    
    css = variables + base + animations + utilities + buttons + cards + chip + footer + masonry + navbar + scrollProgress + sidebar + tabs + badges + loaders + tooltips + modals;
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

  it('should not limit tabs with hardcoded nth-of-type selectors', () => {
    expect(css).not.toContain('.ease-tab-input:nth-of-type');
    expect(css).not.toContain('.ease-tab-label:nth-of-type');
    expect(css).not.toContain('.ease-tab-panel:nth-of-type');
    expect(css).not.toContain('translateX(500%)');
  });

  it.each([1, 2, 6, 8, 10])(
    'should map checked tabs to labels and panels for %i tab(s)',
    (count) => {
      const root = renderTabs(count, count - 1);
      const activeTabs = root.querySelectorAll(
        '.ease-tab:has(> .ease-tab-input:checked)'
      );
      const activeLabels = root.querySelectorAll(
        '.ease-tab:has(> .ease-tab-input:checked) > .ease-tab-label'
      );
      const activePanels = root.querySelectorAll(
        '.ease-tab:has(> .ease-tab-input:checked) > .ease-tab-panel'
      );

      expect(root.querySelectorAll('.ease-tab')).toHaveLength(count);
      expect(activeTabs).toHaveLength(1);
      expect(activeLabels).toHaveLength(1);
      expect(activePanels).toHaveLength(1);
      expect(activeLabels[0].textContent).toContain(`Tab ${count}`);
      expect(activePanels[0].textContent).toContain(`Panel ${count}`);
    }
  );

  it('should change the active tab without tab-count-specific selectors', () => {
    const root = renderTabs(10, 0);
    const inputs = root.querySelectorAll('.ease-tab-input');

    inputs[0].checked = false;
    inputs[8].checked = true;

    const activeLabel = root.querySelector(
      '.ease-tab:has(> .ease-tab-input:checked) > .ease-tab-label'
    );
    const activePanel = root.querySelector(
      '.ease-tab:has(> .ease-tab-input:checked) > .ease-tab-panel'
    );

    expect(activeLabel.textContent).toContain('Tab 9');
    expect(activePanel.textContent).toContain('Panel 9');
  });

  it('should keep radio semantics for keyboard navigation and accessibility', () => {
    const root = renderTabs(8, 0);
    const inputs = root.querySelectorAll('.ease-tab-input');
    const labels = root.querySelectorAll('.ease-tab-label');

    inputs.forEach((input, index) => {
      expect(input.type).toBe('radio');
      expect(input.name).toBe('test-tabs-8');
      expect(labels[index].getAttribute('for')).toBe(input.id);
    });
  });

  it('should use a scalable active-label underline indicator', () => {
    expect(css).toContain('.ease-tab-label::after');
    expect(css).toContain(
      '.ease-tab:has(> .ease-tab-input:checked) > .ease-tab-label::after'
    );
    expect(css).not.toContain('.ease-tab-underline { transform');
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
