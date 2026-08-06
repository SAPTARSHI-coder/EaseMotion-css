# CSS Draw-Border Line Tooltip for Accessible Web Layouts

A pure CSS tooltip component prioritizing accessibility. It features a decorative "Draw-Border Line" animation that traces the perimeter of the tooltip upon hover or focus, while strictly adhering to high-contrast and reduced-motion standards.

## Features
- **Pure CSS**: Zero JavaScript required for the interaction or the SVG border animation.
- **Draw-Border Animation**: Utilizes an embedded SVG `rect` with `pathLength="100"`, animating the `stroke-dashoffset` from 100 to 0 via CSS transitions when the tooltip is triggered.
- **Accessibility First**:
  - Semantic HTML structure.
  - High contrast focus rings (`:focus-visible`) for clear keyboard navigation.
  - Large, highly legible typography using a system font stack.
  - Full support for `@media (prefers-reduced-motion: reduce)` which elegantly disables the drawing animation for users sensitive to motion.
  - Support for Windows High Contrast Mode via `@media (forced-colors: active)`.
- **Custom Properties**: Configurable via CSS variables such as `--draw-duration`, `--tooltip-bg`, and `--focus-ring-color`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with `@starting-style` for the entrance, and SVG stroke properties for the border effect.

```html
<span class="tooltip-container">
  <button class="tooltip-trigger" aria-expanded="false" aria-describedby="tooltip-content-1">
    Trigger Text
  </button>
  
  <span class="tooltip-wrapper" id="tooltip-content-1" role="tooltip">
    <span class="tooltip-box">
      <!-- The SVG that handles the drawing border -->
      <svg class="tooltip-border-svg" aria-hidden="true" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" pathLength="100" />
      </svg>
      
      <span class="tooltip-text">
        <!-- Content -->
      </span>
    </span>
  </span>
</span>
```
