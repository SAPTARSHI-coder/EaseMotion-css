# CSS Reading Progress Bookmark

A performance-focused reading depth bookmark indicator, using modern native CSS Scroll-Driven animations.

## Features

- Pure CSS scroll timeline tracking (`animation-timeline: scroll(root)`)
- Custom-shaped ribbon bookmark using modern CSS `clip-path`
- Companion horizontal top bar progress indicator
- Fully responsive layout
- Fallbacks for older browsers (bookmark behaves as a static decorative accent)
- Accessibility-compliant static styling for `@media (prefers-reduced-motion: reduce)`
- Zero JavaScript dependencies

## Files

- `demo.html` — demo page with readable long-form text content demonstrating scroll timelines
- `style.css` — positioning, timeline mapping, layout styling, and accessibility adjustments

## Usage

Include the structure below in your layout and link `style.css`:

```html
<!-- Optional Horizontal Top Companion Bar -->
<div class="ease-progress-bar-top" aria-hidden="true"></div>

<!-- Vertical Ribbon Bookmark Indicator -->
<div class="ease-reading-indicator">
  <div class="ease-bookmark" role="presentation">
    <span class="ease-bookmark-icon"><!-- SVG icon --></span>
  </div>
</div>
```

## CSS Custom Properties

Customize sizing and color themes:

```css
:root {
  --bookmark-color: #3b82f6; /* Accent color */
  --bookmark-w:     40px;     /* Ribbon width */
  --bookmark-h:     56px;     /* Ribbon height */
}
```

## Issue

EaseMotion CSS issue #68656.
