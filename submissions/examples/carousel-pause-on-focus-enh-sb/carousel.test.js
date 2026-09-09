// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { Carousel } from './script.js';

describe('Carousel Pause on Focus', () => {
  let root;

  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.innerHTML = '<div data-slide><button>A</button></div><div data-slide><button>B</button></div><div data-slide><button>C</button></div>';
    document.body.appendChild(root);
  });

  afterEach(() => vi.useRealTimers());

  it('sets role=region + aria-label + aria-roledescription', () => {
    const c = new Carousel(root, { interval: 0 });
    expect(root.getAttribute('role')).toBe('region');
    expect(root.getAttribute('aria-label')).toBe('Image carousel');
    expect(root.getAttribute('aria-roledescription')).toBe('carousel');
    c.destroy();
  });

  it('each slide gets role=group + aria-roledescription=slide + aria-label', () => {
    const c = new Carousel(root, { interval: 0 });
    const s0 = root.querySelectorAll('[data-slide]')[0];
    expect(s0.getAttribute('role')).toBe('group');
    expect(s0.getAttribute('aria-roledescription')).toBe('slide');
    expect(s0.getAttribute('aria-label')).toBe('1 of 3');
    c.destroy();
  });

  it('first slide is active (aria-hidden=false + is-active)', () => {
    const c = new Carousel(root, { interval: 0 });
    const s0 = root.querySelectorAll('[data-slide]')[0];
    expect(s0.getAttribute('aria-hidden')).toBe('false');
    expect(s0.classList.contains('is-active')).toBe(true);
    c.destroy();
  });

  it('next() advances to the next slide', () => {
    const c = new Carousel(root, { interval: 0 });
    c.next();
    expect(c.getActive()).toBe(1);
    expect(root.querySelectorAll('[data-slide]')[1].getAttribute('aria-hidden')).toBe('false');
    c.destroy();
  });

  it('autoplay advances on each interval tick', () => {
    const c = new Carousel(root, { interval: 1000 });
    expect(c.isPlaying()).toBe(true);
    vi.advanceTimersByTime(1000);
    expect(c.getActive()).toBe(1);
    vi.advanceTimersByTime(1000);
    expect(c.getActive()).toBe(2);
    c.destroy();
  });

  it('focusin pauses the carousel', () => {
    const c = new Carousel(root, { interval: 1000 });
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    expect(c.isPaused()).toBe(true);
    c.destroy();
  });

  it('focusout resumes the carousel', () => {
    const c = new Carousel(root, { interval: 1000 });
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    root.dispatchEvent(new window.FocusEvent('focusout', { bubbles: true }));
    expect(c.isPlaying()).toBe(true);
    c.destroy();
  });

  it('prev() wraps to the last slide', () => {
    const c = new Carousel(root, { interval: 0 });
    c.prev();
    expect(c.getActive()).toBe(2);
    c.destroy();
  });

  it('goTo(2) jumps to the third slide', () => {
    const c = new Carousel(root, { interval: 0 });
    c.goTo(2);
    expect(c.getActive()).toBe(2);
    c.destroy();
  });

  it('reduced motion disables autoplay', () => {
    window.matchMedia = () => ({ matches: true });
    const c = new Carousel(root, { interval: 1000 });
    expect(c.isPlaying()).toBe(false);
    expect(c.isReducedMotion()).toBe(true);
    delete window.matchMedia;
    c.destroy();
  });

  it('destroy() stops the timer and removes listeners', () => {
    const c = new Carousel(root, { interval: 1000 });
    c.destroy();
    expect(c.isPlaying()).toBe(false);
  });

  it('throws without a root element', () => {
    expect(() => new Carousel(null)).toThrow(TypeError);
  });
});
