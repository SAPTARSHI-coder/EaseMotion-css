# CSS Scale-Hover Badge (Minimalist Tech)

A pure CSS interactive badge component designed for Minimalist Tech Layouts. It focuses on providing tactile, responsive feedback by utilizing a bouncy "Scale-Hover" interaction on hover, and a realistic "depression" state on click.

## Features
- Pure CSS and HTML (No JavaScript required).
- **Minimalist Tech Aesthetic**: Clean, slightly squared layouts, sharp `Inter` typography, distinct semantic color variants, and interactive "removable filter tag" layouts.
- **The Scale-Hover Effect**: 
- A dedicated utility class `.scale-hover` handles the interaction styling on the targeted badges.
- Uses `transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)` to smoothly manage scale changes with a slight bouncy physical spring.
- On `:hover`, the badge expands slightly (`transform: scale(1.05)`) and lifts off the page background by dynamically applying a `box-shadow` and a subtle `border`. This creates a satisfying, physical "card pop" effect.
- We utilize a transparent `border: 1px solid transparent` on the base `.badge` state to ensure the physical dimensions of the element don't jump when the colored border is applied on hover.
- On `:active` (when the mouse is clicked down), the badge dynamically depresses (`transform: scale(0.95) !important`) to provide universal tactile, button-like feedback.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the hover/active scaling transitions and the dynamic drop shadows are completely disabled to prevent sudden screen movement. The badges safely fall back to simple, color-only hover states.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Interactive Labels". Hover over them to experience the satisfying, physical "card pop" scaling effect. Try clicking them (or clicking and holding) to feel the tactile depression feedback. The "tag style" variants also feature an inner interactive remove button.

## Files
- `demo.html`: The HTML structure for the badges, demonstrating how to construct interactive links and removable tags alongside the `.scale-hover` utility class.
- `style.css`: The styling, minimalist tech design tokens, the specific CSS transition logic driving the smooth scale interactions, and the jitter-prevention border logic.
