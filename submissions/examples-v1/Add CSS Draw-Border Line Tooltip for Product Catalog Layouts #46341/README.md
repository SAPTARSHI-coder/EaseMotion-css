# CSS Draw-Border Line Tooltip for Product Catalog Layouts

A pure CSS tooltip component utilizing a sleek "Draw-Border Line" animation, styled for modern Product Catalog (e-commerce) interfaces. It is perfect for displaying additional product specifications, material details, or sizing info when hovering over small info icons.

## Features
- **Pure CSS**: Zero JavaScript required for the tooltip display or the drawing border animation.
- **Draw-Border Animation**: Utilizes an SVG `rect` with `pathLength="100"`. The `stroke-dashoffset` is animated from 100 to 0 via a crisp CSS easing curve (`cubic-bezier(0.25, 1, 0.5, 1)`) when triggered.
- **E-commerce Aesthetic**: Features clean lines, tight border radii (`4px`), high-contrast modern typography (`Inter`), and subtle product card hover effects designed to fit perfectly into modern retail layouts.
- **Responsive & Accessible**: Uses `:focus-within` on the container to ensure the tooltip is navigable and readable via keyboard tabbing.
- **Custom Properties**: Easily tweak the motion and styling via variables such as `--draw-duration`, `--tooltip-bg`, and `--brand-primary`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with `@starting-style` for the entrance, and SVG stroke properties for the border tracing effect.

```html
<span class="tooltip-container">
  <!-- Trigger Button (Info Icon) -->
  <button class="info-trigger" aria-expanded="false" aria-describedby="tooltip-catalog-1">
    <svg>...</svg>
  </button>
  
  <!-- Tooltip Wrapper -->
  <span class="tooltip-wrapper" id="tooltip-catalog-1" role="tooltip">
    <span class="tooltip-box">
      <!-- SVG for the draw-border effect -->
      <svg class="tooltip-border-svg" aria-hidden="true" width="100%" height="100%">
        <!-- Ensure rx/ry matches the tooltip-box border-radius -->
        <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="100" />
      </svg>
      
      <span class="tooltip-text">
        <!-- Text Content -->
      </span>
    </span>
  </span>
</span>
```
