# CSS Slider: Synthwave Grid Line

A retro-futuristic, JavaScript-free carousel utilizing the CSS radio button hack. Features a 3D animated perspective grid and glowing neon borders inspired by 80s synthwave and outrun art styles.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a control node actually checks the hidden radio button. The CSS then detects which button is `:checked` and alters the slide position accordingly.
  - **3D Animated Grid**: The `.synth-grid` element uses two overlapping `linear-gradient` backgrounds to draw a neon grid. The `.synth-grid-container` applies `perspective: 600px`, allowing the grid to be laid flat via `transform: rotateX(80deg)`. An infinite CSS `@keyframes` animation translates the grid along the Y-axis (which appears as the Z-axis due to the rotation), creating the illusion of moving forward underneath the slider.
  - **Arcade Physics**: The `.slide` horizontal translations use a custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` to create an elastic, snappy movement, mimicking the sudden acceleration of a retro-arcade racing game.
  - **Neon Lighting**: Extensive use of `box-shadow` and `text-shadow` layers (both inset and outset) are applied to buttons, borders, and text to create a realistic, multi-layered neon glow effect.
- **Theming**: Configured via CSS Custom Properties. This slider is inherently designed for dark backgrounds to allow the neon colors to "glow" via shadows. The base palette includes deep space purples, neon pinks (`#ff00ff`), and cyan (`#00ffff`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the horizontal slide translation and the infinite grid animation, opting instead for a simple instant opacity cross-fade for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the tilted neon control nodes below the slider to navigate between the slides using the pure CSS radio hack.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, the 3D grid container, and the navigation controls.
- `style.css`: The styling, the `:checked` sibling selector matrix for slide positioning, the perspective geometry math, and the `grid-move` animation keyframes.
