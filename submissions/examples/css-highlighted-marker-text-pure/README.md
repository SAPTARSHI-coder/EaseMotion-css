# CSS Highlighted Marker Text

A pure CSS typography effect simulating a hand-drawn marker highlight using multi-layered animated background gradients, built without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript or complex SVG masking).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with adapted marker opacity for better legibility against dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **CSS Linear Gradients**: We utilize two slightly angled `linear-gradient` declarations layered on top of each other. The angled stops (e.g., `110deg`) simulate the slightly jagged, imperfect edges of a real highlighter pen stroke.
  - **Background Size Animation**: We animate the `background-size` property on hover. By transitioning the horizontal width from `0%` to `100%`, it creates the illusion of a marker stroke being drawn across the text from left to right.
  - **CSS Variable Overrides**: The component is designed for easy color swapping by overriding the `--highlight-color` variable on specific modifier classes (e.g., `.highlight-pink`), allowing infinite color variations without duplicating the complex animation logic.
- Fully accessible semantic structure. Uses the standard HTML `<mark>` element for semantic highlighting. Honors the `prefers-reduced-motion` accessibility standard by disabling the drawing transition and defaulting to a static, fully drawn highlight for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the wrapped text elements to watch the marker stroke draw across the screen.

## Files
- `demo.html`: The HTML structure demonstrating the use of the `<mark>` element with the animation classes.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `background-size` transition logic.
