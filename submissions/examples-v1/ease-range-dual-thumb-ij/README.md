# Range Dual Thumb

A dual-thumb range slider for selecting a min/max value range. CSS handles the fill position and thumb positions via `--range-min` and `--range-max` custom properties.

## Features

- Two draggable thumbs for min and max selection
- Fill highlight between the thumbs
- Positions driven by `--range-min` and `--range-max` CSS variables
- Labels update with current values
- Horizontal track with grab interaction

## Usage

Include `style.css` and structure with `.range-track`, `.range-fill`, and two `.range-thumb` elements. JS sets `--range-min` and `--range-max` on drag.
