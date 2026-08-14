# Chart Bar Grow Animate

Bar chart with bars that grow from bottom on load using CSS transitions. JavaScript sets inline heights with staggered delays for a sequential reveal effect.

## Features

- Bars grow from bottom with `cubic-bezier` easing
- Staggered animation via JS `setTimeout` delays
- Seven distinct colored bars
- Labels below each bar
- Google Fonts Inter integrated

## Usage

Add `data-height` (percentage 0–100) to each `.cbg-bar`. The JS script reads the attribute and sets `style.height` on load with a staggered delay.
