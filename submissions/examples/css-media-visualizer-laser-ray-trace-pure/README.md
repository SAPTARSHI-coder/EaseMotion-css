# CSS Media Visualizer: Laser Ray Trace

A hardware-accelerated, JavaScript-free audio and media UI element. Features high-speed, glowing neon laser beams that trace borders and shoot across the visualizer stage.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the laser beam mechanics, the border tracing, or the play/pause state logic.
- **Component Architecture**: 
  - **The Laser Border Trace**: The `.album-art-container` uses a clever masking technique. The container has `overflow: hidden` and a small amount of padding. Inside, we place a `.laser-border-trace` element that is oversized (150% width/height). This element uses a `conic-gradient` background (fading from transparent to the solid neon laser color). We spin this element continuously using an `@keyframes` animation. The `.album-art-inner` sits on top, covering the center, leaving only the edge of the spinning conic gradient visible in the padded area, perfectly simulating a laser beam tracing the border.
  - **The Laser Array Visualizer**: The audio visualizer is built using `.laser-beam` elements. They are thin lines given an intense glow using multiple `box-shadow` layers (`0 0 4px`, `0 0 8px`, `0 0 12px` fading out). 
  - **The Easing Engine**: To make the lines look like high-speed lasers shooting back and forth (rather than just growing), we use `transform: scaleX()` with `transform-origin: center`, driven by a fast (0.2s) `@keyframes shoot-laser` animation. We use a sharp `cubic-bezier(0.4, 0, 0.2, 1)` to make the movement erratic and snappy.
  - **The Chaos**: By staggering their `animation-delay` values slightly and capping their `max-width` at varying percentages, we simulate chaotic, overlapping laser fire reacting to audio frequencies.
  - **The `:has()` Selector Power Down**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.laser-media-card:has(.play-toggle:not(:checked))`) to "power down" the unit. The border trace fades out, the central icon loses its glow, and the visualizer beams shrink to a tiny width, turn gray, lose their shadows, and stop animating.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Note: This neon laser component looks drastically better in dark environments.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the border trace and the shooting laser animations are completely disabled, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the continuous laser trace border and the high-speed laser array visualizer. Click the Play/Pause button to see the unit completely power down when "paused", shrinking the lasers and turning off all the neon lights, driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the album art container, the 8 visualizer laser beams, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `conic-gradient` masking trick, the intense `box-shadow` laser glows, the `transform: scaleX()` keyframes, and the `:has()` selector state interactions for the power down sequence.
