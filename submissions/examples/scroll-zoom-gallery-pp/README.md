# Scroll-Driven Camera Zoom and Spread Gallery

## What does this do?

This component creates a landing page hero showcase utilizing modern CSS scroll-driven animations (`animation-timeline: scroll()`) to create a cinematic 3D camera zoom pull-back effect, revealing a central title as the user scrolls.

## How is it used?

Wrap your content in a `.scroll-container` and `.sticky-viewport` layout, and assign coordinates to the gallery grid cards:

```html
<div class="scroll-container">
  <div class="sticky-viewport">
    <!-- Central Content revealed on scroll -->
    <div class="hero-content">
      <h1>Headline</h1>
      <p>Description...</p>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid">
      <div class="gallery-item"><img src="photo1.jpg" alt="Description" /></div>
      <div class="gallery-item"><img src="photo2.jpg" alt="Description" /></div>
      <!-- Additional items -->
    </div>
  </div>
</div>
```

## Why is it useful?

It provides a cinematic, immersive visual storytelling element to landing pages without any JavaScript execution overhead. By using GPU-accelerated CSS animations driven directly by scroll timelines, it runs with buttery smooth 60fps rendering performance. It incorporates robust `@supports` progressive enhancements to fallback to a beautiful, static layout in Safari/Firefox and fully respects `prefers-reduced-motion` settings.

## Tech Stack

- HTML5
- CSS3 (no external libraries, no JavaScript)

## Preview

Open `demo.html` directly in a browser supporting scroll timelines (e.g., Chrome/Edge) to view the scrolling effect.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions and replace static colors with framework design tokens on merge.
