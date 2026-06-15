# Skeleton Loading — Issue #7522

## Overview

Skeleton loading placeholders with shimmer animation. Shape variants: text, circle (avatar), rectangle (image), card, table.

## Shapes

| Shape | Class | Use |
|-------|-------|-----|
| Default | `.ease-skeleton` | Text line (rounded) |
| Circle | `.ease-skeleton-circle` | Avatar / icon |

## Sizes

| Class | Height |
|-------|--------|
| `.ease-skeleton-sm` | 0.5rem |
| `.ease-skeleton-md` | 0.75rem |
| `.ease-skeleton-lg` | 1rem |
| `.ease-skeleton-xl` | 1.5rem |
| `.ease-skeleton-2xl` | 2.5rem |

## Usage

```html
<div class="ease-skeleton ease-skeleton-circle" style="width: 56px; height: 56px;"></div>
<div class="ease-skeleton ease-skeleton-lg" style="width: 60%;"></div>
```

## Files

- `demo.html` — Profile, article, card grid, table skeleton layouts
- `style.css` — Shimmer animation, shape/size classes, layout demos
- `README.md` — This documentation
