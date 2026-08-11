// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  observeReveal,
  prefersReducedMotion,
  REVEAL_ACTIVE_CLASS,
} from './scrollRevealCore.js';

describe('scrollRevealCore.observeReveal', () => {
  let originalMatchMedia;
  let originalIntersectionObserver;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalMatchMedia = window.matchMedia;
    originalIntersectionObserver = window.IntersectionObserver;

    // Default: reduced motion NOT requested.
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    }));
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalIntersectionObserver;
    document.body.innerHTML = '';
  });

  it('reveals immediately when prefers-reduced-motion is reduce', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
    }));

    document.body.innerHTML = '<div id="el" class="ease-reveal">Reveal</div>';
    const el = document.getElementById('el');

    const cleanup = observeReveal(el, {});

    expect(el.classList.contains(REVEAL_ACTIVE_CLASS)).toBe(true);
    expect(typeof cleanup).toBe('function');
  });

  it('reveals immediately when IntersectionObserver is unavailable', () => {
    delete window.IntersectionObserver;
    expect('IntersectionObserver' in window).toBe(false);

    document.body.innerHTML = '<div id="el" class="ease-reveal">Reveal</div>';
    const el = document.getElementById('el');

    observeReveal(el, {});

    expect(el.classList.contains(REVEAL_ACTIVE_CLASS)).toBe(true);
  });

  it('observes the element and reveals it on intersection', () => {
    let observerCallback = null;
    const observed = [];
    const unobserved = [];

    class MockIntersectionObserver {
      constructor(callback) {
        observerCallback = callback;
      }
      observe = vi.fn((el) => observed.push(el));
      unobserve = vi.fn((el) => unobserved.push(el));
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver;

    document.body.innerHTML = '<div id="target" class="ease-reveal">Target</div>';
    const target = document.getElementById('target');

    observeReveal(target, {});

    // Not revealed until it intersects.
    expect(target.classList.contains(REVEAL_ACTIVE_CLASS)).toBe(false);
    expect(observed).toContain(target);

    observerCallback([{ isIntersecting: true, target }]);

    expect(target.classList.contains(REVEAL_ACTIVE_CLASS)).toBe(true);
    // once=true by default → the element is unobserved after revealing.
    expect(unobserved).toContain(target);
  });

  it('keeps observing when once is false', () => {
    let observerCallback = null;
    const unobserved = [];

    class MockIntersectionObserver {
      constructor(callback) {
        observerCallback = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn((el) => unobserved.push(el));
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver;

    document.body.innerHTML = '<div id="target" class="ease-reveal">Target</div>';
    const target = document.getElementById('target');

    observeReveal(target, { once: false });
    observerCallback([{ isIntersecting: true, target }]);

    expect(target.classList.contains(REVEAL_ACTIVE_CLASS)).toBe(true);
    expect(unobserved).not.toContain(target);
  });

  it('fires the onReveal callback with the element', () => {
    let observerCallback = null;
    class MockIntersectionObserver {
      constructor(callback) {
        observerCallback = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver;

    document.body.innerHTML = '<div id="target" class="ease-reveal">Target</div>';
    const target = document.getElementById('target');
    const onReveal = vi.fn();

    observeReveal(target, { onReveal });
    observerCallback([{ isIntersecting: true, target }]);

    expect(onReveal).toHaveBeenCalledWith(target);
  });

  it('returns a cleanup that disconnects the observer', () => {
    const disconnect = vi.fn();
    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = disconnect;
    }
    window.IntersectionObserver = MockIntersectionObserver;

    document.body.innerHTML = '<div id="target" class="ease-reveal">Target</div>';
    const target = document.getElementById('target');

    const cleanup = observeReveal(target, {});
    cleanup();

    expect(disconnect).toHaveBeenCalled();
  });

  it('is a no-op for a null element', () => {
    expect(() => observeReveal(null, {})).not.toThrow();
    expect(typeof observeReveal(null, {})).toBe('function');
  });
});

describe('scrollRevealCore.prefersReducedMotion', () => {
  it('reflects the matchMedia result', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
    }));
    expect(prefersReducedMotion()).toBe(true);

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    }));
    expect(prefersReducedMotion()).toBe(false);
  });
});
