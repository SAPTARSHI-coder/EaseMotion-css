# CSS Loader: Morphing Shape

An organic, fluid loading animation utilizing complex CSS border-radius manipulation and continuous rotation to simulate a morphing liquid droplet.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG paths.
- **Component Architecture**: 
  - **The 8-Value Border Radius**: The core morphing trick relies on the 8-value `border-radius` syntax (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`). This allows the definition of asymmetrical curves for the top, bottom, left, and right sides independently.
  - **The Morph Animation**: The `@keyframes morph` rule rapidly shifts these 8 percentage values while simultaneously spinning the element 360 degrees (`transform: rotate()`). The combination of asymmetrical curves and continuous rotation creates a highly convincing organic, liquid blob effect.
  - **Interference Patterns**: To create depth, three identical `.morph-blob` divs are stacked on top of each other. They share the same animation, but are assigned staggered `animation-delay` values (`-2s`, `-4s`). Because their shapes are constantly changing at different phases, their edges intersect and overlap dynamically.
  - **Blend Modes**: The overlapping blobs utilize `mix-blend-mode: multiply` (in light mode) or `screen` (in dark mode) so their gradients interact and combine as they pass over one another, rather than just acting like opaque solid objects.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), cleanly adapting the background colors and automatically swapping the `mix-blend-mode` to ensure the gradient colors remain vibrant on black backgrounds.
- Fully accessible semantic structure. The decorative blobs are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations and locking the blob into a smooth, static 50% circular state for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the morphing shape loading animation.

## Files
- `demo.html`: The HTML structure defining the wrapper and the three overlapping blob divs.
- `style.css`: The styling, the 8-value `border-radius` morphing logic, and the staggered keyframe animations.
