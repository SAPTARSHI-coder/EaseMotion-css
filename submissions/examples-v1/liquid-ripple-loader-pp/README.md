# Satisfying Liquid Droplet and Ripple Loader

## What does this do?

This component creates a satisfying page loading spinner that animates a falling droplet, stretches it to mimic gravity acceleration, merges it fluidly with a base pool at the bottom using an SVG gooey filter, and triggers expanding concentric liquid ripples.

## How is it used?

Place the inline SVG gooey filter in your HTML document and map the `.gooey-container`, `.droplet`, `.ripple`, and `.liquid-pool` classes:

```html
<!-- Inline SVG filter definition -->
<svg style="display: block; width: 0; height: 0;" aria-hidden="true">
  <defs>
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>

<!-- Loader Wrapper -->
<div class="loader-showcase">
  <div class="motion-fallback-spinner"></div>
  <!-- Reduced motion fallback spinner -->

  <div class="gooey-container">
    <div class="droplet"></div>
    <div class="ripple ripple-1"></div>
    <div class="ripple ripple-2"></div>
    <div class="liquid-pool"></div>
  </div>

  <div class="loader-label">Loading...</div>
</div>
```

## Why is it useful?

It provides a high-fidelity, organic, satisfying loading experience for splash pages or page transitions without requiring heavy JavaScript physics engines. It uses hardware-accelerated keyframe loops to animate translations and scaling, and applies `filter: url(#gooey)` to blend overlapping shapes organically. It fully integrates native keyboard focus and `prefers-reduced-motion` settings to fall back to a smooth, non-gooey static spinner.

## Tech Stack

- HTML5
- CSS3 (no external libraries, no JavaScript)
- SVG Filters

## Preview

Open `demo.html` directly in any modern web browser to interact with the loader.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions and replace static colors with framework design tokens on merge.
