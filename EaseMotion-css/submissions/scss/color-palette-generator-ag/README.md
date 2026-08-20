# Color Palette Scale Generator

## Description
A utility SCSS function and mixin to automatically generate a standard 10-step color scale (50-900) from a single base color. This is extremely useful for building theme tokens efficiently without having to manually calculate or pick every shade.

## Parameters

### `ease-generate-color-scale($base-color)`
- `$base-color`: The central color (which becomes the `500` step) from which all other steps (50, 100, 200, 300, 400, 600, 700, 800, 900) are interpolated using `mix()`.

### `ease-color-scale-vars($name, $base-color)`
- `$name`: The prefix for the generated CSS custom properties (e.g., passing `"primary"` generates `--ease-primary-50` through `--ease-primary-900`).
- `$base-color`: The central color to generate the scale from.

## Usage

Include the mixin or use the function in your SCSS files to quickly build out your CSS custom properties.

```scss
// Using the mixin to output CSS variables
:root {
  @include ease-color-scale-vars("primary", #3b82f6);
  @include ease-color-scale-vars("danger", #ef4444);
}

// Or using the function to get the map directly
$my-palette: ease-generate-color-scale(#10b981);
$my-dark-shade: map-get($my-palette, 900);
```

The resulting CSS for the mixin will look like:
```css
:root {
  --ease-primary-50: #ebf2fe;
  --ease-primary-100: #d8e6fd;
  --ease-primary-200: #b0cdfa;
  --ease-primary-300: #89b3f8;
  --ease-primary-400: #629af6;
  --ease-primary-500: #3b82f6;
  --ease-primary-600: #2f68c5;
  --ease-primary-700: #234e94;
  --ease-primary-800: #183462;
  --ease-primary-900: #0c1a31;
}
```
