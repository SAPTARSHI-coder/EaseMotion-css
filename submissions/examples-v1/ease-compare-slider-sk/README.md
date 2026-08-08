# Before/After Image Comparison Slider

> CSS-driven split-view slider for comparing two images side by side. Uses `clip-path` with a CSS custom property for real-time position control. Optional JavaScript syncs the range input. Works horizontally or vertically.

## What does this do?

A before/after image comparison component that reveals the "after" image using `clip-path: inset()`. The reveal position is controlled by a CSS custom property (`--compare-pos`) that can be driven by an invisible range input (JS-enhanced) or set to any static value. The component includes a draggable handle with left/right arrow icon, divider line, floating "before"/"after" labels, and full dark mode support.

## How is it used?

```html
<div class="compare-slider">
  <img src="before.jpg" class="compare-image compare-image-before" alt="Before" />
  <img src="after.jpg" class="compare-image compare-image-after" alt="After" />
  <div class="compare-divider"></div>
  <div class="compare-handle"></div>
  <span class="compare-label compare-label-before">Before</span>
  <span class="compare-label compare-label-after">After</span>
  <input type="range" class="compare-range" min="0" max="100" value="50" />
</div>

<script>
  // Optional: sync range input to --compare-pos
  document.querySelectorAll(".compare-slider").forEach(function(s) {
    var r = s.querySelector(".compare-range");
    r.addEventListener("input", function() {
      s.style.setProperty("--compare-pos", r.value + "%");
    });
  });
</script>
```

### Without JavaScript

The `--compare-pos` defaults to `50%`. Your range input can set the initial `value` to any percentage and it will display at that split. The JS is only needed for interactive dragging — without it, the slider works as a static 50/50 split.

### Variants

| Class | Description |
|-------|-------------|
| `compare-slider` | Base horizontal split with circular handle |
| `compare-slider-vertical` | Top/bottom split (add to same element) |
| `compare-slider-sm` | Smaller thumbnail size (max-width: 400px) |
| `compare-handle-rounded` | Bar-shaped handle instead of circle (add to handle element) |

### CSS Custom Properties

Override any of these to customize the appearance:

| Property | Default | Purpose |
|----------|---------|---------|
| `--compare-pos` | `50%` | Split position (set by JS) |
| `--compare-handle-size` | `44px` | Handle dimensions |
| `--compare-handle-accent` | `#6c63ff` | Handle accent / focus color |
| `--compare-divider-width` | `3px` | Width of the divider line |
| `--compare-radius` | `0.75rem` | Container border radius |
| `--compare-label-bg` | `rgba(0,0,0,0.6)` | Label background |

## Why is it useful?

Image comparison sliders are a common UI pattern in SaaS landing pages (showing app transformations), photography portfolios (original vs. edited), and design tool marketing (before/after edits). Existing EaseMotion components cover cards, modals, tabs, tooltips — but nothing for side-by-side visual comparison.

This component:

- **Uses `clip-path: inset()` with a CSS custom property** — the cleanest CSS-only way to reveal part of an image
- **Clip-path approach preserves image sharpness** at all zoom levels, unlike `background-clip` or `width`-based approaches
- **Works horizontally or vertically** — vertical mode is great for mobile-first designs
- **Minimal JavaScript (7 lines)** — just sets a CSS custom property from a range input. The entire reveal mechanism is pure CSS
- **Fully responsive** — 16:9 aspect ratio via `::before` padding trick, handle and labels scale down on mobile
- **Keyboard accessible** — the invisible range input receives focus and works with arrow keys
- **Dark mode via `prefers-color-scheme`**
- **Respects `prefers-reduced-motion`**
