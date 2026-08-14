# Interactive CSS-Only Star Rating Widget

A fully interactive 5-star rating component built entirely with CSS, requiring zero JavaScript. It seamlessly handles hover states, selected states, and animations.

## Features
- **No JavaScript:** Uses hidden radio buttons, `flex-direction: row-reverse`, and the general sibling selector (`~`) to handle the logic.
- **Interactive Hover:** Hovering over a star highlights it and all previous stars. Hovering temporarily overrides the selected rating visually.
- **Animations:** Includes smooth color transitions and a fun `scale` pop animation when a star is selected.
- **Accessible:** Uses native radio inputs and includes focus-visible outlines for keyboard navigation.

## How it works
1. **The HTML:** We use 5 radio inputs grouped by name, paired with labels. Crucially, they are ordered from 5 down to 1 in the HTML.
2. **The Magic:** We use `display: flex` and `flex-direction: row-reverse` on the container. This makes the stars visually appear 1 to 5 from left to right, but DOM-wise, 5 is first and 1 is last.
3. **The Logic:** Because of this reversed DOM order, we can use the `~` general sibling selector to target a hovered/checked star *and all stars with a lower rating* (since they come *after* in the DOM).
