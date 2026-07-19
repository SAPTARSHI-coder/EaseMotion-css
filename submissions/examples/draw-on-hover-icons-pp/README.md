# Interactive SVG Path Draw-on-Hover Icon Grid

## What does this do?

This component implements a responsive grid of feature cards that dynamically trace their borders and inline SVG icons upon hover or focus events. It uses pure CSS vector manipulation to simulate real-time drawing actions without JavaScript.

## How is it used?

Wrap card items inside a `.grid-container` wrapper. Each card contains an absolute SVG border overlay and an inline SVG icon, both standardizing path units using `pathLength="100"`:

```html
<div class="feature-card card-cyan" tabindex="0">
  <!-- Border overlay -->
  <svg class="card-border" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect rx="4" ry="4" width="100%" height="100%" pathLength="100" />
  </svg>

  <!-- Vector Icon -->
  <div class="icon-wrapper">
    <svg class="draw-icon" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" pathLength="100" />
      <polyline points="8 6 2 12 8 18" pathLength="100" />
    </svg>
  </div>

  <div class="card-content">
    <h3>Title</h3>
    <p>Description text...</p>
  </div>
</div>
```

## Why is it useful?

Applying stroke-draw transitions traditionally requires measuring the physical perimeter of vector shapes via JavaScript (`SVGPathElement.getTotalLength()`) and injecting inline styles.

Key architectural advantages of this pure CSS approach:

- **pathLength Standardizing**: By declaring `pathLength="100"` inline on SVG elements (rectangles, paths, polylines, circles), we calibrate their layout coordinate system to exactly 100. This makes `stroke-dashoffset` values (from 100 to 0) function uniformly across different shapes and sizes in CSS.
- **Hardware-Accelerated Glows**: The hover glow utilizes compositor-accelerated `filter: drop-shadow()` styles to create clean, responsive outer highlights instead of heavy box-shadow repaints.
- **Accessibility Friendly**: Supports keyboard tabs and focus-visible state bindings. Fully respects `prefers-reduced-motion: reduce` preference by bypassing trace animations and immediately revealing static colored outline states to prevent motion sickness.

## Tech Stack

- HTML5
- CSS3 (Dasharray animations, Vector styling, Compositor Filters, Reduced Motion queries)

## Preview

Open `demo.html` directly in any modern web browser to view the interactive grid.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-draw-icon`, `.ease-feature-card`) and replace hardcoded colors with project theme variables on merge.
