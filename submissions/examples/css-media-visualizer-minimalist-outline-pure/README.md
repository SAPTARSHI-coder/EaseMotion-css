# CSS Media Visualizer: Minimalist Outline

A hardware-accelerated, JavaScript-free audio and media UI element. Features a stark, clean aesthetic relying entirely on 1px borders, negative space, and monochromatic contrast.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the visualizer animation or the play/pause state logic.
- **Component Architecture**: 
  - **The Minimalist Aesthetic**: The entire component eschews shadows, gradients, and solid backgrounds. Instead, it defines a single `--outline-color` and `--outline-width` (1px). Every element, from the card container to the buttons and the visualizer bars, is styled primarily by its border, creating a blueprint-like or wireframe appearance.
  - **The Rotating Art**: The album art is abstracted down to a simple, empty `.outline-art` circle with a single `.outline-dot` placed on its edge. It rotates smoothly using an infinite `@keyframes slow-spin` animation, serving as a minimalist playhead indicator.
  - **The Transparent Visualizer**: The audio visualizer is built using `.outline-bar` elements. Because they have `background: transparent`, they are defined solely by their 1px borders. They animate using `transform: scaleY()` with `transform-origin: bottom`. 
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.outline-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the rotating art. Additionally, the visualizer bars are flattened to a tiny `scaleY(0.05)`, resting quietly on the baseline border when the music stops.
  - **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The contrast simply inverts, keeping the stark minimalist aesthetic intact regardless of the user's system theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all scaling and spinning animations are completely disabled, presenting a static, highly readable player UI.

## Usage
Open `demo.html` in your browser. Watch the transparent, outlined visualizer bars scale rhythmically and the minimalist circular playhead rotate. Click the Play/Pause button to see the visualizer bars instantly flatten to the baseline when "paused", driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the outlined containers, the abstracted album art, the 10 transparent visualizer tracks, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the strict 1px border aesthetic, the `transform: scaleY()` keyframes, and the `:has()` selector state interactions for flattening the visualizer.
