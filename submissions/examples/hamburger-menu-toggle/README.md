# 🍔 Hamburger Menu to X Toggle

A lightweight, accessible hamburger menu icon that smoothly transforms
into an X/close icon using pure CSS.

This component uses the CSS checkbox hack, so no JavaScript is required.

## Features

- Pure CSS implementation
- No JavaScript
- Three horizontal hamburger bars
- Smooth hamburger-to-X transformation
- Middle bar fades out
- Top and bottom bars rotate
- Keyboard accessible
- Visible focus state
- Responsive layout
- Reduced-motion support
- Includes a demo navigation menu

## Usage

Add the checkbox and label structure:

```html
<input
  class="menu-checkbox"
  type="checkbox"
  id="menu-toggle"
  aria-label="Toggle navigation menu"
>

<label
  class="ease-menu-toggle"
  for="menu-toggle"
  aria-label="Toggle navigation menu"
>
  <span></span>
  <span></span>
  <span></span>
</label>