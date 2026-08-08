# Breadcrumb Forced Colors Mode Optimization

## Description
Applies a `@media (forced-colors: active)` query block to the `breadcrumb` component. This ensures that the component remains fully accessible and visually distinct when users enable operating-system level high-contrast themes (like Windows High Contrast).

## Usage
Include the component as usual. When the user enables a forced color theme, the browser automatically applies the media query overrides, mapping properties to system colors like `Canvas`, `CanvasText`, and `Highlight`.

## Changes
- `style.css`: 60+ lines of code adding forced-colors media queries.
- `demo.html`: Demo testing layout for high contrast.
- `README.md`: Describes fix.
\nFixes #53692\n