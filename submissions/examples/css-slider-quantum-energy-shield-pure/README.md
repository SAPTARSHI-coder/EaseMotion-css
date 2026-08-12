# CSS Slider: Quantum Energy Shield

A sci-fi, JavaScript-free carousel utilizing the CSS radio button hack. Features glowing energy fields, hexagonal geometry, and warp-speed transitions.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a dot actually checks the hidden radio button. The CSS then detects which button is `:checked` and translates the slides accordingly.
  - **Warp Speed Transitions**: The `.slide` elements are stacked absolutely and translated left or right based on the active state. A custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` creates a heavy snap-back elastic effect, mimicking the sudden acceleration of a warp drive.
  - **Hexagonal Geometry**: To fit the sci-fi aesthetic, the `.slider-track`, `.control-node` dots, and `.hex-icon` elements all utilize `clip-path: polygon(...)` to create perfect hexagons, moving away from standard rounded box UI.
  - **Energy Shield Aura**: An animated `.energy-shield-ring` sits behind the slider track. It uses a `radial-gradient` and an infinite `@keyframes` animation scaling and hue-shifting to simulate a pulsing containment field.
- **Theming**: Configured via CSS Custom Properties. This slider is inherently designed for deep space/dark backgrounds, utilizing a glowing blue/cyan (`#38bdf8`) palette.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by entirely disabling the horizontal slide translation and the pulsing energy shield, opting instead for a simple instant opacity cross-fade for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the hexagonal control nodes at the bottom to navigate between the slides using the pure CSS radio hack.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, and the hexagonal navigation controls.
- `style.css`: The styling, the complex `:checked` sibling selector matrix for slide positioning, the `clip-path` math, and the animated radial gradients.
