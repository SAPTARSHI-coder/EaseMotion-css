# CSS Glitch-Flicker Carousel (Cyberpunk Neon Layouts)

A pure CSS carousel component featuring a chaotic "glitch-flicker" entrance animation for its slides, styled with an aggressive Cyberpunk Neon aesthetic.

## Features
- **Pure CSS / HTML**: Built using the hidden radio button hack, managing the active slide state entirely without JavaScript.
- **Glitch-Flicker Entrance**: Slides snap into view with a complex `@keyframes` animation utilizing `clip-path`, `transform: skewX()`, and `filter: hue-rotate()` to simulate a digital glitch effect.
- **Cyberpunk Theme**: Styled with sharp corners, high-contrast neon glows, dynamic gradients, and futuristic monospaced typography. Pagination squares adapt their neon color to match the current slide.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling chaotic glitch animations in favor of simple opacity fades.

## Usage

Use hidden radio buttons paired with `<label>` controls to manage the active state of the carousel slides.

```html
<div class="cyber-carousel">
  <input type="radio" id="slide1" name="carousel" checked>
  <input type="radio" id="slide2" name="carousel">

  <div class="carousel-slides">
    <div class="carousel-slide" id="content1">...</div>
    <div class="carousel-slide" id="content2">...</div>
  </div>

  <div class="carousel-controls">
    <label for="slide1" class="carousel-dot"></label>
    <label for="slide2" class="carousel-dot"></label>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--neon-pink`: Color theme for Slide 1 and primary borders (default: `#ff007f`)
- `--neon-blue`: Color theme for Slide 2 (default: `#00f3ff`)
- `--neon-purple`: Color theme for Slide 3 (default: `#b026ff`)
- `--neon-yellow`: Color theme for Slide 4 (default: `#fcee0a`)
- `--bg-dark`: Page background (default: `#0a0a0c`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
