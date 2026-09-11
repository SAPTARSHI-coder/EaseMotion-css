# Image Mask Wipe (#87552)

An interactive media reveal component where images animate into view through an expanding circular clip-path mask.

## Features
- **Circular Mask Expansion:** Utilizes CSS `clip-path: circle()` with hardware-accelerated transitions.
- **Interactive Triggers:** Supports both hover state reveals and manual toggle triggers.
- **Responsive Media Card:** Aspect-ratio locked image frame with modern overlay text and badge styling.
- **Accessibility:** Includes full `@media (prefers-reduced-motion: reduce)` support.

## Usage
Include `style.css` and wrap your target image inside the `.mask-wipe-container`.