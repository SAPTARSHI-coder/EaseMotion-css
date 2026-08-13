# Morphing Progress Bar: Dark Mode

A highly advanced, JavaScript-free UI component that chains multiple CSS animations to morph a standard button into a loading bar, and finally into a success checkmark.

## Features
- Pure CSS and HTML implementation. The entire multi-stage animation sequence is triggered by a single CSS "Checkbox Hack" and orchestrated using precisely timed `animation-delay` calculations.
- **Component Architecture & Styling Mechanics**: 
  - **The Checkbox Hack**: The entire component is wrapped in a `<label>` linked to a hidden `<input type="checkbox">`. Clicking the button checks the box, which initiates the CSS pseudo-class `:checked` sequence.
  - **Chained Animation Sequence**: 
    1. **Morph to Bar**: When checked, the button's `width` expands from `180px` to `300px`, and its `height` collapses from `50px` to `12px`. The text opacity is set to `0`.
    2. **Fill Progress**: A nested `.progress-fill` element runs an `@keyframes` animation to expand from `0%` to `100%` width over 3 seconds. It utilizes an `animation-delay` equal to the duration of the initial morph so it doesn't start filling until the bar shape is ready.
    3. **Morph to Success**: Once the progress fill completes, the main container runs another `@keyframes` animation (`morphToSuccess`). It shrinks into a `50px` circle, turns blue, and then flashes to emerald green.
    4. **Pop Checkmark**: Finally, the SVG checkmark scales up from `0` to `1` using a bouncy `cubic-bezier` timing function exactly when the circle turns green.
  - **Pointer-Events Protection**: To prevent the user from re-clicking or interrupting the animation, `pointer-events: none;` is applied the moment the button is clicked.
- **Theming**: Configured via CSS Custom Properties. Designed with a premium Dark Mode aesthetic featuring deep blacks, slate greys, and vibrant Blue/Emerald accents. Because it is specifically a "Dark Mode" component, the dark styling is hardcoded into the root variables.
- Fully accessible semantic structure. Uses `<label>` with `aria-label="Start Update"`. Honors the `prefers-reduced-motion` accessibility standard by skipping the complex multi-stage animations and instantly snapping to the final success state if requested by the OS.

## Usage
Open `demo.html` in your browser. Click the "Install Update" button. Watch the button smoothly collapse into a progress bar, fill up over 3 seconds, and then snap into a green success checkmark.

## Files
- `demo.html`: The HTML structure defining the checkbox hack, the button states, and the SVG checkmark.
- `style.css`: The styling, the complex `@keyframes` math required to sequence the animations, and the dark mode variables.
