# CSS-Only Scroll Progress Bar

A pure CSS scroll progress indicator that uses modern scroll-driven animations to show how far a user has scrolled through a page.

## What does this do?

Displays a fixed progress bar at the top of the viewport that fills from left to right as the user scrolls down the page. It supports color variants (success, danger, warning), size variants (thin, thick, heavy), and a glow shadow effect — all with zero JavaScript.

## How is it used?

Add a `<div>` element with the class `scroll-progress-bar` at the top of your page:

```html
<div class="scroll-progress-bar"></div>
```

### Color variants

```html
<div class="scroll-progress-bar scroll-progress-bar--success"></div>
<div class="scroll-progress-bar scroll-progress-bar--danger"></div>
<div class="scroll-progress-bar scroll-progress-bar--warning"></div>
```

### Size variants

```html
<div class="scroll-progress-bar scroll-progress-bar--thin"></div>
<div class="scroll-progress-bar scroll-progress-bar--thick"></div>
<div class="scroll-progress-bar scroll-progress-bar--heavy"></div>
```

### With glow effect

```html
<div class="scroll-progress-bar scroll-progress-bar--glow"></div>
```

## Why is it useful?

Scroll progress indicators improve UX by showing users their reading position on long pages. This implementation is:

- **Zero JavaScript** — uses `animation-timeline: scroll()` for pure CSS scroll tracking
- **Accessible** — includes `role="progressbar"` and `aria-label` for screen readers
- **Respects reduced motion** — disables animation when `prefers-reduced-motion: reduce` is active
- **Customizable** — supports color, size, and glow variants through class names
- **Lightweight** — adds less than 1KB of CSS with no runtime overhead
