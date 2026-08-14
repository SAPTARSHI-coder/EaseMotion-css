# CSS Media Visualizer: Neumorphic Soft Shadow

A hardware-accelerated, JavaScript-free audio and media UI element. Features a soft, extruded plastic aesthetic created entirely with CSS `box-shadow` layering, and a purely CSS-driven audio visualizer.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the visualizer animation or the play/pause state logic.
- **Component Architecture**: 
  - **The Neumorphic Plastic Aesthetic**: Neumorphism relies heavily on the background color of the element matching the background color of its parent perfectly. We define `--neo-bg` at the root. The "extruded" physical look of the card and buttons is achieved using two offset `box-shadow` values: one light (`--neo-shadow-light`) shining from the top-left, and one dark (`--neo-shadow-dark`) casting to the bottom-right.
  - **The "Carved" Visualizer Insets**: While the buttons pop *out*, the visualizer bars appear to be carved *into* the plastic. This is achieved by flipping the shadows using the `inset` keyword, creating a physical track.
  - **The Pure CSS Audio Visualizer**: Inside these carved inset tracks, we place pseudo-elements (`::after`) filled with a vibrant accent color. Every bar shares the exact same `@keyframes eq-bounce` animation, scaling it along the Y-axis. We assign a unique, negative fractional delay (e.g., `-0.4s`, `-0.2s`, `-0.9s`) to each individual bar. This desynchronizes the animation loop, perfectly simulating the chaotic "dancing" of a true frequency analyzer.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When checked (playing), the button stays physically pressed *in* (inset shadow), and the visualizer bounces. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.neumorphic-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the visualizer bars, causing them to drop to the baseline.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The contrast of the shadows is carefully adjusted between light and dark modes to ensure the extrusion effect remains physically realistic in both environments.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the rotating album art and the dancing visualizer bars are disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the simulated audio visualizer bars bounce within their carved tracks, and the album art slowly spin. Click the Neumorphic Play/Pause button to see it physically press *into* the surface, and watch the visualizer bars dynamically react and drop to the baseline when "paused", driven entirely by CSS state.

## Files
- `demo.html`: The HTML structure defining the neumorphic containers, the 16 visualizer tracks, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the complex `box-shadow` layering for extrusion and insets, the `animation-delay` staggered visualizer mathematics, and the `:has()` selector state interactions.
