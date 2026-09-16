# CSS Pure CSS House

A charming, animated illustration of a house built entirely using HTML elements and CSS geometry, completely replacing the need for external SVGs or image files.

## Features
- Pure CSS and HTML implementation. No image files (SVG, PNG) or JavaScript are used.
- **Component Architecture & CSS Geometry**: 
  - **The Roof Triangle**: The `.roof` element utilizes the classic "CSS Border Hack". By creating an element with `width: 0` and `height: 0`, and applying thick, transparent left/right borders along with a colored bottom border, a perfect geometric triangle is formed.
  - **Window Panes**: The `.window-pane` uses `::before` and `::after` pseudo-elements to draw the horizontal and vertical crossbars across the window background, keeping the DOM extremely clean.
  - **Layering and Depth**: Extensive use of `z-index`, `position: absolute`, and `box-shadow` (specifically `inset` shadows) creates depth, shading the edges of the walls and chimney without needing extra DOM elements.
  - **Ambient Animation**: Features subtle `@keyframes` animations. The clouds float slowly across the background (`float-cloud`), and semi-transparent smoke puffs rise and fade from the chimney (`smoke-rise`).
- **Theming**: Configured via CSS Custom Properties. 
  - **Automatic Day/Night Cycle**: Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`. When dark mode is active, the CSS variables shift the scene to "Night Time": the sky turns deep blue, the sun becomes a pale moon, the house darkens, and the windows glow with yellow light (`box-shadow: 0 0 15px rgba(253, 224, 71, 0.5)`).
- Fully accessible semantic structure. The main container uses `role="img"` and an `aria-label` to ensure screen readers interpret the entire block as a single cohesive illustration. Honors the `prefers-reduced-motion` accessibility standard by disabling the cloud and smoke animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Watch the ambient animations of the smoke and clouds. Toggle your operating system's Dark Mode to see the illustration smoothly transition from a bright daytime scene to a glowing night time scene.

## Files
- `demo.html`: The HTML structure defining the geometric blocks (roof, walls, windows, clouds).
- `style.css`: The styling, the border-triangle geometry, the `@keyframes` ambient animations, and the Day/Night theme toggling.
