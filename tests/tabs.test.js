// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const tabsScript = fs.readFileSync(path.resolve(__dirname, '../core/tabs.js'), 'utf8');

function runTabsScript() {
  const fn = new Function(tabsScript);
  fn();
}

describe('tabs.js', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    const style = document.getElementById('ease-tabs-dynamic-rules');
    if (style) style.remove();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    const style = document.getElementById('ease-tabs-dynamic-rules');
    if (style) style.remove();
  });

  it('should do nothing if no .ease-tabs containers are in the DOM', () => {
    document.body.innerHTML = `<div>No tabs here</div>`;
    runTabsScript();

    const style = document.getElementById('ease-tabs-dynamic-rules');
    expect(style).toBeNull();
  });

  it('should not inject dynamic rules style element if tab count is <= 20', () => {
    document.body.innerHTML = `
      <div class="ease-tabs">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab1" checked>
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab2">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab3">
        <div class="ease-tabs-nav">
          <label class="ease-tab-label" for="tab1">Tab 1</label>
          <label class="ease-tab-label" for="tab2">Tab 2</label>
          <label class="ease-tab-label" for="tab3">Tab 3</label>
          <div class="ease-tab-underline"></div>
        </div>
        <div class="ease-tabs-content">
          <div class="ease-tab-panel">Panel 1</div>
          <div class="ease-tab-panel">Panel 2</div>
          <div class="ease-tab-panel">Panel 3</div>
        </div>
      </div>
    `;

    runTabsScript();

    const style = document.getElementById('ease-tabs-dynamic-rules');
    expect(style).toBeNull();
  });

  it('should inject dynamic rules style element if tab count is > 20', () => {
    let inputs = '';
    let labels = '';
    let panels = '';
    for (let i = 1; i <= 22; i++) {
      inputs += `<input type="radio" class="ease-tab-input" name="tab-group" id="tab${i}" ${i === 1 ? 'checked' : ''}>`;
      labels += `<label class="ease-tab-label" for="tab${i}">Tab ${i}</label>`;
      panels += `<div class="ease-tab-panel">Panel ${i}</div>`;
    }

    document.body.innerHTML = `
      <div class="ease-tabs">
        ${inputs}
        <div class="ease-tabs-nav">
          ${labels}
          <div class="ease-tab-underline"></div>
        </div>
        <div class="ease-tabs-content">
          ${panels}
        </div>
      </div>
    `;

    runTabsScript();

    const style = document.getElementById('ease-tabs-dynamic-rules');
    expect(style).not.toBeNull();
    expect(style.textContent).toContain('nth-of-type(21)');
    expect(style.textContent).toContain('nth-of-type(22)');
    expect(style.textContent).toContain('--ease-tab-width: 4.54545');
  });

  it('should support .ease-tabs-auto variant', () => {
    let inputs = '';
    let labels = '';
    let panels = '';
    for (let i = 1; i <= 22; i++) {
      inputs += `<input type="radio" class="ease-tab-input" name="tab-group" id="tab${i}" ${i === 1 ? 'checked' : ''}>`;
      labels += `<label class="ease-tab-label" for="tab${i}">Tab ${i}</label>`;
      panels += `<div class="ease-tab-panel">Panel ${i}</div>`;
    }

    document.body.innerHTML = `
      <div class="ease-tabs ease-tabs-auto">
        ${inputs}
        <div class="ease-tabs-nav">
          ${labels}
          <div class="ease-tab-underline"></div>
        </div>
        <div class="ease-tabs-content">
          ${panels}
        </div>
      </div>
    `;

    runTabsScript();

    const style = document.getElementById('ease-tabs-dynamic-rules');
    expect(style).not.toBeNull();
    expect(style.textContent).not.toContain('--ease-tab-width');
    expect(style.textContent).toContain('border-bottom: 2px solid var(--ease-color-primary)');
  });

  it('should update underline width and left position on active tab', () => {
    document.body.innerHTML = `
      <div class="ease-tabs">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab1">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab2" checked>
        <div class="ease-tabs-nav">
          <label class="ease-tab-label" id="lbl1" for="tab1">Tab 1</label>
          <label class="ease-tab-label" id="lbl2" for="tab2">Tab 2</label>
          <div class="ease-tab-underline"></div>
        </div>
      </div>
    `;

    const lbl2 = document.getElementById('lbl2');
    Object.defineProperty(lbl2, 'offsetWidth', { value: 150, configurable: true });
    Object.defineProperty(lbl2, 'offsetLeft', { value: 200, configurable: true });

    runTabsScript();

    const underline = document.querySelector('.ease-tab-underline');
    expect(underline.style.width).toBe('150px');
    expect(underline.style.left).toBe('200px');
  });

  it('should update underline position on input change event', () => {
    document.body.innerHTML = `
      <div class="ease-tabs">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab1" checked>
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab2">
        <div class="ease-tabs-nav">
          <label class="ease-tab-label" id="lbl1" for="tab1">Tab 1</label>
          <label class="ease-tab-label" id="lbl2" for="tab2">Tab 2</label>
          <div class="ease-tab-underline"></div>
        </div>
      </div>
    `;

    const lbl1 = document.getElementById('lbl1');
    Object.defineProperty(lbl1, 'offsetWidth', { value: 100, configurable: true });
    Object.defineProperty(lbl1, 'offsetLeft', { value: 0, configurable: true });

    const lbl2 = document.getElementById('lbl2');
    Object.defineProperty(lbl2, 'offsetWidth', { value: 120, configurable: true });
    Object.defineProperty(lbl2, 'offsetLeft', { value: 110, configurable: true });

    runTabsScript();

    const underline = document.querySelector('.ease-tab-underline');
    expect(underline.style.width).toBe('100px');
    expect(underline.style.left).toBe('0px');

    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    tab1.checked = false;
    tab2.checked = true;
    tab2.dispatchEvent(new Event('change'));

    expect(underline.style.width).toBe('120px');
    expect(underline.style.left).toBe('110px');
  });

  it('should update underline on window resize with debounce', () => {
    vi.useFakeTimers();

    document.body.innerHTML = `
      <div class="ease-tabs">
        <input type="radio" class="ease-tab-input" name="tab-group" id="tab1" checked>
        <div class="ease-tabs-nav">
          <label class="ease-tab-label" id="lbl1" for="tab1">Tab 1</label>
          <div class="ease-tab-underline"></div>
        </div>
      </div>
    `;

    const lbl1 = document.getElementById('lbl1');
    Object.defineProperty(lbl1, 'offsetWidth', { value: 100, configurable: true });
    Object.defineProperty(lbl1, 'offsetLeft', { value: 0, configurable: true });

    runTabsScript();

    const underline = document.querySelector('.ease-tab-underline');
    expect(underline.style.width).toBe('100px');

    Object.defineProperty(lbl1, 'offsetWidth', { value: 130, configurable: true });
    Object.defineProperty(lbl1, 'offsetLeft', { value: 5, configurable: true });

    window.dispatchEvent(new Event('resize'));

    expect(underline.style.width).toBe('100px');

    vi.advanceTimersByTime(150);

    expect(underline.style.width).toBe('130px');
    expect(underline.style.left).toBe('5px');

    vi.useRealTimers();
  });
});
