# prefers-reduced-motion — Global Support

**Fixes:** Issue #8373

## Problem

EaseMotion-css is an animation-first framework with no
`@media (prefers-reduced-motion)` support. Users with:

- Vestibular disorders / motion sickness
- Epilepsy / seizure sensitivity
- Cognitive disabilities that make motion distracting

...have **no way to opt out** of the animations the framework applies.
This is a **WCAG 2.1 SC 2.3.3 violation** (Animation from Interactions).

## Fix — Three Layers

### Layer 1: Global CSS Override (add to end of `easemotion.css`)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration:        0.01ms !important;
    animation-iteration-count: 1      !important;
    animation-delay:           0.01ms !important;
    transition-duration:       0.01ms !important;
    transition-delay:          0.01ms !important;
    scroll-behavior:           auto   !important;
  }
}
```

Uses `0.01ms` (not `0s`) so `animationend` / `transitionend` events
still fire and JS callbacks don't break.

### Layer 2: `.ease-reduced` Utility Class

```html
<!-- Disable all animations in a section — no OS setting required -->
<section class="ease-reduced">
  <div class="ease-fade-in card">...</div>
</section>
```

Useful when an app has its own motion preference toggle independent
of the OS setting.

### Layer 3: `.ease-motion-safe` Wrapper

```html
<!-- Decorative animation — removed entirely when motion is reduced -->
<div class="ease-motion-safe">
  <div class="ease-bounce">🎉</div>
</div>
```

Difference from Layer 1/2: sets `animation: none` rather than
`0.01ms`, so truly decorative elements disappear rather than
flash for a single frame.

## Behaviour Summary

| User scenario | Layer 1 (global) | .ease-reduced | .ease-motion-safe |
|---|---|---|---|
| OS reduce-motion ON | ✅ all stop | — | ✅ removed |
| Developer toggles off | — | ✅ all stop | — |
| Normal user | ❌ no effect | ❌ no effect | ✅ plays |

## WCAG Reference

| Criterion | Level | Status after fix |
|---|---|---|
| 2.3.3 Animation from Interactions | AAA | ✅ Satisfied |
| 1.4.3 Contrast (spin/pulse) | AA | Unaffected |
| 2.1.1 Keyboard | A | Unaffected |

## Integration

Add `style.css` content to the **end** of `easemotion.css` or import
it as a separate `reduced-motion.css` file after the main bundle.
Being at the end ensures the `!important` overrides win over all
preceding component styles.

## Acceptance Criteria

- [x] Global `@media (prefers-reduced-motion: reduce)` block added
- [x] Uses `0.01ms` to preserve JS event callbacks
- [x] `.ease-reduced` utility class for developer opt-in
- [x] `.ease-motion-safe` wrapper for decorative-only animations
- [x] Demo shows live OS detection + JS toggle
- [x] WCAG 2.1 SC 2.3.3 satisfied