# ease-text-fluid — Fluid Typography Scale Utilities

## What does this do?

Adds fluid (responsive) typography utility classes to EaseMotion CSS using the CSS `clamp()` function. Unlike fixed `ease-text-*` classes, fluid typography scales smoothly between a minimum and maximum size based on viewport width — no media queries required.

## How is it used?

```html
<!-- Fluid heading that scales from 2rem to 4rem -->
<h1 class="ease-text-fluid-3xl">Responsive Heading</h1>

<!-- Fluid body text -->
<p class="ease-text-fluid-base">This text scales smoothly as the viewport changes.</p>
```

### Variants

| Class | `clamp()` value | Use case |
|---|---|---|
| `.ease-text-fluid-xs` | `clamp(0.75rem, 1vw, 0.875rem)` | Small labels |
| `.ease-text-fluid-sm` | `clamp(0.875rem, 1.5vw, 1rem)` | Captions, meta |
| `.ease-text-fluid-base` | `clamp(1rem, 2vw, 1.125rem)` | Body text |
| `.ease-text-fluid-lg` | `clamp(1.125rem, 2.5vw, 1.5rem)` | Lead / subtitle |
| `.ease-text-fluid-xl` | `clamp(1.25rem, 3vw, 2rem)` | Section heading |
| `.ease-text-fluid-2xl` | `clamp(1.5rem, 4vw, 3rem)` | Major heading |
| `.ease-text-fluid-3xl` | `clamp(2rem, 5vw, 4rem)` | Hero / display |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-text-fluid-min` | `16` | Minimum viewport width (rem) used in clamp calculation |
| `--ease-text-fluid-max` | `80` | Maximum viewport width (rem) used in clamp calculation |

## Why is it useful?

Fluid typography eliminates the need for multiple `@media` breakpoints to adjust text sizes. Text scales naturally between the minimum and maximum viewport, keeping proportions consistent across all screen sizes.

## Features

- 7 fluid sizes matching the existing `ease-text-*` scale
- Smooth scaling between viewport widths
- No media queries required
- All classes use `!important` to match EaseMotion utility conventions
- Works with EaseMotion's existing `--ease-text-*` design tokens as reference
