# Ease Circular Progress Ring

A modern, responsive, and purely CSS-animated circular progress ring component. It leverages SVG elements alongside CSS variables to achieve smooth `stroke-dashoffset` ease transitions during interactive actions.

## Features
- **Smooth Ease Transitions:** Uses `cubic-bezier` timing variables for premium UI responsiveness.
- **Pure CSS/SVG Interaction:** High-performance animations without reliance on heavy JavaScript execution loops.
- **Customizable:** Control sizing, colors, stroke widths, and active percentages inline or globally via CSS variables.
- **Fully Responsive:** Adapts flawlessly across viewport structures and container dimensions.

## How to Customize Using CSS Variables
You can tweak the looks directly inside the wrapper's `style` attribute or inside your custom theme configuration stylesheets:

```html
<div class="progress-ring-wrapper" style="--progress-percentage: 85; --ring-color: #ff0055; --ring-size: 200px;">
  </div>