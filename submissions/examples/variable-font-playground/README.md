## What It Does

Explores variable font axis animation using `font-variation-settings` and `@keyframes`. Demonstrates weight (`wght`) pulsing from 100 to 900, width (`wdth`) oscillation from 75 to 125, slant (`slnt`) toggling between 0 and -10, and a combined morph across all three axes. Hover effects transition axes smoothly. A comparison section contrasts a static font weight with a variable font weight.

## Key Features

- `@keyframes` animate `font-variation-settings` for wght, wdth, and slnt axes independently
- Combined morph keyframes animate all three axes with different timings
- Hover-driven transitions on `font-variation-settings` for interactive weight, width, and slant
- Static vs variable font comparison using Inter (static) and Roboto Flex (variable)
- Google Fonts loaded via `@import` for the variable font
- Fully respects `prefers-reduced-motion`

## Usage Notes

Open `demo.html` with an internet connection for Google Fonts to load. The Roboto Flex font supports the `slnt`, `wdth`, and `wght` axes used in this demo. Requires a browser with variable font support (all modern browsers).
