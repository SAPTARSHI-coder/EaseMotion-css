# CSS Color-Mix Utility Classes

This submission adds CSS utility classes leveraging the native CSS `color-mix()` function to dynamically create palettes and adjust opacity/tones in the browser.

## Bug / Feature Description
Traditionally, developers used SASS functions like `lighten()`, `darken()`, and `mix()` to generate color palettes. However, this required compilation, meaning it couldn't react to dynamic CSS custom variables (e.g., user-defined themes). `color-mix()` runs in the browser, allowing real-time palette generation from CSS variables.

## Fix / Implementation Details
- Added `.ease-bg-tint-*` classes to mix a brand variable with white (10% to 90%).
- Added `.ease-bg-shade-*` classes to mix a brand variable with black (10% to 90%).
- Added `.ease-bg-mix-oklch-*` classes to demonstrate interpolating between two dynamic CSS variables using the perceptually uniform `oklch` color space.
- Added `.ease-text-muted-mix` which ingeniously uses `color-mix(in srgb, currentColor 50%, transparent)` to create muted text regardless of the parent background color.

## How to Test
1. Open `demo.html` in your browser.
2. View the generated palettes (Tints and Shades). Notice how a single brand color variable dynamically generates 10 different swatches natively.
3. Observe the smooth interpolation in the OKLCH section.
4. Check the "Dynamic Text Muting" box to see how `currentColor` is manipulated.
