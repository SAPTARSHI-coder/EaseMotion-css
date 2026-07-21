# Image Parallax Scroll

Multiple full-viewport sections with background images that move at different speeds relative to the scroll position, creating a multi-layered depth effect.

## Features

- Per-section parallax speed via `data-speed` attribute
- Smooth `translateY` transform driven by `requestAnimationFrame`
- `will-change: transform` for GPU-accelerated rendering
- Semi-transparent overlay for text readability
- Respects `prefers-reduced-motion`

## Usage

```html
<section class="px-section" data-speed="0.15">
  <div class="px-bg" style="background-image: url('photo.jpg');"></div>
  <div class="px-overlay"></div>
  <div class="px-content">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</section>
```

The `data-speed` attribute (0–1) controls how fast the background moves relative to scroll. Lower values (e.g. 0.15) create a slower, deeper parallax effect.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--px-duration` | 0.15s | Transition duration for background transform |
| `--px-overlay-color` | rgba(15,23,42,0.45) | Overlay color over the background image |
| `--px-text-color` | #f1f5f9 | Color of headline text |
