# Variable Font Animation

## What

A CSS-driven variable font animation demo using Google Fonts' Inter variable font. Large headings animate through font-weight (100–900), font-width (75–100), and slant (0–12 degrees) in continuous, overlapping loops. Interactive sliders let you manually override each axis to explore the typographic range.

## How

The page loads Inter from Google Fonts with the `wght`, `wdth`, and `slnt` axes enabled. Three `@keyframes` sequences drive each axis independently with different durations and easings. The main heading uses `font-variation-settings` to compose all three animated axes. Range inputs (type="range") are bound via JavaScript `input` events to pause the animation and set fixed values when moved; releasing a slider (or clicking a "Resume" button) restarts the animation from the current position.

## Why

Variable fonts let a single file express a whole type system, reducing network requests while enabling fluid typographic motion. This demonstration shows how `font-variation-settings` works in practice, how CSS animations can drive multiple axes simultaneously, and how user controls can bridge automated animation and manual exploration.
