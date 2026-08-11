# Water Clock

A pure CSS and HTML clepsydra: water drains from the upper vessel into the lower one, lifting a float whose pointer rides up the hour scale.

## What it shows

- One conserved quantity across three elements: the upper water scales down, the lower water grows and the float rises, all on the same 12s clock so the level and the pointer always agree
- A falling stream from a repeating linear gradient scrolled with background-position, with drops breaking off it
- Glass vessels from translucent gradients with brass rims, and an hour scale from a repeating linear gradient
- A float on a stem carrying a clip-path pointer up the scale
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

All motion stops under `prefers-reduced-motion: reduce`.
