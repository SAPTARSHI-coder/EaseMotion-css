# Rotating Border Card

A card featuring a gradient border that continuously rotates, built entirely with HTML and CSS.

## Preview

Open `demo.html` in your browser to see the effect in action.

## Implementation Details

- **No JavaScript:** The animation is completely driven by CSS keyframes.
- **Conic Gradient:** Uses `conic-gradient` combined with a rotation animation to create the border effect.
- **Pseudo-elements:** Utilizes `::before` for the rotating gradient and `::after` to mask the inner content area, leaving only the border visible.
