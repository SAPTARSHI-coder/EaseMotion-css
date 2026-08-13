# CSS Media Visualizer: Velvet Smooth Transition

A hardware-accelerated, JavaScript-free audio and media UI element. Features luxurious, ultra-smooth `ease-in-out` CSS transitions that create deep, liquid-like ebbs and flows.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the smooth visualizer wave or the play/pause state logic.
- **Component Architecture**: 
  - **The Velvet Easing**: While many modern UIs use sharp, springy `cubic-bezier` curves, this component leans heavily into standard, but elongated, `ease-in-out` transitions. This eliminates all sharp stops and starts, making the animations feel heavy, luxurious, and viscous—like velvet or thick liquid.
  - **The Velvet Breathing Art**: The central `.album-art` container utilizes an `@keyframes velvet-breathe` animation. It slowly scales and shifts its deep purple `box-shadow` over an 8-second cycle, creating a very calm, deep breathing effect. Inside, a `.velvet-pulse` emits soft, slow ripples.
  - **The Smooth Wave Visualizer**: The audio visualizer is built using `.velvet-bar` elements. They animate using `transform: scaleY()` with `transform-origin: center`. Because they use a 1.5s `ease-in-out` animation with widely staggered `animation-delay` values, they don't look like erratic audio meters; instead, they simulate a smooth, continuous sine wave rippling across the surface.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.velvet-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the album art and the visualizer bars. 
  - **The Velvet Settle**: The most crucial part of the pause state is the transition out. When paused, the `.velvet-bar` elements are instructed to scale down to `0.1`. However, we apply a `transition: all 1.2s ease-in-out` on them. This means that instead of snapping to a stop, the entire visualizer slowly and luxuriously "melts" down to its resting state over 1.2 seconds.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`), featuring a deep, rich color palette.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all scaling and pulsing animations are disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the smooth, continuous wave flow across the visualizer bars and the album art slowly breathe. Click the Play/Pause button to see the magic: the entire UI will slowly and luxuriously melt down to a resting state over 1.2 seconds when "paused", driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the album art container, the 8 visualizer bars, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the deep `ease-in-out` keyframes, the staggered visualizer wave mathematics, and the `:has()` selector state interactions for the slow "velvet settle" effect.
