# CSS Scale-Hover Dropdown (Minimalist Tech)

A pure CSS interactive dropdown component designed for Minimalist Tech Layouts. It focuses on providing tactile, responsive feedback by utilizing a bouncy "Scale-Hover" interaction on both the trigger button and the individual menu items.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, sharp `Inter` typography, robust subtitle descriptors, and distinct accent-colored icon boxes.
- **State Management**: The opening and closing of the dropdown is handled entirely via a hidden checkbox hack (`<input type="checkbox">`). A `<label>` acts as the trigger button.
- **The Scale-Hover Effect**: 
- A dedicated utility class `.scale-hover-item` handles the interaction styling on the targeted elements.
- Uses `transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)` to smoothly manage scale changes with a slight bouncy physical spring.
- On `:hover`, the trigger button expands slightly (`transform: scale(1.03)`). 
- Crucially, when hovering over individual `.menu-item` elements, they also scale up (`scale(1.03)`) and lift off the menu background by dynamically applying a `box-shadow` and a subtle `border`. This creates a satisfying, physical "card pop" effect.
- We utilize a transparent `border: 1px solid transparent` on the base `.menu-item` state to ensure the physical dimensions of the element don't jump when the colored border is applied on hover.
- On `:active` (when the mouse is clicked down), elements slightly depress (`transform: scale(0.97) !important`) to provide universal tactile, button-like feedback.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the hover/active scaling transitions, the dynamic drop shadows, and the icon rotations are completely disabled to prevent sudden screen movement. The menu items safely fall back to a simple, color-only hover state.

## Usage
Open `demo.html` in your browser. You will see a mock "Export Data" action button. Hover over it to feel the slight bounce, then click it to toggle the dropdown. Once open, run your mouse down the list items to experience the satisfying, physical "card pop" scaling effect. Try clicking them to feel the tactile depression feedback.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the pure CSS checkbox hack setup and the application of the `.scale-hover-item` utility class across varying element types.
- `style.css`: The styling, minimalist tech design tokens, the specific CSS transition logic driving the smooth scale interactions, and the jitter-prevention border logic on the list items.
