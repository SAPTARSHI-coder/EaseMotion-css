# Isometric 3D Social Menu

A sleek, 3D isometric navigation menu built purely with CSS. Hovering over each item slides it out and applies a custom brand color across its 3-dimensional faces to create a deep, layered effect.

## Features
- Pure CSS implementation
- Uses CSS `transform: skewX()` and `skewY()` to create isometric projections
- Dynamic hover state with precise 3-dimensional color shading
- Easily customizable for any set of links or colors

## Usage
Simply drop the HTML structure and CSS into your project. The `var(--i)` inline styles in the HTML are crucial as they control the CSS `z-index`, ensuring the stacked elements overlap correctly. Modify the `:nth-child` selectors in the CSS to add or change platform colors.
