# CSS Draw-Border Line Tooltip for Creative Portfolio Layouts

A pure CSS tooltip component utilizing a "Draw-Border Line" animation, styled with an editorial/creative portfolio aesthetic. It's perfect for revealing details about artworks, photography, or projects upon hovering over gallery thumbnails.

## Features
- **Pure CSS**: Zero JavaScript required for the tooltip display or the drawing border animation.
- **Draw-Border Animation**: Utilizes an SVG `rect` with `pathLength="100"`. The `stroke-dashoffset` is animated from 100 to 0 via a dramatic CSS easing curve (`cubic-bezier(0.65, 0, 0.35, 1)`) when triggered. Includes an additional colored accent corner that fades and slides in concurrently.
- **Creative Aesthetic**: Features sharp corners, elegant typography (serif `Playfair Display` paired with sans-serif `Work Sans`), off-white editorial backgrounds, and distinctive hover states on the gallery imagery (transitioning from grayscale to full color).
- **Responsive & Accessible**: Keyboard accessible through `:focus-within`, enabling standard tab navigation over the image buttons.
- **Custom Properties**: Easily tweak the motion and styling via variables such as `--draw-duration`, `--accent-color`, and `--border-color`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with `@starting-style` for the entrance, and SVG stroke properties for the border tracing effect.

```html
<div class="tooltip-container">
  <!-- Trigger Button (Image Thumbnail) -->
  <button class="gallery-trigger" aria-describedby="tooltip-art-1">
    <img src="..." alt="...">
  </button>
  
  <!-- Tooltip Wrapper -->
  <div class="tooltip-wrapper" id="tooltip-art-1" role="tooltip">
    <div class="tooltip-box">
      <!-- SVG for the draw-border effect -->
      <svg class="tooltip-border-svg" aria-hidden="true" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" pathLength="100" />
      </svg>
      
      <div class="tooltip-text">
        <!-- Text Content -->
      </div>
    </div>
  </div>
</div>
```
