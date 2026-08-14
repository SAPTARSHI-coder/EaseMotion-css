# Kinetic Typographic Marquee with Hover Acceleration and 3D Tilt

## What does this do?

This component creates a kinetic typographic marquee banner. It scrolls text horizontally in an infinite, seamless loop, and reacts dynamically to hover events by tilting in 3D perspective, expanding letter-spacing, and smoothly accelerating scroll speed from a slow crawl to a rapid pace.

## How is it used?

Apply the `.marquee-container`, `.marquee-3d-wrapper`, `.marquee-track`, and `.marquee-content` classes to your banner structure, and repeat the text content once inside the track to ensure seamless loop coverage:

```html
<!-- Houdini @property --marquee-speed must be registered in your stylesheet -->
<div class="marquee-container">
  <div class="marquee-3d-wrapper">
    <div class="marquee-track">
      <!-- Original Text Block -->
      <div class="marquee-content" aria-hidden="true">
        <span>YOUR BANNER TEXT HERE</span>
      </div>
      <!-- Duplicate Text Block -->
      <div class="marquee-content">
        <span>YOUR BANNER TEXT HERE</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?

It provides a premium kinetic typographic element for headings, portfolios, or landing pages without writing complex JavaScript layout tracking scripts. By utilizing CSS Houdini `@property` registrations, it smoothly transitions the `animation-duration` of infinite loops. It uses `will-change: transform` to optimize compositing layers, and fully handles `prefers-reduced-motion` settings.

## Tech Stack

- HTML5
- CSS3 (no external libraries, no JavaScript)
- CSS Houdini Properties

## Preview

Open `demo.html` directly in any modern web browser to interact with the marquee.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions and replace static colors with framework design tokens on merge.
