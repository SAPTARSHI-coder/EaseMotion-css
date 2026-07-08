# Animated Pagination — Issue #7419

## Overview

CSS pagination with stagger-fade-in animation, active page pulse, hover lift, disabled states, and three size variants.

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Default | `.ease-pagination` | Standard size (2.25rem) |
| Small | `.ease-pagination-sm` | Compact (1.75rem) |
| Large | `.ease-pagination-lg` | Large (2.75rem) |

## States

| State | Class | Description |
|-------|-------|-------------|
| Active | `.active` + `.ease-page-item` | Primary fill + scale pulse animation |
| Hover | `.ease-page-link:hover` | Background fill + slight lift |
| Disabled | `.disabled` + `.ease-page-item` | Greyed out, no pointer events |

## Animations

- **Stagger fade-in**: Each item fades in sequentially with `animation-delay` (30ms steps)
- **Active pulse**: `scale(1) → scale(1.1) → scale(1)` on active page
- **Hover lift**: `translateY(-1px)` with background + border change

## Usage

```html
<ul class="ease-pagination">
  <li class="ease-page-item disabled"><a class="ease-page-link" href="#">‹</a></li>
  <li class="ease-page-item active"><a class="ease-page-link" href="#">1</a></li>
  <li class="ease-page-item"><a class="ease-page-link" href="#">2</a></li>
  <li class="ease-page-item"><a class="ease-page-link" href="#">›</a></li>
</ul>
```

## Files

- `demo.html` — Interactive demo with 5 variants + page switcher
- `style.css` — Pagination component styles
- `README.md` — This documentation
