# Parallax Depth Card

A card that uses 3D transforms to create a stunning parallax depth effect on hover, built entirely with HTML and CSS.

## Preview

Open `demo.html` in your browser and hover over the card to see the effect.

## Implementation Details

- **3D Transform:** Uses `perspective`, `transform-style: preserve-3d`, and `translateZ` to give elements distinct depth planes.
- **Hover Interaction:** When the card is hovered, it rotates along the X and Y axes, while child elements adjust their Z-translation to enhance the parallax illusion.
- **No JavaScript:** The interaction and parallax effect are handled completely by CSS `:hover` states and transitions.
