# CSS Animated Hamburger Menu

A CSS-only animated hamburger menu featuring multiple transition variants for opening and closing the menu icon.

## Features

- Pure CSS implementation
- No JavaScript required
- Three animation variants
- Responsive design
- CSS custom properties for easy customization
- Light and dark mode support
- Keyboard accessible controls
- Reduced-motion support
- Self-contained demo

## Variants

The demo includes three hamburger animation styles:

1. **Classic Cross** — the top and bottom bars rotate to form an X.
2. **Spin** — the complete icon rotates while transforming into a close icon.
3. **Collapse** — the middle bar disappears while the outer bars transform into a close icon.

## Usage

Add a checkbox input and label to your HTML:

```html
<input type="checkbox" id="hamburger" class="hamburger-toggle">

<label for="hamburger" class="hamburger" aria-label="Toggle navigation menu">
  <span></span>
  <span></span>
  <span></span>
</label>