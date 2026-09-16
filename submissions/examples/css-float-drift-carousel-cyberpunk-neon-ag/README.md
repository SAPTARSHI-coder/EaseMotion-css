# CSS Float-Drift Carousel (Cyberpunk Neon Layouts)

A pure CSS carousel component featuring a smooth "float-drift" entrance animation for its slides, styled with a striking Cyberpunk Neon aesthetic.

## Features
- **Pure CSS / HTML**: Built using the hidden radio button hack, managing the active slide state entirely without JavaScript.
- **Float-Drift Entrance**: Slides transition smoothly into view from an offset `x` and `y` position, simulating a floating, drifting entrance using `cubic-bezier` timing.
- **Cyberpunk Theme**: Styled with neon glows, glowing radial backgrounds, and futuristic monospaced typography. Active pagination dots adapt their neon color to match the current slide.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling spatial drift animations in favor of simple fades.

## Usage

Use hidden radio buttons paired with `<label>` dots to control the active state of the carousel slides.

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
- `--neon-green`: Color theme for Slide 4 (default: `#39ff14`)
- `--bg-dark`: Page background (default: `#050508`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
