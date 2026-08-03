# Gradient Border Animation Utility

Implements issue #52815: a reusable, continuously moving gradient
border for cards, buttons, containers, and hero sections.

## What it does

`.ease-gradient-border` wraps an element with a rotating multi-color
gradient border using a `::before` pseudo-element and an animated
`background-position`. The base color, thickness, shape, and speed
can all be adjusted with modifier classes.

## How a developer uses it

```html
<div class="ease-gradient-border">
  Animated Gradient Border
</div>
```

### Modifiers

```html
<!-- Thicker glowing edge -->
<div class="ease-gradient-border ease-gradient-border-thick">...</div>

<!-- Pill / fully rounded shape, e.g. for buttons -->
<div class="ease-gradient-border ease-gradient-border-rounded">...</div>

<!-- Slower, calmer 8s animation cycle -->
<div class="ease-gradient-border ease-gradient-border-slow">...</div>

<!-- Pauses the animation on hover -->
<div class="ease-gradient-border ease-gradient-border-pause-hover">...</div>

<!-- Modifiers are composable -->
<div class="ease-gradient-border ease-gradient-border-rounded ease-gradient-border-thick ease-gradient-border-pause-hover">
  ...
</div>
```

## Accessibility

Wrapped in `@media (prefers-reduced-motion: reduce)`: the animation
is disabled and the gradient border is shown as a static frame at a
fixed position, rather than removed entirely — so users who've asked
for less motion still see the visual effect, just not moving.

## Why this fits EaseMotion CSS

It follows the same pattern as the rest of the library: a single
human-readable base class (`ease-gradient-border`) plus small,
composable modifier classes, zero JavaScript, and works by just
linking the stylesheet.

## Files

- `demo.html` — all variants (base, thick, rounded, slow, pause-on-hover,
  and combined), self-contained and opens directly in a browser
- `style.css` — the gradient border utility and its modifiers
- `README.md` — this file
