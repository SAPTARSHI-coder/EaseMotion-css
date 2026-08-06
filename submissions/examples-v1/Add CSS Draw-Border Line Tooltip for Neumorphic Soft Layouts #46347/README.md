# CSS Draw-Border Line Tooltip for Neumorphic Soft Layouts

A pure CSS tooltip component utilizing a "Draw-Border Line" animation, styled with a soft Neumorphic (soft UI) aesthetic. It employs light and dark drop shadows to create the illusion of extruded triggers and intruded tooltips.

## Features
- **Pure CSS**: Zero JavaScript required for the tooltip display or the drawing border animation.
- **Draw-Border Animation**: Utilizes an SVG `rect` with `pathLength="100"`. The `stroke-dashoffset` is animated from 100 to 0 via a smooth CSS easing curve when triggered. The stroke incorporates a subtle `drop-shadow` to create a glowing, soft border effect.
- **Neumorphic Aesthetic**: Features carefully calculated light (`#ffffff`) and dark (`#a3b1c6`) shadows against a matching soft background (`#e0e5ec`). The triggers appear extruded, while the tooltip box appears carved in (inset shadows).
- **Responsive & Accessible**: Keyboard accessible through `:focus-within`. The visual focus state utilizes color shifts and scaling instead of harsh outlines to maintain the soft aesthetic without sacrificing usability.
- **Custom Properties**: Easily tweak the motion and styling via variables such as `--draw-duration`, `--neu-bg`, and `--tooltip-border-color`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with `@starting-style` for the entrance, and SVG stroke properties for the border tracing effect.

```html
<div class="tooltip-container">
  <!-- Trigger Button -->
  <button class="neumorphic-btn" aria-describedby="tooltip-neu-1">
    <svg>...</svg>
  </button>
  
  <!-- Tooltip Wrapper -->
  <div class="tooltip-wrapper" id="tooltip-neu-1" role="tooltip">
    <div class="tooltip-box">
      <!-- SVG for the draw-border effect -->
      <!-- Make sure rx/ry match the border-radius of the tooltip-box -->
      <svg class="tooltip-border-svg" aria-hidden="true" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" pathLength="100" />
      </svg>
      
      <div class="tooltip-text">
        <!-- Text Content -->
      </div>
    </div>
  </div>
</div>
```
