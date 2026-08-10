# Grid Item Pop

Grid items pop in with a scale and opacity animation on page load. Staggered delays create a cascading entrance effect.

## Features

- Scale (0 to 1) and opacity animation
- Staggered delay for cascading entrance
- Customizable duration, stagger delay, and border radius via CSS custom properties
- Triggered by adding `.gip-visible` class to the grid container

## Usage

Add `.gip-item` children inside a `.gip-grid` container. On `DOMContentLoaded`, add `.gip-visible` to the grid to trigger the staggered pop animation.
