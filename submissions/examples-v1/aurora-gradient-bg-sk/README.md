# Aurora Gradient Background

A beautiful, shifting, animated background effect resembling the Aurora Borealis (Northern Lights).

## Files

- `demo.html`: The HTML structure for the background container and the content overlay.
- `style.css`: The CSS that generates the glowing orbs and animates their movement.
- `README.md`: This file.

## Features

- **Pure CSS:** Uses standard CSS `filter: blur()` and CSS variables to create soft, ethereal gradient layers without needing WebGL or external libraries.
- **Fluid Animation:** Uses infinite CSS `@keyframes` on absolutely positioned "orbs" to make the colors shift and blend organically.
- **Content Overlay:** Demonstrates how to layer text or content cleanly on top of the animated background using relative z-indexing.

## Usage

Create an `.aurora-bg-container` wrapper with `overflow: hidden`. Inside, place your `.aurora-orb` elements, followed by a `.content` element holding your actual site data.
