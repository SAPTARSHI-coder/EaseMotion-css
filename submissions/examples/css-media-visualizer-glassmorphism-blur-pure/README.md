# CSS Media Visualizer: Glassmorphism Blur

A hardware-accelerated, JavaScript-free audio and media UI element. Features a simulated audio visualizer using delayed CSS `@keyframes` over a heavily frosted ambient glass background.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the visualizer animation or the play/pause state logic.
- **Component Architecture**: 
  - **The Ambient Album Art**: Glassmorphism requires colors to blur in order to look effective. This UI simulates a vibrant, rotating abstract album cover in the background (`.ambient-art-bg`) using a multi-stop `conic-gradient` and an infinite rotation animation.
  - **The Heavy Frosted Glass**: The main `.glass-media-card` uses standard glassmorphism (`background`, border, inner highlight), but employs a heavy `backdrop-filter: blur(40px) saturate(150%)`. This physically softens the harsh lines of the simulated album art behind it, creating a beautiful, diffused glow that reacts dynamically as the art rotates.
  - **The Pure CSS Audio Visualizer**: The "dancing bars" effect is a classic audio UI pattern. Instead of using JavaScript to read audio frequencies, we simulate it purely in CSS:
    1. A flex container holds 16 identical `.bar` elements.
    2. Every bar shares the exact same `@keyframes eq-dance` animation, which scales the bar along the Y-axis from 0.1 to 1.
    3. The magic is in the `animation-delay`. We assign a unique, negative fractional delay (e.g., `-0.4s`, `-0.2s`, `-0.9s`) and a static `height` percentage to each individual bar. This completely desynchronizes the single animation loop, perfectly simulating the chaotic, random "dancing" of a true frequency analyzer.
  - **The `:has()` Selector State Logic**: The play/pause button is actually a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.glass-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the visualizer bars, causing them to drop to the baseline.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the rotating album art and the dancing visualizer bars are disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the simulated audio visualizer bars dance out of sync. Click the Play/Pause button to see the visualizer bars dynamically react and drop to the baseline when "paused", driven entirely by CSS state.

## Files
- `demo.html`: The HTML structure defining the ambient background, the 16 visualizer bars, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the heavy `backdrop-filter` logic, the `animation-delay` staggered visualizer mathematics, and the `:has()` selector state interactions.
