# CSS Perlin Noise Blob

An organic, fluid shape that morphs continuously, simulating the aesthetic of Perlin noise distortion. Built entirely in CSS without JavaScript or SVG `<feTurbulence>` filters.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The 8-Value Border Radius**: Standard CSS `border-radius` uses 4 values (for the 4 corners) to create symmetrical curves. By passing 8 values separated by a slash (`/`), you independently control the horizontal and vertical radii of each corner (e.g., `border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%`). This creates asymmetrical, organic "blob" shapes.
  - **Morphing Animation**: The fluid, noise-like morphing is achieved by animating between multiple different 8-value `border-radius` configurations inside a CSS `@keyframes` block, combined with subtle scale transforms to simulate breathing/pulsing.
  - **Color Mixing via Blend Modes**: To increase visual complexity and mimic true noise maps, two separate blobs are layered on top of each other. The bottom blob uses a Pink/Purple gradient, while the top uses Cyan/Blue. The top blob applies `mix-blend-mode: screen`. Because they are running the same `@keyframes` at slightly different durations (`8s` vs `11s`), they drift out of sync, creating a constantly evolving, unpredictable intersection of colors.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The vibrant neon gradients contrast beautifully against the deep slate background provided for dark mode environments.
- Fully accessible semantic structure. The blob animation is purely decorative background for the `.blob-content`. Honors the `prefers-reduced-motion` accessibility standard by disabling the `@keyframes` entirely for motion-sensitive users, falling back to a static but visually interesting organic shape.

## Usage
Open `demo.html` in your browser. The blobs will automatically begin morphing and blending their colors infinitely.

## Files
- `demo.html`: The HTML structure defining the layered blobs and the centered content container.
- `style.css`: The styling, the 8-value `border-radius` trick, the `mix-blend-mode` logic, and the `@keyframes` definitions.
