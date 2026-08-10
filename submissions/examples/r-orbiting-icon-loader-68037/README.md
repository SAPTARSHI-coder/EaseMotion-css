# CSS Orbiting Icon Loader

A lightweight CSS-only orbiting icon loader for modern interfaces.

## Features

- Pure HTML and CSS
- Multiple animated icon orbits
- Glowing central loader
- Responsive design
- Customizable CSS variables
- No JavaScript required
- `prefers-reduced-motion` support

## Usage

Include the HTML structure and stylesheet in your project.

```html
<div class="orbit-loader" role="status" aria-label="Loading">
  <span class="orbit-loader__core" aria-hidden="true">✦</span>

  <span class="orbit orbit--one">
    <span class="orbit__icon">✦</span>
  </span>

  <span class="orbit orbit--two">
    <span class="orbit__icon">●</span>
  </span>

  <span class="orbit orbit--three">
    <span class="orbit__icon">◆</span>
  </span>
</div>