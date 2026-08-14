# CSS Micro-interactions: Retro Arcade Pixel

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on authentic 8-bit arcade aesthetics, chunky pixels, and jagged animations.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, external images/sprites, or JavaScript required for the graphics or logic.
- **Component Architecture**: 
  - **Pixel Button**: An interactive button featuring a 3D pixel border generated entirely via complex `box-shadow` layering. When clicked (`:active`), the button uses `transform: translateY()` and recalculates the `box-shadow` to create a realistic physical depression effect without relying on CSS transitions (which would ruin the instant 8-bit feel).
  - **Hourglass Loader**: A loading spinner drawn pixel-by-pixel using `box-shadow` coordinates relative to a single `1px` by `1px` base div (`.pixel-hourglass`). It rotates infinitely. Crucially, instead of a smooth rotation, it uses `animation: hg-flip 2s steps(4, end) infinite;`, forcing the rotation to snap frame-by-frame.
  - **8-Bit Toggle**: A custom checkbox built using the CSS `:checked` pseudo-class adjacent sibling selector (`~`). The toggle track features the chopped corner pixel borders. The toggle thumb jumps instantly from left to right (no transitions allowed) and changes color when active.
  - **Text Glitch**: The header features a pure CSS chromatic aberration glitch effect. It uses `::before` and `::after` pseudo-elements containing the same text, colored cyan and red respectively. An `@keyframes` animation rapidly manipulates the `clip-path` and `transform` to simulate a broken CRT screen.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on intense, primary neon colors (Red, Green, Yellow, Cyan) typical of early arcade hardware. Typography utilizes the iconic `Press Start 2P` font, and `image-rendering: pixelated` is applied to the document body.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the spinning loader and glitch animations for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Click the "PRESS START" button to feel the heavy mechanical press, watch the frame-by-frame rotation of the hourglass, and toggle the custom checkbox.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 pixel micro-interactions.
- `style.css`: The styling, the massive `box-shadow` pixel art arrays, the `steps()` animations, and the `:checked` logic for the toggle switch.
