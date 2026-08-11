# CSS Hover Preview Card

A responsive CSS-only hover preview card that reveals a destination
preview when users hover or keyboard-focus a link.

## Features

- Pure HTML and CSS
- Hover destination preview
- Keyboard focus preview
- Smooth reveal animation
- Responsive layout
- Accessible semantic links
- Visible keyboard focus state
- Reduced-motion support
- Forced-colors/high-contrast support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Create a link with a preview card inside it:

```html
<a class="preview-link" href="#destination">
  <span class="link-content">
    <span class="link-title">Destination</span>
    <span class="link-url">example.dev/page</span>
  </span>

  <span class="preview-card" aria-hidden="true">
    Preview content goes here.
  </span>
</a>