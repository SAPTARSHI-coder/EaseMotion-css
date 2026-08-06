# Accordion Image Gallery

A highly interactive image gallery that expands a hovered image like an accordion.

## Preview
Open `demo.html` in your browser. You will see 5 vertical image panels. Hovering over any panel causes it to smoothly expand, revealing its full width and a text label, while shrinking the others.

## Implementation
- Utilizes CSS Flexbox to control the width of the panels dynamically.
- Each `.panel` starts with `flex: 1`, ensuring they share the container width equally.
- On `:hover`, the active `.panel` gets `flex: 5`. Flexbox automatically and smoothly recalculates the widths to give the hovered element 5 times more space than its siblings.
- A `transition` on the `flex` property makes this resizing incredibly smooth.
