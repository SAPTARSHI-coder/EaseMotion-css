import { describe, it, expect } from 'vitest';
import {
  resolveAnimationClass,
  resolveHoverClass,
  isDurationKeyword,
  normalizeIteration,
  buildAnimateClassName,
  buildAnimateStyle,
} from './animationClasses.js';
import { buildRevealClassName, REVEAL_VARIANT_MAP } from './scrollRevealCore.js';

describe('resolveAnimationClass', () => {
  it('maps known types to their framework classes', () => {
    expect(resolveAnimationClass('fade-in')).toBe('ease-fade-in');
    expect(resolveAnimationClass('slide-up')).toBe('ease-slide-up');
    expect(resolveAnimationClass('zoom-in')).toBe('ease-zoom-in');
  });

  it('resolves aliases to canonical classes', () => {
    expect(resolveAnimationClass('spin')).toBe('ease-rotate');
    expect(resolveAnimationClass('slide-left')).toBe('ease-slide-in-left');
    expect(resolveAnimationClass('slide-right')).toBe('ease-slide-in-right');
  });

  it('falls back to ease-<type> for unknown types', () => {
    expect(resolveAnimationClass('sparkle')).toBe('ease-sparkle');
  });

  it('returns empty string for missing type', () => {
    expect(resolveAnimationClass()).toBe('');
    expect(resolveAnimationClass('')).toBe('');
  });
});

describe('resolveHoverClass', () => {
  it('maps hover effect keywords to framework classes', () => {
    expect(resolveHoverClass('lift')).toBe('ease-hover-lift');
    expect(resolveHoverClass('scale')).toBe('ease-hover-grow');
    expect(resolveHoverClass('glow')).toBe('ease-hover-glow');
    expect(resolveHoverClass('shrink')).toBe('ease-hover-shrink');
  });

  it('returns empty string for unknown or missing effect', () => {
    expect(resolveHoverClass('nope')).toBe('');
    expect(resolveHoverClass()).toBe('');
  });
});

describe('isDurationKeyword', () => {
  it('recognises the utility keywords', () => {
    expect(isDurationKeyword('fast')).toBe(true);
    expect(isDurationKeyword('medium')).toBe(true);
    expect(isDurationKeyword('slow')).toBe(true);
  });

  it('rejects numbers and other strings', () => {
    expect(isDurationKeyword(300)).toBe(false);
    expect(isDurationKeyword('turbo')).toBe(false);
  });
});

describe('normalizeIteration', () => {
  it('passes through infinite', () => {
    expect(normalizeIteration('infinite')).toBe('infinite');
    expect(normalizeIteration(Infinity)).toBe('infinite');
  });

  it('stringifies positive finite counts', () => {
    expect(normalizeIteration(3)).toBe('3');
    expect(normalizeIteration('2')).toBe('2');
  });

  it('returns null for nullish or invalid counts', () => {
    expect(normalizeIteration(null)).toBeNull();
    expect(normalizeIteration(undefined)).toBeNull();
    expect(normalizeIteration(0)).toBeNull();
    expect(normalizeIteration(-1)).toBeNull();
    expect(normalizeIteration('abc')).toBeNull();
  });
});

describe('buildAnimateClassName', () => {
  it('combines animation, duration keyword, hover and extra classes in order', () => {
    const result = buildAnimateClassName({
      type: 'fade-in',
      duration: 'slow',
      hover: 'lift',
      className: 'demo-card',
    });
    expect(result).toBe('ease-fade-in ease-duration-slow ease-hover-lift demo-card');
  });

  it('omits the duration utility when duration is numeric', () => {
    const result = buildAnimateClassName({ type: 'zoom-in', duration: 350 });
    expect(result).toBe('ease-zoom-in');
  });

  it('produces an empty string when nothing is supplied', () => {
    expect(buildAnimateClassName({})).toBe('');
    expect(buildAnimateClassName()).toBe('');
  });
});

describe('buildAnimateStyle', () => {
  it('inlines numeric duration in ms', () => {
    const style = buildAnimateStyle({ duration: 350 });
    expect(style.animationDuration).toBe('350ms');
    expect(style.transitionDuration).toBe('350ms');
  });

  it('does not inline keyword durations', () => {
    const style = buildAnimateStyle({ duration: 'medium' });
    expect(style.animationDuration).toBeUndefined();
  });

  it('inlines a positive delay and skips zero', () => {
    expect(buildAnimateStyle({ delay: 200 }).animationDelay).toBe('200ms');
    expect(buildAnimateStyle({ delay: 0 }).animationDelay).toBeUndefined();
  });

  it('applies a normalized iteration count', () => {
    expect(buildAnimateStyle({ iteration: 'infinite' }).animationIterationCount).toBe('infinite');
    expect(buildAnimateStyle({ iteration: 2 }).animationIterationCount).toBe('2');
    expect(buildAnimateStyle({ iteration: 0 }).animationIterationCount).toBeUndefined();
  });

  it('preserves caller-provided style without mutating it', () => {
    const input = { color: 'red' };
    const output = buildAnimateStyle({ duration: 100, style: input });
    expect(output.color).toBe('red');
    expect(output.animationDuration).toBe('100ms');
    expect(input.animationDuration).toBeUndefined();
  });
});

describe('buildRevealClassName', () => {
  it('always includes the hidden base class', () => {
    expect(buildRevealClassName({}).split(' ')).toContain('ease-reveal');
  });

  it('appends the direction variant class', () => {
    expect(buildRevealClassName({ variant: 'up' })).toBe('ease-reveal ease-reveal-up');
    expect(buildRevealClassName({ variant: 'left' })).toBe('ease-reveal ease-reveal-left');
  });

  it('uses only the base class for the plain fade variant', () => {
    expect(buildRevealClassName({ variant: 'fade' })).toBe('ease-reveal');
  });

  it('ignores unknown variants and appends extra className', () => {
    expect(buildRevealClassName({ variant: 'sideways', className: 'card' })).toBe('ease-reveal card');
  });

  it('exposes a variant map covering the framework directions', () => {
    expect(Object.keys(REVEAL_VARIANT_MAP)).toEqual(
      expect.arrayContaining(['up', 'down', 'left', 'right', 'scale', 'fade'])
    );
  });
});
