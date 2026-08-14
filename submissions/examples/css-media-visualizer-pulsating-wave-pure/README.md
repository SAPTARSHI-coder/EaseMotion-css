# CSS Media Visualizer: Pulsating Wave

A hardware-accelerated, JavaScript-free audio and media UI element. Features a fluid, pulsating concentric wave animation that radiates from the central album art.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the visualizer animation, the rotating art, or the play/pause state logic.
- **Component Architecture**: 
  - **The Central Hub**: The `.album-art` container acts as the focal point. It uses a CSS `@keyframes spin-record` animation to slowly rotate infinitely, simulating a vinyl record or CD.
  - **The Pulsating Waves**: Directly behind the album art, we place 4 `.wave` elements. They are initially the exact same size as the album art.
  - **The `@keyframes` Engine**: Every wave shares the exact same `@keyframes pulse-wave` animation. This animation uses `transform: scale()` to expand the wave outward, while simultaneously dropping the `opacity` to 0 and reducing the `border-width`. This creates a smooth, expanding ripple.
  - **The Staggered Delays**: The illusion of continuous, radiating sound waves is achieved by assigning unique `animation-delay` values (0s, 0.625s, 1.25s, 1.875s) to the 4 `.wave` elements. This perfectly spaces out the ripples within the 2.5s animation loop.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.media-player-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the waves and the spinning album art. The waves are also given `opacity: 0` so they disappear when the music stops.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the radiating waves and spinning art are completely disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the concentric waves smoothly radiate from the spinning central album art. Click the Play/Pause button to see the waves instantly disappear and the art stop spinning when "paused", driven entirely by CSS state.

## Files
- `demo.html`: The HTML structure defining the central hub, the 4 wave elements, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `transform: scale()` wave mathematics, the `animation-delay` staggering, and the `:has()` selector state interactions.
