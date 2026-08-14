# CSS Glitch-Flicker Drawer (Minimalist Tech)

A pure CSS interactive drawer component designed for Minimalist Tech Layouts. It features a dark-themed diagnostic panel that incorporates advanced "Glitch" and "Flicker" text animations, powered entirely by CSS keyframes.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is handled via the hidden checkbox hack (`input[type="checkbox"]` paired with `<label>`), allowing the drawer to open and close smoothly.
- **The Glitch Effect**: The `.glitch-container` uses `::before` and `::after` pseudo-elements containing duplicate text (via `content: attr(data-text)`). These elements are subjected to complex `@keyframes` that rapidly manipulate `clip-path: polygon()` and `transform: translate()` while applying offset `text-shadow` colors (red/blue chromatic aberration).
- **The Flicker Effect**: The `.flicker-line` utilizes a highly specific `@keyframes` timeline that erratically jumps between `opacity: 1` and `opacity: 0.3` at precise percentage marks, mimicking a failing fluorescent bulb or corrupted data stream.
- The animations are scoped using the `:checked` sibling selector so they *only* run when the drawer is open, saving CPU resources when the drawer is hidden.
- Clean, high-contrast aesthetic utilizing `Inter` for UI elements and `JetBrains Mono` for log streams.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial slide-in is replaced with a safe opacity fade, and the glitch/flicker `@keyframes` are entirely disabled.

## Usage
Open `demo.html` in your browser. You will see a mock dashboard indicating a critical system error. Click the "View Error Logs" button to trigger the pure CSS drawer. Upon opening, observe the intense chromatic glitch effect on the "FATAL_EXCEPTION" title, and the erratic dimming/flickering on the specific error log line. Click the overlay or the "X" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` and `<label>` pairing required for the CSS-only drawer trigger.
- `style.css`: The styling, drawer transition logic, and the complex `@keyframes` timelines driving the glitch and flicker effects.
