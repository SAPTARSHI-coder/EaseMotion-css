# Back-to-Top Button Component

Floating button that appears when scrolling past a threshold, with smooth scroll-to-top on click.

## Files

- `style.css` — Back-to-top component styles
- `script.js` — Scroll listener with show/hide logic
- `demo.html` — Live demo

## Usage

```html
<button class="ease-back-to-top" aria-label="Back to top">↑</button>
<script src="path/to/script.js"></script>
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-back-to-top` | Fixed floating button (hidden by default) |
| `.ease-visible` | Shown when scrolled past threshold |
| `.ease-back-to-top-sm` | 36px size |
| `.ease-back-to-top-lg` | 52px size |
| `.ease-back-to-top-outline` | Outline style variant |
| `.ease-back-to-top-secondary` | Secondary color variant |
| `.ease-back-to-top-raised` | Extended bottom/right offset |

## JS

- Shows button after scrolling 400px (configurable via `scrollThreshold` in source)
- Uses `scrollTo({ behavior: 'smooth' })` for smooth scroll
- Respects `prefers-reduced-motion: reduce`
- Passive scroll listener for performance
