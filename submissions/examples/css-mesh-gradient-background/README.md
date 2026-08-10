# CSS Mesh Gradient Background

An organic, flowing mesh gradient background built utilizing stacked radial gradients and background-position animation, completely avoiding the need for extra DOM elements or JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for generating the effect or managing the animation loop).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--mesh-1`, `--mesh-2`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`). The Light mode defaults to a bright, warm sunrise aesthetic, while the Dark mode shifts to deep, saturated neon mesh colors.
- **Zero Extra DOM Nodes (Documented in Code)**: 
- Unlike blob-based techniques (like Aurora Borealis) that require multiple overlapping `<div>` elements with blur filters, this entire mesh gradient is rendered on a *single* background div.
- It utilizes 6 stacked `radial-gradient` definitions separated by commas on the `background-image` property.
- Each gradient is pinned to a specific coordinate (`at 40% 20%`), starts with a solid color, and fades out to `transparent` seamlessly.
- **Background-Position Animation**: 
- To achieve organic movement, the `background-size` is scaled up to `200% 200%`.
- An infinite CSS `@keyframes` animation then pans the oversized `background-position` around the element, causing the radial colors to slide and blend across the screen.
- **Complimentary Glassmorphism**: The demo includes a modern content card utilizing `backdrop-filter: blur(20px)` to create a frosted glass effect that pairs perfectly with the vibrant mesh behind it.
- Fully accessible with `prefers-reduced-motion` support. The drifting animation is completely disabled for motion-sensitive users, freezing the mesh into a beautiful static gradient.

## Usage
Open `demo.html` in your browser. You will see a modern glassmorphism content card floating over a vibrant, slow-moving mesh gradient. Toggle your operating system's Light/Dark mode to see the theme cleanly transition the mesh palette.

## Files
- `demo.html`: The HTML structure detailing the single-div architecture and the glassmorphism card.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the stacked `radial-gradient` technique and `background-position` animation.
