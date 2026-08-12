# CSS Bento Grid: Retro Arcade Pixel

A hardware-accelerated, JavaScript-free bento grid layout. Features 8-bit styling, pixelated corners via CSS `clip-path` and `box-shadow`, CRT scanlines, and retro hover animations.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, images, or JavaScript required for the pixel art or the CRT monitor effects.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Pixel Corners**: True 8-bit aesthetic requires blocky corners, not smooth `border-radius`. We achieve this without images by using a precise CSS `clip-path: polygon()` on the outer `.pixel-card` to cut out the 4x4 pixel corners. Then, we use multiple `inset box-shadow` values on a `::before` pseudo-element to redraw the thick internal pixel border perfectly conforming to the cut shape.
  - **Pure CSS Pixel Art Sprites**: The alien invader, ghost, and coin icons are not images or SVGs. They are single `<div>` elements (e.g. `.sprite-invader`) sized to `4px` or `6px`. We use massive, multi-layered `box-shadow` declarations to "draw" the pixels of the sprite on a grid relative to that single div.
  - **Stepped Animation**: Smooth transitions ruin 8-bit aesthetics. All animations (`hover`, `transform`, sprite changes) use `transition-timing-function: steps(x)`. This forces the animations to snap frame-by-frame, authentically replicating low framerate retro games.
  - **The CRT Overlay**: A fixed, `pointer-events: none` overlay covers the entire screen. It uses a repeating `linear-gradient` (`background-size: 100% 4px`) alternating between transparent and semi-transparent black. This perfectly simulates the horizontal scanlines of an old CRT arcade cabinet monitor.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`), featuring classic arcade neon colors (Red, Green, Yellow, Blue).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the blinking cursors and stepped hover animations are disabled.

## Usage
Open `demo.html` in your browser. Notice the CRT scanlines overlaying the screen. Hover over the various cards to see the pixel art sprites animate using pure CSS box-shadows. The "Start" button simulates a physical arcade push-button when clicked.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the pixel art containers. Includes standard Google Fonts for the 8-bit typography.
- `style.css`: The styling, the CSS Grid layout mathematics, the complex `box-shadow` pixel art generators, the `clip-path` corners, and the `steps()` timing functions.
