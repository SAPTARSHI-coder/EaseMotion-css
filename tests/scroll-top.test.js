// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const scrollTopScript = fs.readFileSync(path.resolve(__dirname, '../core/scroll-top.js'), 'utf8');
const scrollTopCss = fs.readFileSync(path.resolve(__dirname, '../components/scroll-to-top.css'), 'utf8');

function runScrollTopScript() {
  const fn = new Function(scrollTopScript);
  fn();
}

describe('scroll-top.js', () => {
  let originalScrollTo;
  let originalScrollY;
  let originalMatchMedia;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalScrollTo = window.scrollTo;
    originalScrollY = window.scrollY;
    originalMatchMedia = window.matchMedia;

    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', {
      value: 800,
      configurable: true,
      writable: true,
    });

    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
    }));
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      configurable: true,
      writable: true,
    });
    window.matchMedia = originalMatchMedia;
    document.body.innerHTML = '';
  });

  it('should expose the scroll-to-top styles and toggle the button when scrolling past the threshold', () => {
    expect(scrollTopCss).toContain('.ease-scroll-top');
    expect(scrollTopCss).toContain('.ease-scroll-top.is-visible');

    document.body.innerHTML = `
      <button class="ease-scroll-top" id="top-btn" aria-label="Scroll to top">↑</button>
    `;

    runScrollTopScript();

    const button = document.getElementById('top-btn');
    expect(button.classList.contains('is-visible')).toBe(true);
  });

  it('should scroll smoothly to the top when clicked', () => {
    document.body.innerHTML = `
      <button class="ease-scroll-top" id="top-btn" aria-label="Scroll to top">↑</button>
    `;

    runScrollTopScript();

    document.getElementById('top-btn').click();

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
