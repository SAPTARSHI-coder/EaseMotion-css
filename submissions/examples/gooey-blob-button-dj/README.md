# Gooey Liquid-Blob Interaction Button

## What does this do?
This feature introduces an organic "gooey" liquid button filling transition where four independent color blobs rise from the bottom and fuse together into a solid background block on hover.

## How is it used?
Create a button container with `.em-gooey-blob-btn`, and place nested children with the `.blob` class inside a `.blob-wrapper` container:

```html
<button class="em-gooey-blob-btn">
  <span class="btn-text">Initialize Node</span>
  <div class="blob-wrapper">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>
</button>

<!-- Required inline SVG gooey filter (render-free) -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
  <defs>
    <filter id="em-goo-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
      <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
    </filter>
  </defs>
</svg>
```

## Why is this useful for EaseMotion CSS?
Static background changes or simple color fades offer limited interactive feedback.

This component improves button interactions by:
- **Implementing organic liquid merging:** The rising blobs blend together like lava lamp droplets using a contrast filter, creating a tactile and premium physical sensation.
- **Micro-staggered wave dynamics:** The individual blobs rise with offset transition delays, simulating fluid wave turbulence as the button fills up.
- **High-performance GPU execution:** The entire filter composition and translation loop runs on the browser's compositor thread, maintaining a stable 60fps frame rate without using JavaScript.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and hover over the buttons to inspect the liquid wave fill.

## Contribution Notes
- Class naming was handled by the contributor (`.em-gooey-blob-btn`, `.blob-wrapper`, `.blob`, etc.).
- Maintainer will rename to `ease-*` convention before merging.
