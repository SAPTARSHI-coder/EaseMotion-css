# CSS Hover-triggered Expanding Grid Cards

An interactive grid layout where hovering over a specific card smoothly expands its size using CSS Flexbox transitions, while adjacent cards dynamically adjust.

## Preview
Open `demo.html` in your browser. Hover over any of the image cards to see it expand smoothly while the others shrink, revealing its inner content.

## Implementation
- Uses Flexbox on a `.expanding-grid` container.
- Each `.grid-card` starts with `flex: 1`.
- When a card is hovered (`.grid-card:hover`), it transitions to `flex: 3`.
- A background overlay and content smoothly fade in and translate up as the card expands using CSS transitions.
