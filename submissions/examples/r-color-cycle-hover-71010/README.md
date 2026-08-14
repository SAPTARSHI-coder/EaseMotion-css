# CSS Color Cycle on Hover

A responsive CSS-only interaction that cycles through a vibrant color palette when an element is hovered or focused.

## Features

- Pure CSS implementation
- Animated color cycling
- Vibrant multi-color palette
- Smooth hover interaction
- Keyboard focus support
- Responsive layout
- Visible focus state
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Feature documentation

## Usage

Add the `color-card` class to an interactive element.

```html
<a class="color-card" href="#">
  <span class="orb" aria-hidden="true"></span>

  <span class="card-content">
    <span class="card-label">Palette</span>
    <strong>Color Cycle</strong>
    <span>Hover to animate</span>
  </span>

  <span class="arrow" aria-hidden="true">→</span>
</a>