# CSS Media Visualizer: Floating Elevation

A hardware-accelerated, JavaScript-free audio and media UI element. Features a breathable floating aesthetic achieved through synchronized CSS `box-shadow` and `transform` animations.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the floating animations, the depth effects, or the play/pause state logic.
- **Component Architecture**: 
  - **The Ambient Float**: The `.floating-media-card` utilizes an `@keyframes ambient-float` animation. This animation shifts the card slightly upwards using `transform: translateY(-15px)`, while simultaneously expanding and softening the `box-shadow`. This creates a highly convincing illusion of a physical object "breathing" and floating above the surface.
  - **3D Depth & Desynchronization**: The `.album-art-container` uses `perspective: 1000px`. The `.floating-album-art` inside it has its own floating animation (`@keyframes element-float`), which incorporates `translateZ()` and `rotateX()`. Because its timing is desynchronized from the main card (4s vs 6s), it appears to float independently *above* the floating card, adding significant parallax depth.
  - **The Bouncing Visualizer**: The audio visualizer is built using `.float-block` elements. Instead of scaling, they bounce using `transform: translateY()`. To anchor them visually, their `box-shadow` drops straight down. By staggering their `animation-delay` values, we simulate chaotic audio frequency dancing.
  - **The `:has()` Selector "Gravity" Landing**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the `body` (`body:has(.play-toggle:not(:checked))`) to instantly halt the animations across all components. Crucially, we apply `transform: translateY(10px)` and a very tight, hard `box-shadow`. This effectively turns on "gravity", causing the floating card, the album art, and the visualizer blocks to smoothly land back down onto the desk surface when the music stops.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The shadows are automatically intensified in dark mode to maintain the illusion of depth.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all floating and bouncing animations are disabled, presenting a static, grounded player UI.

## Usage
Open `demo.html` in your browser. Watch the card and its internal elements independently breathe and float. Click the Play/Pause button to see the magic: CSS gravity takes over, smoothly landing all the floating components back onto the surface, driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the floating card, the 3D album art container, the bouncing visualizer blocks, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the synchronized `translateY` and `box-shadow` keyframes, the 3D perspective setup, and the `:has()` selector state interactions for the gravity landing effect.
