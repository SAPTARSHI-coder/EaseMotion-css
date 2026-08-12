# Interactive Glass Button with Liquid Wave Fill

## What does this do?

This component implements a set of glassmorphic buttons containing translucent water/liquid fills. On hover, the liquid rises from the bottom of the button to completely fill it. While rising and full, the liquid surface exhibits an undulating wave motion, and the text automatically changes color using `mix-blend-mode: difference` for high-contrast legibility as the fluid fills the button.

## How is it used?

Apply the `.liquid-wave-btn` class to a button containing a `.btn-text` element and a `.liquid-container` element housing the inline wave SVGs and base layer:

```html
<button class="liquid-wave-btn theme-cyan">
  <span class="btn-text">Explore Ocean</span>
  <div class="liquid-container">
    <svg
      class="svg-wave"
      viewBox="0 0 480 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="wave-path-1"
        d="M 0 15 C 30 15, 30 5, 60 5 C 90 5, 90 15, 120 15 C 150 15, 150 5, 180 5 C 210 5, 210 15, 240 15 C 270 15, 270 5, 300 5 C 330 5, 330 15, 360 15 C 390 15, 390 5, 420 5 C 450 5, 450 15, 480 15 L 480 28 L 0 28 Z"
      />
      <path
        class="wave-path-2"
        d="M 0 15 C 30 15, 30 5, 60 5 C 90 5, 90 15, 120 15 C 150 15, 150 5, 180 5 C 210 5, 210 15, 240 15 C 270 15, 270 5, 300 5 C 330 5, 330 15, 360 15 C 390 15, 390 5, 420 5 C 450 5, 450 15, 480 15 L 480 28 L 0 28 Z"
      />
    </svg>
    <div class="liquid-base"></div>
  </div>
</button>
```

## Why is it useful?

Creating realistic fluid dynamics or organic wave physics on the web usually requires heavy Canvas drawing libraries, WebGL shaders, or complex JS-based math.

Key architectural advantages of this pure CSS approach:

- **Horizontal Sliding Repeat Wave Vectors**: Uses repeating wave segments inside the SVG path. By translating the path horizontally by exactly 50% width (`translateX(-50%)`), we create a continuous, loopable wave surface with zero visual seams.
- **Double Overlapping Waves**: Combines two SVG wave paths styled with different opacities, speeds, and opposing directions (one moving left, one moving right). Their intersection creates a highly dynamic and organic sloshing fluid texture.
- **mix-blend-mode Text Inversion**: Applies `mix-blend-mode: difference` to the button text. As the bright wave gradient rises past, the text automatically inverts its color relative to the underlying fluid, maintaining accessibility and contrast without scripting.
- **Hardware Accelerated Performance**: Animates horizontal movement purely using `transform: translateX` and vertical loading via `top` transitions. This relies entirely on compositor threads and runs at 120 FPS.
- **Accessibility Friendly**: Detects user motion preferences via `@media (prefers-reduced-motion: reduce)`. When set, it disables sliding wave animations and vertical transitions, fading the fluid layer in instantly.

## Tech Stack

- HTML5
- CSS3 (Mix Blend Modes, CSS Transforms, Compositor Keyframes, Media Queries)

## Preview

Open `demo.html` directly in any modern web browser to view the interactive buttons.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-liquid-btn`, `.ease-wave-path`) and replace colors with system design tokens on merge.
