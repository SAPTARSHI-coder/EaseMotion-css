# Ease Liquid Loader (`ease-liquid-loader`)

## 1. What does this do?
A fluid, organic loading animation where spherical blobs seamlessly melt into and break apart from each other, simulating liquid mercury or lava.

## 2. How is it used?
It utilizes pure CSS compositing:
- The wrapper (`.ease-gooey-wrapper`) applies a harsh `filter: contrast(30)` against a `#000` background.
- Child blobs (`.ease-blob`) are heavily blurred using `filter: blur(15px)`.
- The high contrast mathematically sharpens the blurred overlapping alpha boundaries between moving blobs, creating a realistic liquid merge effect.
- Finally, `mix-blend-mode: screen` renders the black container background completely invisible against the underlying document body.

## 3. Why is it useful?
Developers usually rely on complex or messy inline SVG filters (`<feColorMatrix>`, `<feGaussianBlur>`) to achieve gooey liquid mechanics. Implementing this entirely in native CSS keeps the DOM pristine, components highly modular, and offloads image rendering directly to the GPU for maximum performance.
