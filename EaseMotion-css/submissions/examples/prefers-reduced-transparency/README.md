# prefers-reduced-transparency

## Summary
Demonstrates the `prefers-reduced-transparency` media query for accessibility, with glassmorphism effects that gracefully degrade to solid backgrounds when transparency is reduced.

## Key Concepts
- **`@media (prefers-reduced-transparency: reduce)`** detects when the user has enabled the OS-level "Reduce transparency" setting, allowing you to provide solid alternatives to glass and blur effects.
- **Glassmorphism** uses `backdrop-filter: blur()` and semi-transparent `rgba()` backgrounds. These can cause readability issues for users who prefer reduced transparency.
- **Fallback approach** removes `backdrop-filter`, sets fully opaque `background`, and adds visible borders so content remains distinguishable.

## Usage
Define your glass effects normally, then wrap solid fallback styles in `@media (prefers-reduced-transparency: reduce)`. Remove `backdrop-filter`, replace translucent backgrounds with opaque ones, and ensure adequate contrast.
