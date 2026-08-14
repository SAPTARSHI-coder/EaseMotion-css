# CSS Widget: Solar Flare Radial Variation

A polished, reusable dashboard widget featuring a distinct "Solar Flare" visual treatment. This component builds a deeply layered, luminous radial energy burst using purely HTML and Vanilla CSS, without any JavaScript or external image assets.

## Features

- **Multi-Layered Radial Effect**: The solar flare isn't just a generic gradient. It constructs a visual using four mathematically separated layers:
  1. **Solar Core**: The burning center utilizing radial gradients.
  2. **Solar Glow**: Atmospheric heat diffusion masking the core.
  3. **Solar Arcs**: Rotating curved arcs built by masking `conic-gradient` passes.
  4. **Solar Rays**: Subtle energy streaks generated via `repeating-conic-gradient`.
- **Pure CSS Construction**: 100% Vanilla CSS implementation. Uses `mix-blend-mode` and CSS masks to layer the geometries into a cohesive, realistic flare.
- **Hardware-Accelerated Animation**: The intense solar activity is animated securely off the main thread. We animate strictly `transform` (rotation and scaling) and `opacity`, avoiding layout thrashing.
- **Responsive Architecture**: Built cleanly on CSS Grid. The flare visuals are wrapped inside `position: absolute` bounding boxes clipped by the widget card, ensuring it scales flawlessly down to mobile viewports without breaking horizontal overflow.
- **Dark Mode Support**: Flawlessly adapts to `@media (prefers-color-scheme: dark)`. The widget surface transitions to deep slate while the flare's opacity scalars crank up, generating an incredibly bright, luminous aura in low-light environments.
- **Reduced Motion Protocols**: Implements `@media (prefers-reduced-motion: reduce)` which zeroes out all rotation keyframes and scaling pulses, locking the flare into a static, beautiful geometric illustration for users with vestibular conditions.
- **Semantic HTML & Accessibility**: The dashboard structure uses `<article>` wrappers, logical headers (`<h2 id="...">`), and explicitly declared focus drop-shadow rings for keyboard users navigating via `Tab`.

## Implementation Highlights

### Conic Masking Technique
To generate the sweeping, asymmetrical arcs of the flare (`.solar-arcs`), we utilize a `conic-gradient` that defines harsh color bands. We then apply an `-webkit-mask-image: radial-gradient(...)` to punch a hole in the center and fade the edges into transparency. This creates the illusion of curved, crescent-shaped flares surrounding the core. 

### Hover Interaction
Interaction physics remain entirely compositor bound. When a user focuses or hovers the widget, the entire `.solar-flare-visual` scales up by `10%` and translates diagonally (`transform: scale(1.1) translate(-5px, 5px)`), producing a magnetic parallax lift effect without recalculating the DOM box model.

## Usage

1. Open `demo.html` in any modern web browser.
2. Observe the multiple moving layers (core pulsing, arcs rotating).
3. Interact with the widgets (Hover/Focus) to see the dynamic parallax scaling.
4. Toggle your OS to Dark Mode to see the luminous blend modes adapt to a dark background.
