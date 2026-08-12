# Ripple Button

A material-design inspired button that creates a circular ripple animation effect radiating outwards purely with CSS.

## Preview

Open `demo.html` in your browser and click on the button to see the ripple effect.

## Implementation Details

- **No JavaScript:** The interaction is powered completely by the `:active` pseudo-class.
- **Center Expanding Ripple:** A pseudo-element `::after` is positioned absolutely at the center of the button with `width` and `height` of 0. When the button is clicked (`:active`), the pseudo-element expands its width and height to 300px while transitioning its opacity, creating the iconic ripple effect.
- **Overflow Hidden:** The button has `overflow: hidden` so the ripple doesn't spill outside its borders.
