# CSS Rotate-Fade Progress Bar (Minimalist Tech)

A pure CSS progress bar component designed for Minimalist Tech Layouts. It features a unique, continuous "Rotate-Fade" highlighting animation that simulates an active data transfer or loading process, managed entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean layouts, precise container styling, subtle inner shadows for depth, and monospace (`JetBrains Mono`) for technical data like file names.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#progress-trigger`) controls the state of the progress bar.
- The "Start Upload" button acts as a `<label>` to trigger the checkbox. The button's text dynamically updates to "Reset" when active, using CSS sibling selectors (`~`).
- The status text dynamically switches between "Waiting...", "Uploading...", and "Done" based on the checkbox state and precise `@keyframes` animation timing delays.
- **The Rotate-Fade Animation System**: 
- The progress fill animation (`width: 0%` to `100%`) is handled by a standard `@keyframes` transition (`fill-bar`) spanning 3 seconds.
- The unique highlight effect is created using an absolutely positioned `::after` pseudo-element on the `.progress-fill` bar.
- This pseudo-element is significantly larger than the bar itself and features a sharp `conic-gradient` (transparent to white to transparent) to create a "beam" of light.
- By continuously rotating this large gradient using the `rotate-fade-beam` keyframes, and keeping `overflow: hidden` on the parent track, it creates the illusion of a diagonal highlight rapidly sweeping and fading across the filling bar.
- A secondary animation (`fade-out-at-end`) ensures the highlight disappears gracefully exactly as the bar reaches 100%.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous rotating highlight beam is completely disabled. The bar fill animation is also shortened to a linear 0.5s transition to eliminate prolonged movement, and the status text timings are adjusted accordingly.

## Usage
Open `demo.html` in your browser. You will see an "Upload Status" dashboard. Click the "Start Upload" button. The progress bar will begin to fill smoothly. While filling, you will see the continuous "Rotate-Fade" highlight sweeping across the blue area, indicating active processing. Once the bar is full, the highlight will fade out, and the status will update to "Done". Click "Reset" to return to the initial state.

## Files
- `demo.html`: The HTML structure for the upload dashboard, detailing the pure CSS checkbox hack setup for the start button, and the layout for the file information and progress track.
- `style.css`: The styling, tech design tokens, the dynamic button text toggling logic, and the specific `@keyframes` and `conic-gradient` rules driving the unique rotating highlight effect.
