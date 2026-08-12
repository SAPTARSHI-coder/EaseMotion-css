# CSS Accordion: Solar Flare Radial

A hardware-accelerated, JavaScript-free accordion interface featuring intense radial gradients and exploding transitions that simulate solar flares.

## Features
- Pure CSS and HTML implementation. The accordion expand/collapse mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Checkbox Hack Mechanics**: Hidden `<input type="checkbox">` elements control the state of each accordion item individually (allowing multiple to be open). The visible headers are `<label>` elements linked to these inputs.
  - **Solar Flare Radial Expansion**: Inside the header (`.acc-header`), an absolute-positioned `.acc-flare-bg` element sits behind the text. It contains a fiery `radial-gradient`. Initially, its `transform: scale()` is `0`. When the checkbox is `:checked`, the scale explodes to `150` via a sharp `cubic-bezier` transition, covering the entire header in a blinding solar flare. The text color inverts to maintain contrast against the bright background.
  - **Max-Height Content Transition**: The `.acc-content-wrapper` hides the panel content by default using `max-height: 0` and `opacity: 0`. When the accordion is opened, the `max-height` transitions to a value comfortably larger than the expected content (`400px`), smoothly rolling down the content pane while fading it in.
  - **Ambient Solar Background**: The `.solar-bg` uses layered `radial-gradient` backgrounds, including an animated pseudo-element that slowly pulses in scale and opacity to simulate a breathing, active star.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a very dark reddish-brown base (`#110500`) with high-energy fiery colors: yellow (`#ffeb3b`), orange (`#ff9800`), and red (`#f44336`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the continuous background pulse, the explosive flare scale transitions, and the panel slide animations are disabled, switching instantly instead.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers (Coronal Mass Ejection, Sunspots, etc.). Notice how the background of the clicked header erupts in a fiery radial flare, the "+" icon rotates to an "x", and the content panel smoothly slides down.

## Files
- `demo.html`: The HTML structure defining the checkbox hack inputs, the layered accordion headers, and the content wrappers.
- `style.css`: The styling, the `max-height` transition logic, the `radial-gradient` scale explosion mechanics for the flare, and the ambient background keyframes.
