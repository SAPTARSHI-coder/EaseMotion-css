# Sticky Stacking Cards Scroll Effect

A sleek scrolling effect where cards stick to the top of the viewport and layer perfectly over one another as you scroll down.

## Preview
Open `demo.html` in your browser. Scroll down the page. As each card hits the top of the screen, it will "stick" in place, and the next card will slide over top of it.

## Implementation
- Utilizes the powerful CSS `position: sticky` property.
- When a card reaches its `top` threshold relative to the viewport, it stops scrolling.
- By slightly staggering the `top` values (50px, 70px, 90px...), each subsequent card sticks slightly lower than the one before it, creating a layered stacking deck effect.
