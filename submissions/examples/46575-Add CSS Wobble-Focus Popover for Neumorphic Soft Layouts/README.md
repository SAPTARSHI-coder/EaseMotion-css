# CSS Wobble-Focus Popover for Neumorphic Soft Layouts

A pure CSS popover component engineered for smooth, soft interfaces. It utilizes the `:focus-within` state to reveal a dropdown menu with a playful "Wobble" animation, tailored specifically for Neumorphism (Soft UI) design aesthetics.

## Features
- **Pure CSS Focus State**: Uses the native CSS `:focus-within` pseudo-class applied to the container. When the user focuses on the Neumorphic search input (either via click or keyboard tab), the popover smoothly drops down without requiring any JavaScript.
- **EaseMotion Wobble Animation**: Implements a custom `@keyframes ease-wobble` that provides a subtle, elastic shake effect reminiscent of physical, soft jelly objects coming to rest.
- **Neumorphic Soft Aesthetics**: Designed with true Neumorphism principles in mind. Extruded UI elements rely on dual-toned drop shadows (light top-left, dark bottom-right) against an off-white background, while pressed states (like the search input) use inner shadows (`inset`) to appear hollowed out.
- **Accessible**: Naturally supports keyboard navigation. Tabbing into the input reveals the popover, and users can tab through the items inside because focus remains within the `.ease-popover-container`.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-wobble-focus`: The wrapper class that applies the entry transitions and the wobble keyframes upon focus.
- `@keyframes ease-wobble`: The custom logic dictating the slight horizontal translations and rotational swings of the wobble.
- `--ease-wobble-duration`: Controls how long the wobble lasts before settling (default: `800ms`).
- `--ease-popover-offset-y`: Adjusts the drop distance between the input trigger and the popover panel (default: `20px`).

## Usage
Add the `.ease-popover-container` to encapsulate your input and the `.ease-popover-panel`. Focus events inside the container will toggle the panel automatically. Modify the Neumorphic shadow variables (`--neo-shadow-out`, `--neo-shadow-in`) to match your exact background tone.

### Quick Start
Open `demo.html` in your browser to view the soft, embossed UI mockup and test the Wobble-Focus interaction by clicking or tabbing into the search bar.
