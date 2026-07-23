// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const revealScript = fs.readFileSync(path.resolve(__dirname, '../core/reveal.js'), 'utf8');

function runRevealScript() {
  const fn = new Function(revealScript);
  fn();
}

describe('reveal.js', () => {
  let originalMatchMedia;
  let originalIntersectionObserver;
  let originalInnerHeight;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalMatchMedia = window.matchMedia;
    originalIntersectionObserver = window.IntersectionObserver;
    originalInnerHeight = window.innerHeight;

    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
    }));
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalIntersectionObserver;
    window.innerHeight = originalInnerHeight;
    document.body.innerHTML = '';
    delete window.IntersectionObserver;
  });

  it('should immediately add ease-reveal-active when prefers-reduced-motion is reduce', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
    }));

    document.body.innerHTML = `
      <div class="ease-reveal" id="el1">Reveal 1</div>
      <div class="ease-reveal" id="el2">Reveal 2</div>
    `;

    runRevealScript();

    const el1 = document.getElementById('el1');
    const el2 = document.getElementById('el2');

    expect(el1.classList.contains('ease-reveal-active')).toBe(true);
    expect(el2.classList.contains('ease-reveal-active')).toBe(true);
  });

  it('should immediately add ease-reveal-active to elements that are already centered', () => {
    let observedElements = [];
    class MockIntersectionObserver {
      constructor(callback, options) {
        this.callback = callback;
        this.options = options;
      }
      observe = vi.fn((el) => observedElements.push(el));
      unobserve = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver;
    window.innerHeight = 1000;

    document.body.innerHTML = `
      <div class="ease-reveal" id="centered-el">Centered</div>
      <div class="ease-reveal" id="not-centered-el">Not Centered</div>
    `;

    const centeredEl = document.getElementById('centered-el');
    const notCenteredEl = document.getElementById('not-centered-el');

    centeredEl.getBoundingClientRect = () => ({
      top: 100,
      bottom: 200,
    });

    notCenteredEl.getBoundingClientRect = () => ({
      top: 900,
      bottom: 1000,
    });

    runRevealScript();

    expect(centeredEl.classList.contains('ease-reveal-active')).toBe(true);
    expect(notCenteredEl.classList.contains('ease-reveal-active')).toBe(false);
    expect(observedElements).toContain(notCenteredEl);
    expect(observedElements).not.toContain(centeredEl);
  });

  it('should add ease-reveal-active when observed element intersects', () => {
    let observerCallback = null;
    let observedElements = [];
    let unobservedElements = [];

    class MockIntersectionObserver {
      constructor(callback, options) {
        observerCallback = callback;
        this.options = options;
      }
      observe = vi.fn((el) => observedElements.push(el));
      unobserve = vi.fn((el) => unobservedElements.push(el));
    }
    window.IntersectionObserver = MockIntersectionObserver;
    window.innerHeight = 1000;

    document.body.innerHTML = `
      <div class="ease-reveal" id="target">Target</div>
    `;

    const target = document.getElementById('target');
    target.getBoundingClientRect = () => ({
      top: 900,
      bottom: 1000,
    });

    runRevealScript();

    expect(target.classList.contains('ease-reveal-active')).toBe(false);
    expect(observedElements).toContain(target);

    observerCallback([
      { isIntersecting: true, target: target }
    ]);

    expect(target.classList.contains('ease-reveal-active')).toBe(true);
    expect(unobservedElements).toContain(target);
  });

  it('should fallback to immediately activating all elements if IntersectionObserver is not supported', () => {
    delete window.IntersectionObserver;
    expect('IntersectionObserver' in window).toBe(false);

    document.body.innerHTML = `
      <div class="ease-reveal" id="el1">Reveal 1</div>
      <div class="ease-reveal" id="el2">Reveal 2</div>
    `;

    runRevealScript();

    const el1 = document.getElementById('el1');
    const el2 = document.getElementById('el2');

    expect(el1.classList.contains('ease-reveal-active')).toBe(true);
    expect(el2.classList.contains('ease-reveal-active')).toBe(true);
  });
});
