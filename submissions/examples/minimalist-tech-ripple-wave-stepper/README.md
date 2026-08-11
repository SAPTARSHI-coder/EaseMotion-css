# CSS Ripple-Wave Stepper (Minimalist Tech)

A pure CSS interactive stepper component designed for Minimalist Tech Layouts. It features a continuous, concentric "Ripple-Wave" animation that emanates from the currently active step circle, signifying active system processes.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, and distinct blue/purple/pink/emerald accent colors over a sterile `f8fafc` background.
- **State Management**: The progression of the stepper is handled entirely via the hidden radio button hack (`<input type="radio">`). The circular step nodes act as `<label>` elements wired to these hidden inputs, allowing the user to click them to advance or reverse state.
- **The Ripple-Wave Effect**: 
- We use three absolutely positioned `.ripple` elements hidden inside each `.step-circle`.
- When a specific step's radio button is checked, an `@keyframes` animation (`ripple-pulse`) is triggered *only* on the internal ripples of that active step via CSS sibling selectors (`#step-1:checked ~ .stepper-wrapper .step-item-1 .ripple`).
- The keyframes expand the elements outward (`transform: scale(1.5)`) while fading to `opacity: 0`. We utilize the `currentColor` property on the ripples' borders so they automatically match the specific accent color assigned to their parent step.
- We utilize utility classes (`.r-1`, `.r-2`, `.r-3`) with staggered `animation-delay` values (0s, 1s, 2s) to ensure the waves are generated continuously and concentrically as long as the step is active.
- **Completed vs Active States**: Complex sibling selectors are used to alter the styles of steps appearing *before* the active step, filling them with solid color and swapping the step number for an SVG checkmark to indicate completion.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous ripple-wave keyframes and transition effects are completely disabled. The interactions safely fall back to static CSS state changes.

## Usage
Open `demo.html` in your browser. You will see a mock System Initialization stepper. Click the numbered circular nodes to advance or rewind the state. Observe how the active node pulses with a concentric colored ripple wave, while previous nodes mark themselves as completed with a solid fill and a checkmark.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup and the hidden `.ripple` nodes required inside each step circle to achieve the effect.
- `style.css`: The styling, minimalist tech design tokens, the complex sibling selector logic for tracking completed vs active states, and the staggered `@keyframes` driving the continuous ripple-wave mechanics.
