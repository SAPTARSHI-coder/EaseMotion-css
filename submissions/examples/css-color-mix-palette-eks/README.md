# CSS color-mix() Tint & Shade Palette Generator

## What does this do?

Demonstrates generating complete 11-stop color scales (5 tints + base + 5 shades) from a single base color using CSS `color-mix()` in the `oklch` color space — purely in CSS, no JavaScript.

## How is it used?

```css
/* Define a single base color */
--cp-purple: oklch(0.55 0.18 303);

/* Generate tints — mix with white */
--cp-purple-tint-80: color-mix(in oklch, var(--cp-purple) 20%, white 80%);

/* Generate shades — mix with black */
--cp-purple-shade-30: color-mix(in oklch, var(--cp-purple) 70%, black 30%);

/* Use anywhere in your design system */
.card {
  background: var(--cp-purple-tint-90);
  border: 2px solid var(--cp-purple-tint-70);
  color: var(--cp-purple-shade-20);
}

.button {
  background: var(--cp-purple);
  color: white;
}

.button:hover {
  background: var(--cp-purple-shade-50);
}
```

The demo shows three ready-to-use palettes (blue, purple, green) plus a real card component example.

## Why is it useful?

Design systems typically need 10+ color stops per hue — generating them manually or with preprocessors is tedious and error-prone. CSS `color-mix()` in `oklch` computes these at runtime in the browser:

- **Single source of truth** — change one `--base` color and the entire palette updates
- **Perceptually uniform** — `oklch` produces visually smooth gradients unlike `srgb`
- **Zero runtime cost** — browser-native computation, no JavaScript
- **Dynamic theming** — pair with `prefers-color-scheme` or CSS custom properties for instant theme switching
- **Browser support** — `color-mix()` is Baseline 2023, supported in all modern browsers

This fits EaseMotion's philosophy: readable, declarative CSS that does more with less — one variable to rule the whole color scale.
