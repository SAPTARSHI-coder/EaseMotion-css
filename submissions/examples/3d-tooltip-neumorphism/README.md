# 3D Tooltip with Neumorphism

A responsive and accessible 3D tooltip component built with pure HTML and Vanilla CSS.

## Features

- Neumorphic visual design
- 3D tooltip entrance animation
- Smooth CSS transitions
- Hover and keyboard focus support
- Responsive layout
- Dark mode support
- Reduced-motion support
- No JavaScript
- No external dependencies

## Files

- `demo.html` — standalone demonstration
- `style.css` — complete component styling

## Usage

Add the tooltip trigger and tooltip element:

```html
<button
  class="tooltip-trigger"
  type="button"
  aria-describedby="tooltip"
>
  <span class="icon" aria-hidden="true">?</span>

  <span
    class="tooltip"
    id="tooltip"
    role="tooltip"
  >
    Learn more about this feature
  </span>
</button>