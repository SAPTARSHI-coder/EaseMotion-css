# ease-skeleton

## What does this do?

Provides CSS-only skeleton loading placeholder components with a shimmer animation, supporting multiple shapes (avatar, text, image, card) and dark mode via CSS custom properties.

## How is it used?

Add the `ease-skeleton` class for the base shimmer effect, combined with a shape class:

```html
<!-- Circular avatar skeleton -->
<div class="ease-skeleton ease-skeleton-avatar"></div>

<!-- Rectangular image skeleton -->
<div class="ease-skeleton ease-skeleton-image"></div>

<!-- Text line skeletons (varying width) -->
<div class="ease-skeleton ease-skeleton-text"></div>
<div class="ease-skeleton ease-skeleton-text"></div>

<!-- Card skeleton -->
<div class="ease-skeleton ease-skeleton-card"></div>
```

### The last text line auto-shrinks

`.ease-skeleton-text:last-child` is automatically set to 60% width to simulate realistic text layout.

### Dark mode

Dark mode is supported automatically via `prefers-color-scheme: dark`. The skeleton colors are driven by `--ease-color-muted` and `--ease-color-border` custom properties.

## Why is it useful?

Skeleton loaders improve perceived performance by showing users that content is loading. A standardized set of skeleton components ensures consistency across your application and reduces repetitive styling work.

## Features

- Base shimmer animation (`ease-shimmer`)
- Shape variants: avatar (circle), text (lines), image (rectangle), card
- Last text line auto-shrinks to 60% width
- Dark mode via `prefers-color-scheme` and custom properties
- Respects `prefers-reduced-motion` (static placeholder, no animation)
- Pure CSS, no JavaScript
