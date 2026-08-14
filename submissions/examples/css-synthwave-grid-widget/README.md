# CSS Widget: Synthwave Grid Line Variation

A polished, reusable dashboard widget featuring a distinctive "Synthwave Grid Line" visual treatment. This component generates a retro-futuristic animated 3D perspective grid entirely with HTML and Vanilla CSS, without utilizing any JavaScript, SVG images, or WebGL canvases.

## Features

- **Pure CSS Perspective Grid**: Utilizing `transform: rotateX(75deg)` combined with CSS `perspective: 400px`, the flat DOM element is physically tilted into 3D space, generating authentic vanishing lines.
- **Infinite Scrolling Illusion**: The grid lines themselves are drawn using crossing `linear-gradient` declarations. A single `@keyframes` animation translates the grid down the Y-axis by exactly one grid-cell unit (`30px`), creating a seamless, infinite loop that appears to travel toward the viewer.
- **Horizon & Atmospheric Glow**: The `.horizon` element provides a linear gradient fading from solid black into deep violet and magenta, giving depth to the scene and obscuring the harsh edge of the rotated plane.
- **Hardware-Accelerated Animation**: The infinite scroll loop animates exclusively on the `transform: translateY` property, ensuring buttery 60fps performance on the compositor thread without ever triggering layout reflows.
- **Dark Mode Native Aesthetic**: The widget inherently thrives in dark environments. To support lighter host pages, the widget maintains a strict dark boundary (`var(--widget-bg)`) inside the card container.
- **Semantic Data Overlay**: Dashboard telemetry data is placed cleanly above the grid using `z-index`, avoiding complex DOM interlacing. The background elements utilize `aria-hidden="true"` and `pointer-events: none` to remain entirely invisible to screen readers and mouse clicks.
- **Reduced Motion Support**: Completely disables the infinite scrolling animation when `@media (prefers-reduced-motion: reduce)` matches, locking the floor into a static, stylized aesthetic for users with vestibular sensitivities.
- **Responsive Architecture**: Implements CSS Grid for macro-layouts, gracefully reflowing dashboard tiles from multi-column expanses down to stacked mobile blocks.

## Implementation Details

### Perspective Generation
The `.grid-layer` container receives `perspective: 400px`. Its child, `.grid-plane`, is oversized (`width: 200%`, `left: -50%`) and transformed via `rotateX(75deg)`. The oversizing ensures the corners of the flat element do not become visible when tilted heavily away from the viewer camera.

### Masking the Horizon
To ensure the grid doesn't abruptly end, a CSS mask is applied to the grid lines:
```css
-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 100%);
```
This forces the grid rendering to fade to `0` opacity right as it approaches the upper bounding box, seamlessly merging it into the atmospheric glow of the `.horizon` div.

## Usage

1. Open `demo.html` in your browser.
2. Observe the seamless infinite scroll of the perspective floor.
3. Hover/Focus over the widget to increase the neon intensity and lift the card via a Y-axis translation.
4. Try keyboard navigation (`Tab`) to view the customized cyan drop-shadow focus state.
