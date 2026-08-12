# CSS Media Visualizer: Bouncing Spring

A hardware-accelerated, JavaScript-free audio and media UI element. Features highly elastic, physics-based bouncing animations driven by custom CSS `cubic-bezier` timing functions.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the spring physics or the play/pause state logic.
- **Component Architecture**: 
  - **The Magic `cubic-bezier`**: The core of this elastic aesthetic relies on custom timing functions. Standard CSS `ease-in` or `ease-out` functions stay between 0 and 1. However, by supplying a `cubic-bezier()` where the Y-values fall outside of the 0-1 range (e.g., `cubic-bezier(0.68, -0.55, 0.265, 1.55)`), we force the animation to temporarily overshoot its target value before snapping back. This physically simulates an elastic spring.
  - **The Bouncing Album Art**: The central `.album-art` container utilizes an `@keyframes art-spring` animation. It slowly scales between 0.95 and 1.05. Because it uses the custom spring cubic-bezier, it subtly "pops" outward and squishes inward, making the UI feel alive and physical.
  - **The Spring Audio Visualizer**: A flex container holds 8 `.spring-dot` elements. They animate using `transform: scaleY()` with `transform-origin: bottom`. The keyframes scale them from 0.2 to 1. Because they also use the overshooting spring cubic-bezier, they snap upward, overshoot their 1.0 scale slightly, and settle back, perfectly mimicking a physical spring snapping. We stagger their `animation-delay` values to simulate chaotic audio frequency dancing.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.media-player-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the album art and the visualizer dots. We also apply a `transform: scaleY(0.1) !important` to squish the dots down to the baseline. Crucially, we ensure the `transition` that handles this squishing *also* uses the spring `cubic-bezier`, so the UI bounces even as it settles into its paused state.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the overshooting cubic-bezier animations are disabled, and elements are set to static scales.

## Usage
Open `demo.html` in your browser. Watch the visualizer dots snap elastically and the album art subtly pulse. Click the Play/Pause button to see the magic: the dots will spring back down to a squished state when "paused", driven entirely by CSS state transitions and custom timing curves.

## Files
- `demo.html`: The HTML structure defining the album art container, the 8 visualizer spring dots, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the custom overshooting `cubic-bezier` timing functions, the `animation-delay` staggered visualizer mathematics, and the `:has()` selector state interactions.
