# Skeleton Loading Animation

This submission implements a skeleton loading placeholder component with shimmer animation for content loading states (Issue **#14157**).

## What It Does

Provides skeleton loading placeholders using a CSS shimmer animation. When content is loading, skeleton shapes smoothly animate with a moving gradient to indicate progress. Once loaded, the skeletons transition to real content.

## Variants

| Variant | Description |
|---------|-------------|
| `skeleton` | Base class — text line placeholder |
| `skeleton-circle` | Circular placeholder (avatars, icons) |
| `skeleton-card` | Card-shaped placeholder |
| `.line` | Text line with variants `.line-sm` (50%), `.line-xs` (35%), `.line-lg` (18px height) |
| `.image-block` | Rectangular image placeholder |

## Usage

```html
<div class="skeleton" style="width: 100%; height: 14px;"></div>
<div class="skeleton skeleton-circle" style="width: 56px; height: 56px;"></div>
```

## Files

- `demo.html` — Interactive showcase with profile, article, stats & list skeleton cards
- `style.css` — Shimmer keyframes, skeleton classes, layout, real content styles
- `README.md` — This documentation

## Features

- Smooth shimmer animation using `background-position`
- Four skeleton contexts: profile, article, stats dashboard, file list
- Interactive "Simulate Loading" / "Reset" toggle
- `prefers-reduced-motion` support disables animation
- Responsive grid layout
- Dark theme design
