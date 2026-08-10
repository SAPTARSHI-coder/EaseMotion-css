# CSS Color Swatch Grid

A responsive color palette grid with accessible keyboard navigation and one-click HEX color copying.

## Features

- Responsive color swatch grid
- One-click HEX value copying
- Pure CSS styling
- Small JavaScript clipboard handler for the copy functionality
- Keyboard accessible buttons
- Visible focus indicators
- Copy confirmation feedback
- Responsive mobile layout
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — Demo markup and clipboard functionality
- `style.css` — Complete component styling

## Usage

A swatch can be created with a button and a `data-color` attribute:

```html
<button
  class="swatch"
  type="button"
  data-color="#8B5CF6"
  aria-label="Copy violet color HEX #8B5CF6"
>
  <span class="color-preview"></span>

  <span class="swatch-info">
    <span class="color-name">Violet</span>
    <span class="hex-value">#8B5CF6</span>
  </span>
</button>