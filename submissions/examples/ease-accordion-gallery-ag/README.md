# Accordion Image Gallery

A flex-based image gallery where hovering over an image smoothly expands it while contracting the others, acting like an accordion.

## Preview

Open `demo.html` in your browser and hover over the different image panels to see the accordion effect.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the `:hover` pseudo-class.
- **Flexbox Magic:** The gallery container uses `display: flex`. Each image panel is given a baseline `flex: 1` property. When hovered, the panel's `flex` property transitions to `4`, causing it to smoothly expand and take up more space while the others naturally shrink.
- **Fade In Content:** The text content and gradient overlay inside each panel are initially hidden and fade in on hover using CSS `opacity` and `transform` transitions.
