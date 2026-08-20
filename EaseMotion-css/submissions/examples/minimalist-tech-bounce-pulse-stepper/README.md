# CSS Bounce-Pulse Stepper (Minimalist Tech)

A pure CSS interactive stepper component designed for Minimalist Tech Layouts. It features a fast, bouncy physical enlargement when a step becomes active, immediately followed by a continuous, glowing "Pulse" effect indicating ongoing attention.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, and distinct blue/purple/pink/emerald accent colors over a sterile `f8fafc` background.
- **State Management**: The progression of the stepper is handled entirely via the hidden radio button hack (`<input type="radio">`). The circular step nodes act as `<label>` elements wired to these hidden inputs, allowing the user to click them to advance or reverse state.
- **The Bounce-Pulse Effect**: 
- We achieve this by chaining two distinct `@keyframes` animations on the active `.step-circle` element.
- When a specific step's radio button is checked, the first animation (`entrance-bounce`) physically scales the active circle up (`transform: scale(1.2)`). It utilizes a bouncy `cubic-bezier` timing function to give it a physical spring. This phase takes `0.6s`.
- The second animation (`continuous-pulse`) is chained to start exactly when the first one finishes (`0.6s` delay). This runs infinitely (`infinite alternate`), pulsing a colored `box-shadow` in and out.
- We use a custom CSS variable (`--pulse-color`) on each color modifier class to keep the code DRY, allowing a single `@keyframes` block to handle glowing in different colors based on the parent's assigned theme.
- **Completed States**: Complex sibling selectors (`~`) are used to alter the styles of steps appearing *before* the active step, disabling their pulsing animation, filling them with solid color, and swapping the step number for an SVG checkmark to indicate completion.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bounce scaling and continuous pulsing shadow are completely disabled. The interactions safely fall back to static CSS state changes.

## Usage
Open `demo.html` in your browser. You will see a mock Deployment Pipeline stepper. Click the numbered circular nodes to advance or rewind the state. Observe how the newly active node bounces up slightly and begins continuously pulsing a shadow to grab attention, while previous nodes mark themselves as completed.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required for JS-free state management.
- `style.css`: The styling, minimalist tech design tokens, the complex sibling selector logic for tracking completed vs active states, and the chained `@keyframes` driving the bouncy entrance into an infinite pulse.
