# CSS Kaleidoscope Background

A purely CSS-animated optical illusion simulating a kaleidoscope, achieved by mathematically overlapping rotating patterns with blend modes. Built entirely without JavaScript, HTML Canvas, or complex SVG clipping paths.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Mathematical Pattern**: Instead of explicitly drawing perfect hexagonal geometric shards, we layer four full-screen `<div>` squares (`.k-layer`) on top of each other. Each layer possesses the exact same CSS `repeating-linear-gradient`.
  - **The Blend Mode Illusion**: The critical trick is applying `mix-blend-mode: difference` to these layers. When intersecting gradients with contrasting colors are overlaid using the difference blend mode, the straight lines mathematically combine to form complex geometric shapes (stars, diamonds, and polygons).
  - **Opposing Rotations**: To put the kaleidoscope into motion, the four layers are initialized at offset angles (0, 45, 90, 135 degrees) and animated to spin in opposing directions (clockwise vs counter-clockwise) and at slightly different durations (25s, 30s, 35s, 40s). The `scale` is also subtly pulsed during the rotation to create a zooming depth-of-field effect. Finally, the entire `.kaleidoscope-container` slowly rotates to ensure the pattern is completely unpredictable and infinite.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating slightly deeper neon colors optimized for dark UI layers.
- Fully accessible semantic structure. The kaleidoscope layers are purely decorative backgrounds and are explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling all rotations and scaling animations for motion-sensitive users, reverting to a static, un-chaotic background pattern.

## Usage
Open `demo.html` in your browser. The kaleidoscope background will run automatically in an infinite loop.

## Files
- `demo.html`: The HTML structure defining the 4 overlapping `.k-layer` elements.
- `style.css`: The styling, the `repeating-linear-gradient` definitions, the critical `mix-blend-mode` logic, and the opposing `@keyframes`.
