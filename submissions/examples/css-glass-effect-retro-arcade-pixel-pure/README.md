# CSS Glass Effect: Retro Arcade Pixel

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features an animated 8-bit voxel background refracted through a pixelated frosted glass panel.

## Features
- Pure CSS and HTML implementation. No images, SVGs, or Canvas required for the 8-bit aesthetic or the background sprites.
- **Component Architecture**: 
  - **Animated 8-Bit Background**: True glassmorphism requires a visually complex background to refract. This scene uses a massive, comma-separated `box-shadow` applied to a single `1x1` pixel `div` to draw an entire Space Invader sprite. It floats behind the UI using an alternating CSS `steps()` animation to mimic retro framerates.
  - **Glassmorphism Core**: The `.glass-card-retro` element achieves the frosted glass look using a translucent `background-color` and `backdrop-filter: blur(12px)`. This allows the animated 8-bit sprite to refract dynamically through the glass.
  - **The Pixelated Glass Hack**: You cannot use `border-radius` to create blocky, 8-bit corners; it only creates smooth curves. Instead, this component achieves a "pixelated border" using a highly advanced CSS `clip-path` polygon combined with a multi-layered `box-shadow` on an underlying pseudo-element (`::before`). This mathematically cuts the corners of the glass panel into exact 4px steps while preserving the `backdrop-filter` effect across the entire surface.
  - **8-Bit Typography**: Uses the 'Press Start 2P' Google Font for authentic retro styling, complete with heavy, hard-edged text shadows.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`), automatically swapping the glass borders and sprite colors from Yellow/Amber to neon Green depending on the system theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the `steps()` animations on the background sprite and stars are disabled, freezing them in place.

## Usage
Open `demo.html` in your browser. Observe the blocky, 8-bit stepped corners of the glass panel and watch how the animated box-shadow sprite refracts through the frosted glass background.

## Files
- `demo.html`: The HTML structure defining the ambient 8-bit background sprites, the glassmorphism container, and the retro UI elements.
- `style.css`: The styling, the massive `box-shadow` definitions drawing the sprites, the glassmorphism blur logic, and the complex `clip-path` geometry required to create stepped 8-bit corners on a blurred container.
