# CSS Media Visualizer: Holographic Flicker

A hardware-accelerated, JavaScript-free audio and media UI element. Features a sci-fi holographic aesthetic with pure CSS glitch animations, chromatic aberration, and scanlines.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the visualizer animation, the complex glitching effects, or the play/pause state logic.
- **Component Architecture**: 
  - **The Holographic Card**: The `.holo-media-card` uses `box-shadow` and `clip-path` to create a glowing, chamfered neon border. An erratic `@keyframes holo-flicker` animation is applied to the entire card, rapidly dropping opacity, slightly skewing the geometry, and splitting the box-shadows into red/cyan offsets to simulate chromatic aberration.
  - **The CRT Scanlines**: A `.scanlines` pseudo-element covers the entire card. It uses a `repeating-linear-gradient` to draw horizontal lines and slowly pans them downwards using an infinite `@keyframes` animation, simulating a holographic projector or old CRT monitor.
  - **The Text Glitch**: The track title uses `::before` and `::after` pseudo-elements that duplicate the text using the `content: attr(data-text)` technique. These layers are offset, colored red and cyan, and clipped erratically using `clip-path: inset()` animations (`@keyframes text-glitch-1` and `text-glitch-2`) to create a localized, intense glitch effect on the typography.
  - **The Pure CSS Audio Visualizer**: A flex container holds 16 identical `.bar` elements, each glowing via `box-shadow: 0 0 8px cyan`. Every bar shares the exact same `@keyframes eq-dance` animation, scaling it along the Y-axis. We assign a unique, negative fractional delay (e.g., `-0.4s`, `-0.2s`, `-0.9s`) to each individual bar. This completely desynchronizes the single animation loop, perfectly simulating the chaotic "dancing" of a true frequency analyzer.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.holo-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the visualizer bars, causing them to drop to the baseline and turning off their neon lights.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Note: This sci-fi holographic component looks drastically better in dark environments.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the erratic glitching, the panning scanlines, and the dancing visualizer bars are completely disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the simulated audio visualizer bars dance, the typography glitch, and the entire card erratically flicker with chromatic aberration. Click the Play/Pause button to see the visualizer bars dynamically drop to the baseline and power off their neon lights when "paused", driven entirely by CSS state.

## Files
- `demo.html`: The HTML structure defining the holographic containers, the SVG icons, the 16 visualizer tracks, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the complex `@keyframes` glitch mathematics, the `repeating-linear-gradient` scanlines, the `animation-delay` staggered visualizer, and the `:has()` selector state interactions.
