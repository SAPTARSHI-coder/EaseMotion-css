# CSS Wobble-Focus Popover for Interactive Interface

A pure CSS popover component engineered for highly interactive, playful web interfaces. It features a completely JS-free focus-driven state (`:focus-within`), dropping down a robust command palette when the user interacts with the search bar, complete with a lively "Wobble" entrance animation.

## Features
- **Pure CSS Focus State**: State is handled exclusively by the `:focus-within` CSS pseudo-class. Focusing the search input (via click or keyboard navigation) instantly reveals the popover panel without writing a single line of JavaScript.
- **EaseMotion Wobble Animation**: Employs a custom `@keyframes ease-wobble` animation that gives the popover panel a fun, bouncy side-to-side wobble effect upon appearance, reinforcing the lively nature of the UI.
- **Interactive Interface Aesthetics**: Designed with tactile, neobrutalism-inspired elements. Features bold font weights, vibrant colors (primary indigo, pink, and yellow), heavy borders, and drop shadows (`0px 4px 0px`) that compress tightly on `:active` and `:focus` states.
- **Accessible & Responsive**: Fully keyboard navigable. Users can tab into the search bar to reveal the popover, and continue tabbing through the quick actions inside it without losing focus.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-wobble-focus`: The wrapper class responsible for orchestrating the `:focus-within` reveal and applying the Wobble keyframes.
- `@keyframes ease-wobble`: The custom keyframe logic providing the horizontal wobble and rotational swing.
- `--ease-wobble-duration`: Controls the speed of the Wobble animation (default: `800ms`).
- `--ease-popover-offset-y`: Controls the vertical drop spacing between the trigger search bar and the panel (default: `12px`).

## Usage
Add the `.ease-popover-container` along with an inner `<input type="text">` and your `.ease-popover-panel`. Focus events inside the container will trigger the panel. You can easily adjust the offset and timing by overriding the variables mapped to the `:root`.

### Quick Start
Open `demo.html` in your browser to view the highly interactive UI mockup and interact with the Wobble-Focus search palette!
