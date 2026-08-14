# CSS Media Visualizer: Gradient Shimmer

A hardware-accelerated, JavaScript-free audio and media UI element. Features rich, flowing gradients that continuously shimmer across the typography, album art, and visualizer bars.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the fluid gradient animations or the play/pause state logic.
- **Component Architecture**: 
  - **The Shimmer Engine**: The core effect relies on an oversized background gradient (`background-size: 200% auto`). By continuously animating `background-position` from 0% to 200% via an infinite `@keyframes shimmer-pan`, the gradient appears to flow seamlessly across the element, creating an iridescent shimmer.
  - **Shimmering Typography**: The `.shimmer-text` utility class applies this moving background gradient to text using `-webkit-background-clip: text; color: transparent;`. This creates stunning, animated metallic typography without requiring SVG masks or JavaScript.
  - **The Holographic Disc**: The album art `.shimmer-disc` utilizes the same moving gradient. Additionally, it applies an `@keyframes spin-disc` animation to physically rotate the element. The combination of rotation and panning background gradients creates a highly realistic holographic foil effect.
  - **The Multi-Animated Visualizer**: The audio visualizer is built using `.shimmer-bar` elements. They execute *two* animations simultaneously: `viz-scale` (which scales them on the Y-axis to simulate audio frequencies) and `shimmer-pan` (which flows the gradient through them).
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.shimmer-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to all shimmering elements. The text, the disc, and the visualizer bars all freeze their gradients exactly where they are. The visualizer bars also flatten to a static height via a CSS transition.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous panning gradients and scaling animations are disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the continuous gradient shimmer flow across the text, the rotating disc, and the bouncing visualizer bars. Click the Play/Pause button to see the shimmer instantly freeze in place and the visualizer flatten, driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the album art container, the shimmering text, the visualizer array, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `-webkit-background-clip: text` utility, the `background-position` panning keyframes, and the `:has()` selector state interactions for freezing the shimmer.
