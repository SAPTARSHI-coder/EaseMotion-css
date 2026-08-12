# CSS Pulse-Active Popover for Neumorphic Soft Layouts

A pure CSS popover component engineered for tactile, modern Neumorphic (Soft UI) interfaces. It features a robust "Checkbox Hack" implementation to provide true click-to-toggle active states without JavaScript, paired with a lively "Pulse" entrance animation.

## Features
- **Pure CSS Active State**: Uses the hidden checkbox hack (`input[type="checkbox"]:checked ~ .ease-popover-panel`) to persist the popover's open/close active state strictly via CSS. This creates a true "Click to open, Click to close" interaction.
- **EaseMotion Pulse Animation**: Implements a custom `@keyframes ease-pulse` that smoothly scales the popover up just past 100% and settles back, creating an engaging heartbeat/pulse reveal effect.
- **Neumorphic Soft Aesthetics**: Designed with true Neumorphism principles in mind. Extruded UI elements rely on dual-toned drop shadows (light top-left, dark bottom-right) against an off-white background, while pressed/active states use inner shadows (`inset`) to appear hollowed out.
- **Accessible**: The popover trigger (`<label>`) is focusable (`tabindex="0"`). An interior close button (which is another label pointing to the same checkbox) allows users to dismiss the popover cleanly from within.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-pulse-active`: The wrapper class responsible for orchestrating the transition and applying the Pulse keyframes on the `:checked` (active) state.
- `@keyframes ease-pulse`: The custom keyframe logic providing the scale-in pulse effect.
- `--ease-pulse-duration`: Controls the speed of the Pulse animation (default: `400ms`).
- `--ease-popover-offset-y`: Adjusts the drop distance between the trigger element and the popover panel (default: `16px`).

## Usage
Wrap your Neumorphic trigger button (as a `<label>`), the hidden `<input type="checkbox">`, and the `.ease-popover-panel` inside `.ease-popover-container`. The popover will automatically listen to the checkbox state. Adjust the Neumorphic shadow variables (`--neo-shadow-out`, `--neo-shadow-in`) to match your exact background tone.

### Quick Start
Open `demo.html` in your browser to view the soft Smart Home dashboard UI mockup and test the Pulse-Active interaction by clicking on the Thermostat widget.
