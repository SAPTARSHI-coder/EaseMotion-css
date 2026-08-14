// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CarouselPause } from './script.js';

describe('Carousel Autoplay Pause on Focus', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.className = 'ease-carousel';
    for (let i = 0; i < 3; i++) {
      const slide = document.createElement('div');
      slide.className = 'ease-carousel-slide';
      slide.setAttribute('tabindex', '0');
      slide.textContent = 'Slide ' + (i + 1);
      root.appendChild(slide);
    }
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('starts playing and pauses on focusin', () => {
    const c = new CarouselPause(root, { interval: 1000 });
    expect(c.isPaused()).toBe(false);
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    expect(c.isPaused()).toBe(true);
    c.destroy();
  });

  it('resumes when focus leaves the carousel', () => {
    const c = new CarouselPause(root, { interval: 1000 });
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    expect(c.isPaused()).toBe(true);
    root.dispatchEvent(
      new window.FocusEvent('focusout', { bubbles: true, relatedTarget: document.body }),
    );
    expect(c.isPaused()).toBe(false);
    c.destroy();
  });

  it('marks the active slide aria-hidden=false and others true', () => {
    const c = new CarouselPause(root);
    const slides = root.querySelectorAll('.ease-carousel-slide');
    expect(slides[0].getAttribute('aria-hidden')).toBe('false');
    expect(slides[1].getAttribute('aria-hidden')).toBe('true');
    c.destroy();
  });

  it('next() advances the active slide cyclically', () => {
    const c = new CarouselPause(root);
    c.next();
    expect(c.index).toBe(1);
    const slides = root.querySelectorAll('.ease-carousel-slide');
    expect(slides[1].getAttribute('aria-hidden')).toBe('false');
    c.next();
    c.next();
    expect(c.index).toBe(0);
    c.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('does not re-pause if already paused', () => {
    const c = new CarouselPause(root);
    c.pause();
    const before = c.isPaused();
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    expect(c.isPaused()).toBe(before);
    c.destroy();
  });

  it('focusout to another element inside the root keeps it paused', () => {
    const c = new CarouselPause(root);
    root.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    const inner = root.querySelector('.ease-carousel-slide');
    root.dispatchEvent(
      new window.FocusEvent('focusout', { bubbles: true, relatedTarget: inner }),
    );
    expect(c.isPaused()).toBe(true);
    c.destroy();
  });

  it('onPauseChange fires with the new state on pause and resume', () => {
    const c = new CarouselPause(root);
    const spy = vi.fn();
    c.onPauseChange(spy);
    c.pause();
    c.play();
    expect(spy).toHaveBeenNthCalledWith(1, true);
    expect(spy).toHaveBeenNthCalledWith(2, false);
    c.destroy();
  });

  it('pause() clears the scheduled timer', () => {
    const c = new CarouselPause(root, { interval: 1000 });
    c.play();
    c.pause();
    expect(c._timer).toBeNull();
    c.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('works with a root that has no slides', () => {
    const empty = document.createElement('div');
    const c = new CarouselPause(empty);
    expect(() => c.next()).not.toThrow();
    c.destroy();
  });

  it('throws without a valid root element', () => {
    expect(() => new CarouselPause(null)).toThrow(TypeError);
    expect(() => new CarouselPause({})).toThrow(TypeError);
  });
});
