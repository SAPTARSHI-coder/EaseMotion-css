# Expanding Circular Menu

A floating action button that expands into a circular menu using only CSS state.

## Preview

Open `demo.html` in your browser and click on the red floating action button to see the circular menu expand.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the "checkbox hack" using an `<input type="checkbox">` and `<label>`.
- **Circular Expansion:** The child menu items are positioned absolutely and translate outwards in a circle when the checkbox is toggled.
- **Icon Morphing:** The hamburger icon gracefully transforms into a close (X) icon using CSS transforms and transitions.
