// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RatingHover } from './script.js';

describe('Rating Component Mouse Hover Star Highlight', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('builds the configured number of stars', () => {
    const r = new RatingHover(container, { stars: 5 });
    expect(r.stars).toHaveLength(5);
    expect(container.querySelectorAll('.ease-rating-star')).toHaveLength(5);
  });

  it('mouseenter highlights stars up to the hovered index', () => {
    const r = new RatingHover(container, { stars: 5 });
    r.stars[3].dispatchEvent(new window.MouseEvent('mouseenter', { bubbles: false }));
    const active = container.querySelectorAll('.ease-rating-star.is-active');
    expect(active).toHaveLength(4);
    r.destroy();
  });

  it('mouseleave clears the hover highlight', () => {
    const r = new RatingHover(container, { stars: 5 });
    r.stars[2].dispatchEvent(new window.MouseEvent('mouseenter'));
    container.dispatchEvent(new window.MouseEvent('mouseleave'));
    expect(container.querySelectorAll('.ease-rating-star.is-hovered')).toHaveLength(0);
    r.destroy();
  });

  it('setRating commits a value that persists after hover clears', () => {
    const r = new RatingHover(container, { stars: 5 });
    r.setRating(3);
    r.stars[4].dispatchEvent(new window.MouseEvent('mouseenter'));
    container.dispatchEvent(new window.MouseEvent('mouseleave'));
    expect(container.querySelectorAll('.ease-rating-star.is-active')).toHaveLength(3);
    r.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('hover overrides the committed value visually while hovering', () => {
    const r = new RatingHover(container, { stars: 5 });
    r.setRating(4);
    r.stars[1].dispatchEvent(new window.MouseEvent('mouseenter'));
    expect(container.querySelectorAll('.ease-rating-star.is-active')).toHaveLength(2);
    r.destroy();
  });

  it('marks aria-checked only on the committed star', () => {
    const r = new RatingHover(container, { stars: 5 });
    r.setRating(3);
    expect(r.stars[2].getAttribute('aria-checked')).toBe('true');
    expect(r.stars[0].getAttribute('aria-checked')).toBe('false');
    r.destroy();
  });

  it('uses a default of 5 stars', () => {
    const r = new RatingHover(container);
    expect(r.stars).toHaveLength(5);
    r.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('setRating rejects out-of-range / non-number values', () => {
    const r = new RatingHover(container, { stars: 5 });
    expect(r.setRating(-1)).toBe(false);
    expect(r.setRating(6)).toBe(false);
    expect(r.setRating(NaN)).toBe(false);
    expect(r.rating).toBe(0);
    r.destroy();
  });

  it('mouseenter with an invalid index is ignored', () => {
    const r = new RatingHover(container, { stars: 5 });
    r._onStarEnter(99);
    expect(r.hover).toBe(0);
    r.destroy();
  });

  it('throws without a valid container', () => {
    expect(() => new RatingHover(null)).toThrow(TypeError);
    expect(() => new RatingHover({})).toThrow(TypeError);
  });
});
