# Hover Reveal Card

A card that reveals hidden information with a smooth slide-up animation when hovered.

## Preview

Open `demo.html` in your browser and hover over the card to see the content slide up.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the `:hover` pseudo-class.
- **Transform Animation:** The card image scales up and moves up slightly on hover. At the same time, the hidden content container translates upwards from below the visible bounds.
- **Staggered Content:** Inside the content area, the description text and the button use `transition-delay` to fade in sequentially after the main container slides up.
