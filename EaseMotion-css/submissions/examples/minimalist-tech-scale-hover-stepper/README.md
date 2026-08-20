# CSS Scale-Hover Stepper (Minimalist Tech)

A pure CSS interactive stepper component designed for Minimalist Tech Layouts. It features a tactile, responsive "Scale-Hover" interaction designed to encourage user engagement with the step nodes.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, and distinct blue/purple/pink/emerald accent colors over a sterile `f8fafc` background.
- **State Management**: The progression of the stepper is handled entirely via the hidden radio button hack (`<input type="radio">`). The circular step nodes act as `<label>` elements wired to these hidden inputs, allowing the user to click them to advance or reverse state.
- **The Scale-Hover Effect**: 
- A dedicated utility class `.scale-hover` handles the interaction styling on the `.step-circle` elements.
- Uses `transition: transform 0.3s cubic-bezier(...)` to smoothly manage scale changes.
- On `:hover`, the node physically expands (`transform: scale(1.15)`) and projects a soft, glowing box-shadow to indicate interactivity.
- On `:active` (when the mouse is clicked down), the node slightly depresses (`transform: scale(0.95)`) to provide tactile, button-like feedback before the state changes.
- **Completed vs Active States**: Complex sibling selectors (`~`) are used to alter the styles of steps appearing *before* the active step, filling them with solid color and swapping the step number for an SVG checkmark to indicate completion. The active step receives a dual-ring border highlighting its current status.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the hover/active scaling transitions are completely disabled to prevent screen movement, falling back to simple cursor changes.

## Usage
Open `demo.html` in your browser. You will see a mock Data Migration stepper. Hover your mouse over the numbered circular nodes to see them smoothly scale up and glow. Click a node to observe the slight tactile depression before the stepper advances or rewinds its state, filling the previous nodes with a solid completion color.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required for JS-free state management and the application of the `.scale-hover` utility class.
- `style.css`: The styling, minimalist tech design tokens, the complex sibling selector logic for tracking completed vs active states, and the specific CSS transition logic driving the smooth scale interactions.
