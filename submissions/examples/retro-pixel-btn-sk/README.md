# Retro 8-bit Pixel Button

A chunky, nostalgic button perfect for retro, Web3, or gaming interfaces.

## Files
- `demo.html`: The HTML structure for the pixel button.
- `style.css`: The massive CSS `box-shadow` calculation that draws the 8-bit border.
- `README.md`: This file.

## Features
- **Pure CSS:** No images or SVGs used. The pixelated border is drawn entirely using stacked `box-shadow` values.
- **Infinite Scalability:** Because it's CSS, the "pixels" scale perfectly without raster blur.
- **Interactive:** Features a chunky `:active` state that presses the button down.

## Usage
Add the `.retro-pixel-btn` class to your button. The button's "pixel size" is derived from the box-shadow offsets, which are based on a base pixel size of `4px`.
