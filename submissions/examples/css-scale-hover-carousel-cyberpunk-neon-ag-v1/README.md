# CSS Scale-Hover Carousel (Cyberpunk Neon Layouts)

A pure CSS carousel component featuring a bouncy `cubic-bezier` scale-in entrance animation and an interactive scale-on-hover effect for its slides, styled with a bold Cyberpunk Neon aesthetic.

## Features
- **Pure CSS / HTML**: Built using the hidden radio button hack, managing the active slide state entirely without JavaScript.
- **Scale Animations**: Slides snap into view with a `cubic-bezier` scale animation. Additionally, hovering over the active slide triggers a further scale up (`scale(1.05)`) and increases the intensity of the neon radial background.
- **Cyberpunk Theme**: Styled with sharp corners, high-contrast neon glows, dynamic gradients, and futuristic monospaced typography. Pagination dots also scale up and adapt their neon color to match the current slide.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling spatial scaling animations in favor of simple opacity fades.

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
- `--neon-pink`: Color theme for Slide 1 (default: `#ff007f`)
- `--neon-blue`: Color theme for Slide 2 and primary borders (default: `#00f3ff`)
- `--neon-purple`: Color theme for Slide 3 (default: `#b026ff`)
- `--neon-yellow`: Color theme for Slide 4 (default: `#fcee0a`)
- `--bg-dark`: Page background (default: `#050505`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
