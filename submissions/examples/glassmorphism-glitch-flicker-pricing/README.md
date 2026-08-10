# CSS Glitch-Flicker Pricing Table (Glassmorphism UI)

A stunning, cyberpunk-inspired pure CSS pricing grid designed for Glassmorphism UI Layouts. It features animated background orbs and a highly aggressive "Glitch-Flicker" hover effect that simulates digital tearing and neon light bleeding.

## Features
- Pure CSS and HTML (No JavaScript required).
- **Glassmorphism Aesthetic**: Deep slate background contrasted with slowly drifting `.bg-orb` elements. The orbs are heavily blurred (`filter: blur(120px)`) to create ambient color zones.
- The `.glass-panel` cards utilize `backdrop-filter: blur(16px)` to create a premium frosted-glass effect over the animated orbs.
- **The Glitch-Flicker Effect**: Applied specifically to the "Popular" plan to draw intense focus.
- The effect is driven by two hidden `.glitch-layer` elements (`layer-1` and `layer-2`) that sit behind the main card content (`.card-content-wrapper` has `z-index: 2`).
- Each layer has a strong inset `box-shadow` (one Cyan, one Rose) and a slight `blur(4px)` to simulate neon light bleeding behind frosted glass.
- On hover, complex `@keyframes` (`glitch-anim-1`, `glitch-anim-2`) are triggered on the layers. These animations utilize rapid, aggressive `clip-path: polygon()` slicing combined with harsh spatial translations. By running the animations infinitely and in reverse against each other, they simulate chaotic digital tearing.
- Simultaneously, the parent container flickers its border color between Rose and Cyan using the `border-flicker` animation.
- Clean typography using the `Outfit` font, custom SVG checkmarks for the feature lists, and a highlighted "Most Popular" plan styling.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the ambient orb drift is frozen. The aggressive clipping, tearing, and flickering of the glitch animations are completely disabled. The interaction safely falls back to a simple, static glowing border on hover.

## Usage
Open `demo.html` in your browser. You will see a modern pricing grid. Hover over the standard or enterprise plans for a smooth, subtle lift. Hover over the central "Professional" plan to trigger the intense, neon glitch-flicker effect tearing through the frosted glass.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical z-index layering required to keep the text legible while the glitch layers tear wildly behind it.
- `style.css`: The styling, background orb animations, frosted-glass filters, and the complex `clip-path` `@keyframes` driving the cyberpunk glitch mechanics.
