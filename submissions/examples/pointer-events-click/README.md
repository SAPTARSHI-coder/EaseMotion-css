# Pointer Events Click

Demonstrates the CSS `pointer-events` property for click isolation between layered elements. An interactive demo toggles `pointer-events: auto` and `pointer-events: none` on an overlay to control whether clicks reach the target beneath.

## Usage

Open `demo.html` in a browser. Click the "Toggle" button to switch the overlay's `pointer-events` value. When set to `none`, clicks pass through to the target element (click counter increments). When `auto`, the overlay intercepts clicks.

## Notes

- `pointer-events: none` makes an element invisible to pointer input but does not affect keyboard focus.
- Useful for transparent overlays, tooltips, and decorative layers that should not block interaction.
- The static cards below demonstrate the behavior without JavaScript interaction.
