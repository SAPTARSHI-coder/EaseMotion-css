# Split Flap

A pure CSS and HTML split flap display, the leaves toppling over their axles in sequence the way an old departure board reshuffles.

## What it shows

- Real 3D flaps: each leaf rotates on rotateX inside a perspective cell, hinged at its bottom edge, so it topples forward rather than just sliding
- backface-visibility hiding the leaf as it passes the halfway point, which is what sells the swap
- The card split into a lit top half and a shadowed bottom half either side of a hard hinge line
- Cells firing on staggered delays so the board ripples left to right, with axles and a rail
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

The flapping stops under `prefers-reduced-motion: reduce`.
