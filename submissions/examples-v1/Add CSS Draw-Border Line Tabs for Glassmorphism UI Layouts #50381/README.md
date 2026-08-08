# CSS Draw-Border Tabs - Glassmorphism UI Layout

A pure CSS interactive tab component optimized for Glassmorphism/HUD interfaces, featuring a stunning neon-glowing, constant-velocity sequential border drawing animation.

## Features
- **Glassmorphism Aesthetics**: Utilizes deep vibrant animated background orbs blurred behind heavily frosted `backdrop-filter: blur()` panels. The component feels deeply integrated into modern, sci-fi, or high-end dashboard environments.
- **Neon-Glow Draw-Border**: The drawn border applies a CSS `filter: drop-shadow()` to emulate a highly luminous neon tube drawing itself around the active tab.
- **Constant Velocity Sequential Drawing**: Employs `linear` easing within the `transition` properties to ensure the drawing "snake" maintains a constant, high-tech speed as it traverses the perimeter without slowing down at the sharp corners.
- **Pure CSS Input Binding**: View panels switch with a sleek scaling fade animation using the `::checked` radio hack, completely eliminating JavaScript dependencies.
- **Brutalist Glass Geometry**: The tab buttons deliberately utilize sharp `0px` border-radii. This brutalist styling prevents clipping mask interference with the pseudo-elements, ensuring the glowing border renders flawlessly as it traces the bounding box corners.

## Customization

The drawing physics and glowing intensities can be customized via standard CSS custom properties in the `:root`.

```css
:root {
  /* Draw-Border Line Physics */
  --draw-speed: 0.15s;      /* Speed of a single border edge drawing */
  --border-thickness: 2px;  
  
  /* Glassmorphism Variables */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-glow: #ffffff;    /* The color of the glowing drawn border */
}
```

## Architecture Notes
- The "drawing" effect utilizes the `box-sizing: border-box` property on absolute pseudo-elements (`::before` and `::after`).
- The pseudo elements are positioned at `top: -1px; left: -1px` to precisely overlay the underlying default `1px` translucent glass border of the button. The math of `width: calc(100% + 2px)` guarantees the glowing drawn border seamlessly encapsulates the entire component area.
- Un-selecting a tab triggers a reverse sequence logic, smoothly "un-snaking" the glowing border counter-clockwise before disappearing.
