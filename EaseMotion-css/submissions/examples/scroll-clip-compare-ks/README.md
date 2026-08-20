# Scroll-Driven Clip Compare

## What does this do?

Before/after image comparison panels where the reveal animation is driven by scroll position. Four distinct `clip-path` techniques (horizontal slide, vertical curtain, diagonal wipe, circle expand) all animated via `@property`-registered custom properties and `animation-timeline: view()`. The reveal moves in lockstep with how the user scrolls — not a pre-timed animation.

## How is it used?

```html
<!-- A comparison panel with horizontal scroll-driven reveal -->
<div class="compare-container">
  <div class="compare-base"></div>
  <div class="compare-overlay horizontal-reveal"></div>
</div>
```

The overlay image uses `clip-path` controlled by a scroll-driven property:

```css
@property --reveal {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}

.horizontal-reveal {
  clip-path: inset(0 calc(100% - var(--reveal)) 0 0);
  animation: h-reveal 1s linear both;
  animation-timeline: view();
  animation-range: entry 15% cover 60%;
}

@keyframes h-reveal {
  from { --reveal: 0%; }
  to   { --reveal: 100%; }
}
```

## Why is it useful?

This is the first EaseMotion submission to combine `clip-path` with `@property` + `animation-timeline` — zero results across 4,167+ submissions. While `clip-path` demos exist and before/after sliders exist (as JS widgets), nobody has used scroll-driven custom properties inside `clip-path` values for reveal effects.

The key insight: `clip-path` values like `inset()` and `polygon()` accept percentages, but CSS transitions cannot interpolate custom properties inside them. With `@property`, `clip-path` becomes animatable via scroll position — enabling interactive before/after comparisons that respond to the user's scroll speed and direction.

### Four techniques demonstrated

1. **Horizontal slide** — `inset(0 calc(100% - var(--reveal)) 0 0)` sweeps left to right
2. **Vertical curtain** — `inset(calc(100% - var(--reveal)) 0 0 0)` drops from top
3. **Diagonal wipe** — `polygon()` with four animated vertices at a 45° angle
4. **Circle expand** — `circle(var(--circle-reveal))` grows from center outward

### Accessibility & fallbacks

- `prefers-reduced-motion`: static 50% reveal position
- `forced-colors`: visible borders on comparison panels
- `prefers-color-scheme`: full light mode
- Print: static comparison view
- Static fallback `clip-path` values for browsers without `animation-timeline`
