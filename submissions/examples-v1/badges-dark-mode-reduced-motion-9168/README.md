# Badges Dark Mode & Reduced Motion Fix — Issue #9168

**Fixes:** #9168

## What does this do?

Adds three missing fixes to `components/badges.css`:

1. **Success variant ping color** — `.ease-badge-success.ease-badge-pulse` was
   showing a purple glow instead of a green one
2. **`prefers-reduced-motion` support** — the `::after` ping animation keeps
   running even when Reduce Motion is enabled
3. **Dark mode ping intensity** — reduces glow opacity from 70% to 45% in dark
   mode, matching the framework's other dark-mode glow tokens

## The problems

### Missing success ping color

`badges.css` overrides the ping glow color for the danger variant but not for
success. A green `.ease-badge-success.ease-badge-pulse` falls back to the base
primary (purple) glow — wrong for a green badge.

### No prefers-reduced-motion

The `::after` pseudo-element on `.ease-badge-pulse` runs `ease-kf-ping`
infinitely. The blanket `[class*="ease-"]` rule in `core/animations.css` targets
elements by class, **not pseudo-elements**. It never reaches `::after`, so the
animation keeps running even when Reduce Motion is enabled.

### Ping too intense in dark mode

The current glow is `rgba(108, 99, 255, 0.7)` (70% opacity). Against the dark
background `#0b1121`, this is proportionally more intense than on light. The
framework's other dark-mode glow tokens use 45% opacity — this fix aligns badges
with that convention.

## The fix

```css
/* 1. Correct green glow for success badges */
.ease-badge-success.ease-badge-pulse::after {
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
}

/* 2. Stop the ping when Reduce Motion is enabled */
@media (prefers-reduced-motion: reduce) {
  .em-badge-pulse::after,
  .ease-badge-pulse::after {
    animation: none !important;
  }
}

/* 3. Reduce glow intensity in dark mode */
@media (prefers-color-scheme: dark) {
  .em-badge-pulse::after,
  .ease-badge-pulse::after {
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.45);
  }
  .em-badge-danger.em-badge-pulse::after,
  .ease-badge-danger.ease-badge-pulse::after {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.45);
  }
  .ease-badge-success.ease-badge-pulse::after {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45);
  }
}
```

## Demo

The demo shows all three issues side by side. A **Simulate Reduce Motion** toggle
demonstrates the broken vs fixed ping behaviour without needing OS settings or
DevTools. Dark mode and wrong glow color can be tested with the DevTools
Rendering panel.
