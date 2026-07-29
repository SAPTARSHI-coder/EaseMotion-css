# Optimized Animations: Transform & Opacity

Demonstrates the performance optimization goals from the issue: replacing
layout-triggering CSS properties (`left`, `width`) with GPU-accelerated
`transform` and `opacity` animations, plus a set of reusable
GPU-friendly utility classes.

## Files
- `demo.html` - Side-by-side before/after comparison + utility class demo
- `style.css` - Component and animation styles
- `README.md` - This file

## What it shows

### 1. Before (Unoptimized)
A box animated using `left` and `width`. These properties trigger the
browser's layout and paint stages on every frame, which is expensive
and can cause jank on low-end devices.

### 2. After (Optimized)
The same visual motion achieved using `transform: translateX()`,
`transform: scale()`, and `opacity`. These properties are handled by
the GPU compositor and skip layout/paint entirely, resulting in
smoother animation.

### 3. Reusable Utility Classes
Three drop-in utility classes built only on `transform` and `opacity`:

```html
<div class="ease-fade-in">Fades in/out</div>
<div class="ease-scale-in">Scales in/out</div>
<div class="ease-slide-up">Slides up with fade</div>
```

## Why it fits
This directly addresses the issue's optimization goals:
- Avoids layout-triggering properties (`top`, `left`, `width`, `height`)
- Uses `transform` and `opacity` for GPU-accelerated motion
- Improves frame rate smoothness, especially on low-end devices
- No visual regressions — both versions look visually equivalent in motion intent

## Notes
- `will-change` was intentionally omitted to avoid unnecessary memory
  overhead for simple, continuous animations; can be added per-use-case
  if profiling shows benefit on heavier compositions.
