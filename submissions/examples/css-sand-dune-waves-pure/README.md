# CSS Sand Dune Waves

A purely CSS-animated parallax background simulating flowing sand dunes. Built using overlapping SVG paths and continuous CSS translations, requiring zero JavaScript overhead for the animation loop.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Multi-layered Parallax**: The background consists of three distinct `<div>` layers (`.dune-back`, `.dune-middle`, `.dune-front`), each containing an SVG path. They are stacked using `z-index` and scaled to different heights (100%, 75%, 50%) to create a forced perspective of depth.
  - **The Infinite Flow Animation**: Each dune layer is set to `width: 200%`, making it exactly twice as wide as the screen. A CSS `@keyframes` animation simply translates the element from `translateX(0)` to `translateX(-50%)` and alternates. Because the SVGs are drawn as continuous curves, this horizontal panning creates the optical illusion of waves rolling across the screen.
  - **Differentiated Speeds**: By assigning different animation durations (25s, 18s, 12s) and alternating directions (`alternate` vs `alternate-reverse`) to the layers, we break visual repetition and simulate a complex, natural-looking parallax effect.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep indigo/violet night desert aesthetic that automatically swaps the sky gradient and dune fill colors.
- Fully accessible semantic structure. The dunes are purely decorative background elements and are explicitly hidden from screen readers via `aria-hidden="true"` on the parent container. The foreground content uses standard semantic tags (`<main>`, `<h1>`). Honors the `prefers-reduced-motion` accessibility standard by disabling the parallax animation entirely for motion-sensitive users, freezing the dunes in a statically centered state.

## Usage
Open `demo.html` in your browser. The background animation will run automatically in an infinite loop.

## Files
- `demo.html`: The HTML structure defining the SVG paths and layer order.
- `style.css`: The styling, layer scaling, and the critical `translateX` infinite keyframe animations.
