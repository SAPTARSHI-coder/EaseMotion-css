# ease-mix-blend & ease-backdrop

Utility classes for CSS `mix-blend-mode`, `background-blend-mode`, `isolation`, `backdrop-filter`, and preset frost/glass effects.

## What

Comprehensive set of single-purpose utility classes for CSS blend and filter effects:

- `ease-mix-blend-*` — `mix-blend-mode` (18 values)
- `ease-bg-blend-*` — `background-blend-mode` (16 values)
- `ease-isolation-*` — `isolation` (auto/isolate)
- `ease-backdrop-blur-*` — Blur levels (8 values)
- `ease-backdrop-brightness-*` — Brightness (9 values)
- `ease-backdrop-contrast-*` — Contrast (7 values)
- `ease-backdrop-grayscale-*` — Grayscale (5 values)
- `ease-backdrop-hue-rotate-*` — Hue rotation (7 values)
- `ease-backdrop-invert-*` — Invert (5 values)
- `ease-backdrop-saturate-*` — Saturate (5 values)
- `ease-backdrop-sepia-*` — Sepia (5 values)
- `ease-backdrop-opacity-*` — Opacity filter (5 values)
- `ease-backdrop-drop-shadow-*` — Drop shadow (7 values)
- `ease-backdrop-filter-none` — Remove backdrop filter
- Preset combos: frost, darken, warm, cool, vintage, dreamy, dramatic, soft-focus, multiple

## How

1. Include `style.css`.
2. Apply any class directly to the target element.

## Why

Provides a consistent naming scheme (`ease-{property}-{value}`) for all CSS blend and backdrop filter utilities, making it easy to compose visual effects without writing custom CSS.

## Class Reference

### Mix Blend Modes (on the element itself)

`.ease-mix-blend-{mode}` where mode = normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity, plus-darker, plus-lighter

### Background Blend Modes (on background layers)

`.ease-bg-blend-{mode}` where mode = normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity

### Isolation

`.ease-isolation-auto`, `.ease-isolation-isolate`

### Backdrop Blur

`.ease-backdrop-blur-{level}` where level = none, sm, (default), md, lg, xl, 2xl, 3xl

### Backdrop Filter Functions

`.ease-backdrop-{func}-{value}` where func = brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia, opacity, drop-shadow

### Preset Effects

`.ease-backdrop-frost`, `.ease-backdrop-darken`, `.ease-backdrop-warm`, `.ease-backdrop-cool`, `.ease-backdrop-vintage`, `.ease-backdrop-dreamy`, `.ease-backdrop-dramatic`, `.ease-backdrop-soft-focus`, `.ease-backdrop-multiple`

## Accessibility

- Backdrop filters can affect text readability. Ensure sufficient contrast when using darken/dramatic presets over text.
