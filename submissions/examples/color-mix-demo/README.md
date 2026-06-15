## What

This example demonstrates the CSS `color-mix()` function, which blends two colors in a specified color space. Two interactive color pickers let you choose source colors, and a slider controls the mix ratio. The results are displayed as swatch cards across five color spaces: `srgb`, `srgb-linear`, `hsl`, `lch`, and `oklch`, showing how the same mix ratio produces different intermediary colors depending on the interpolation space.

## How

The page uses two `<input type="color">` pickers and a range slider to capture user input. A JavaScript function reads the hex values, converts them to RGB components, and interpolates each channel to simulate the mix at 0%, 25%, 50%, 75%, and 100% blend ratios. The resulting swatches are rendered into five separate grids, each labeled by color space. The CSS snippet area updates dynamically to show the equivalent `color-mix()` declarations for each space.

## Why

`color-mix()` eliminates the need for preprocessors or JavaScript math to blend colors. By choosing different color spaces, developers can achieve more perceptually uniform gradients and avoid the gray desaturation that occurs when mixing in the default `srgb` space. Understanding how interpolation varies by color space (e.g. `oklch` preserves chroma better than `srgb`) helps designers make informed decisions for themes, gradients, and palette generation.
