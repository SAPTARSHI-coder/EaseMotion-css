# CSS Elastic Slide Card

A pure CSS card layout optimized for modern Command Palette interfaces. It utilizes advanced `cubic-bezier` easing transitions to generate an elastic sliding backdrop effect on interaction without using JavaScript.

## Features
- **Zero JavaScript:** Pure HTML and CSS engineering.
- **Elastic Motion:** Uses custom easing parameters for a smooth bouncing feel.
- **Keyboard Accessible:** Fully operational via `Tab` focus states (`:focus-visible`).
- **Customizable:** Exposes design parameters using basic CSS variables (`:root`).

## Custom Parameters
You can adjust the following variables directly inside `style.css`:
- `--slide-timing`: Transition duration (default: `0.55s`)
- `--slide-easing`: Cubic bezier array governing the elastic snap back/forth behavior.
- `--hover-scale`: Outer card scale factor upon selection.
