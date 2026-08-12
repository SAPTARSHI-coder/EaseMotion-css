# CSS Morphing Underline

A pure CSS navigation underline effect that smoothly morphs in shape,
width, and color when moving between navigation items.

## Features

- Pure HTML and CSS
- No JavaScript required
- Morphing underline animation
- Different underline shapes and gradients
- Hover and keyboard focus support
- Responsive navigation
- Accessible focus indicators
- `prefers-reduced-motion` support
- Customizable CSS variables

## Usage

```html
<nav class="morph-nav" aria-label="Primary navigation">
  <a href="#home" class="morph-link active">
    <span>Home</span>
  </a>

  <a href="#about" class="morph-link">
    <span>About</span>
  </a>

  <a href="#projects" class="morph-link">
    <span>Projects</span>
  </a>

  <a href="#contact" class="morph-link">
    <span>Contact</span>
  </a>
</nav>