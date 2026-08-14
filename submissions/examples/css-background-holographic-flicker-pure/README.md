# CSS Background: Holographic Flicker

A hardware-accelerated, JavaScript-free animated background. Features CSS gradient scanlines, chromatic aberration (RGB split), and erratic keyframe opacity/transform glitching.

## Features
- Pure CSS and HTML implementation. No JavaScript, Canvas, or WebGL required for the rendering the holographic glitch effect.
- **Component Architecture**: 
  - **The Base Glow**: The `.hologram-background` uses a `radial-gradient` to create a subtle, ambient projector glow in the center of the screen.
  - **The Scanlines**: The `::before` pseudo-element draws a tight `repeating-linear-gradient` (alternating between transparent and a very faint cyan line). This layer is animated to slowly translate upwards, mimicking the refresh rate of an old CRT monitor or faulty hologram.
  - **The Chromatic Glitch**: The `::after` pseudo-element handles the heavy distortion. 
    1. It uses an inset `box-shadow` on the left and right edges with Cyan and Magenta colors to simulate chromatic aberration (RGB split).
    2. It uses `mix-blend-mode: screen` so the colors interact additively with the UI underneath.
    3. It applies a highly erratic, non-linear `@keyframes` animation (`holo-flicker`). By keeping the animation static for long periods (e.g., `0%` to `25%`) and then suddenly spiking the `opacity`, `transform: skewX()`, and `filter: hue-rotate()`, we perfectly simulate random, jarring electronic glitches.
  - **The CRT Overlay**: A fixed `.crt-overlay` applies a heavy radial vignette over the entire viewport to simulate the curved glass of an old monitor.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`), though this specific retro-futuristic cyberpunk aesthetic is strictly designed for dark mode palates.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all erratic glitching, pulsing, and scanline scrolling animations are disabled, leaving a static, stylized blue background.

## Usage
Open `demo.html` in your browser. Observe the slow, continuous scroll of the scanline gradient and wait a few seconds to see the random, jarring chromatic glitch animations simulating a failing holographic projection.

## Files
- `demo.html`: The HTML structure defining the background layer, the CRT overlay, and the foreground content panel.
- `style.css`: The styling, the `repeating-linear-gradient` scanlines, the RGB split box-shadows, and the complex, erratic `@keyframes` governing the glitch behavior.
