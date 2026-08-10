# SCSS Fluid Typography Clamp Generator (ease-fluid-viidhii19)

EaseMotion utilizes static sizing utilities. Managing multiple media queries for typography and padding is tedious. Modern CSS relies on `clamp()` for fluid scaling across viewports, but the math required to generate the slope is highly complex.

This SCSS utility abstracts the fluid scaling math. A developer inputs minimum size, maximum size, min-viewport, and max-viewport, and the SCSS outputs a mathematically perfect `clamp()` function.

## How It Works (The Math)

The `ease-fluid-clamp-viidhii19` function calculates the exact linear interpolation between two values across a specific viewport range using CSS `clamp()`.

The slope (rate of change) is calculated using the standard mathematical formula:
`slope = (max-size - min-size) / (max-vw - min-vw)`

Then, the intersection (y-intercept at `0vw`) is calculated to position the scaling accurately:
`y-intercept = min-size - (min-vw * slope)`

Finally, it compiles these calculations into a CSS string:
`clamp([min-size], [y-intercept]rem + [slope * 100]vw, [max-size])`

## Usage Examples

Import the mixin and use it to generate responsive `.ease-text-fluid` utility classes or custom fluid padding/margins without manual media queries.

```scss
@import 'ease-fluid-viidhii19';

// Using EaseMotion variables for fluid typography
// Scales font-size dynamically between sm and xl based on viewport bounds
.ease-text-fluid {
  @include ease-fluid-text-viidhii19($ease-size-sm, $ease-size-xl);
}

// Or use the function directly for other properties with EaseMotion spacing tokens
.ease-padding-fluid {
  padding: ease-fluid-clamp-viidhii19($ease-spacing-sm, $ease-spacing-lg, $ease-bp-mobile, $ease-bp-desktop);
}
```
