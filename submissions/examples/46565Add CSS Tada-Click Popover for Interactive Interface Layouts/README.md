# CSS Tada-Click Popover for Interactive Interface

A pure CSS popover component engineered for highly interactive, playful web interfaces. It features a robust "Checkbox Hack" implementation to provide true click-to-toggle functionality without a single line of JavaScript, paired with a lively "Tada" entrance animation.

## Features
- **Pure CSS Click State**: Uses the hidden checkbox hack (`input[type="checkbox"]:checked ~ .ease-popover-panel`) to persist the popover's open/close state strictly via CSS. This creates a true "Click" interaction, unlike `:hover` or `:focus-within`.
- **EaseMotion Tada Animation**: Implements a custom `@keyframes ease-tada` that provides a fun, attention-grabbing wobble and scale effect when the user clicks the trigger.
- **Interactive Interface Aesthetics**: Designed with tactile, neobrutalism-inspired elements. Features bold font weights, vivid colors (primary indigo, pink, and yellow), and drop shadows that compress tightly on `:active` states.
- **Accessible & Responsive**: Keyboard navigable. The trigger label includes `tabindex="0"`, making it focusable. The popover natively supports responsive layouts by anchoring correctly and breaking smoothly on mobile.
- **Internal Close Button**: Because it uses the checkbox hack, the popover includes a dedicated "Close" button inside the panel (another `<label>` linked to the same checkbox) to dismiss it manually.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-tada-click`: The wrapper class responsible for orchestrating the transition and applying the Tada keyframes on the `:checked` state.
- `@keyframes ease-tada`: The custom keyframe logic providing the multi-step rotational wobble.
- `--ease-tada-duration`: Controls the speed of the Tada animation (default: `1000ms`).
- `--ease-popover-offset-y`: Controls the vertical drop spacing between the trigger button and the panel.

## Usage
Add the `.ease-popover-container` along with its hidden `<input type="checkbox">` and `<label>` trigger. The popover panel will automatically listen to the checkbox state. Variables can be tweaked at the `:root` level for custom timing.

### Quick Start
Open `demo.html` in your browser to view the highly interactive UI mockup and interact with the click-toggled Tada popover.
