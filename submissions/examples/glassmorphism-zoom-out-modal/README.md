# Glassmorphism Zoom-Out Modal (Pure CSS)

A pure CSS-driven interactive Modal component built featuring a glassmorphic user interface structure and an elegant Zoom-Out window activation sequence. 

## Features
- **Zero JavaScript:** Relies natively on the CSS `:target` pseudo-class for handling modal view states.
- **Glassmorphic Presentation:** Features beautiful back-layer distortion utilizing `backdrop-filter` blended over structural element boundaries.
- **Responsive Architecture:** Flexibly scales layout proportions down fluidly to support mobile screens.
- **Custom CSS Variables:** Exposes global configuration variables for sizing scaling parameters, timings, and blur constraints directly from the `:root` level.

## How to Customize
Modify values within the `:root` block inside `style.css`:
- `--modal-transition-duration`: Alters transition execution speed.
- `--modal-start-scale`: Sets the initial zoom-out scale factor (e.g., `1.3` scaling down to `1`).
- `--glass-blur`: Increases or reduces backdrop pixel diffusion.