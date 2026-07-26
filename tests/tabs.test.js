// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

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

  function initTabs() {
    const CSS_LIMIT = 20;
    const tabContainers = document.querySelectorAll('.ease-tabs');
    if (tabContainers.length === 0) return;

    const styleId = 'ease-tabs-dynamic-rules';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    let cssRules = '';

    Array.from(tabContainers).forEach(function (container, containerIndex) {
      const inputs = container.querySelectorAll('.ease-tab-input');
      const numTabs = inputs.length;
      if (numTabs === 0) return;

      if (numTabs > CSS_LIMIT) {
        const containerId = 'ease-tabs-' + containerIndex;
        container.setAttribute('data-tabs-id', containerId);

        for (let i = CSS_LIMIT + 1; i <= numTabs; i++) {
          const translatePercent = (i - 1) * 100;

          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):focus-visible ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { outline: 2px solid var(--ease-color-primary); outline-offset: -2px; }\n';
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { color: var(--ease-color-primary); }\n';
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-underline { transform: translateX(' + translatePercent + '%); }\n';
          cssRules += '[data-tabs-id="' + containerId + '"] .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-content .ease-tab-panel:nth-of-type(' + i + ') { display: block; }\n';

          if (container.classList.contains('ease-tabs-auto')) {
            cssRules += '[data-tabs-id="' + containerId + '"].ease-tabs-auto .ease-tab-input:nth-of-type(' + i + '):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(' + i + ') { border-bottom: 2px solid var(--ease-color-primary); }\n';
          }
        }

        if (!container.classList.contains('ease-tabs-auto')) {
          const tabWidthPercent = (100 / numTabs);
          cssRules = '[data-tabs-id="' + containerId + '"] { --ease-tab-width: ' + tabWidthPercent + '%; }\n' + cssRules;
        }
      }

      const underline = container.querySelector('.ease-tabs-nav .ease-tab-underline');
      if (underline) {
        updateUnderline(container);
      }
    });

    if (cssRules) {
      styleElement.textContent = cssRules;
      document.head.appendChild(styleElement);
    }

    let resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        Array.from(tabContainers).forEach(function (container) {
          updateUnderline(container);
        });
      }, 150);
    });

    Array.from(tabContainers).forEach(function (container) {
      const inputs = container.querySelectorAll('.ease-tab-input');
      Array.from(inputs).forEach(function (input) {
        input.addEventListener('change', function () {
          updateUnderline(container);
        });
      });
    });
  }

  function updateUnderline(container) {
    const underline = container.querySelector('.ease-tabs-nav .ease-tab-underline');
    if (!underline) return;
    if (container.classList.contains('ease-tabs-auto')) return;

    const checkedInput = container.querySelector('.ease-tab-input:checked');
    if (!checkedInput) return;

    const navContainer = container.querySelector('.ease-tabs-nav');
    if (!navContainer) return;

    const labels = navContainer.querySelectorAll('.ease-tab-label');
    const inputs = container.querySelectorAll('.ease-tab-input');
    let checkedIndex = -1;

    Array.from(inputs).forEach(function (input, index) {
      if (input === checkedInput) checkedIndex = index;
    });

    if (checkedIndex < 0 || checkedIndex >= labels.length) return;

    const activeLabel = labels[checkedIndex];
    const labelWidth = activeLabel.offsetWidth;
    const labelLeft = activeLabel.offsetLeft;

    underline.style.width = labelWidth + 'px';
    underline.style.left = labelLeft + 'px';
  }

  it('should do nothing if no .ease-tabs containers are in the DOM', () => {
    document.body.innerHTML = `<div>No tabs here</div>`;
    initTabs();

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

    initTabs();

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

    initTabs();

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

    initTabs();

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

    initTabs();

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

    initTabs();

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

    initTabs();

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
