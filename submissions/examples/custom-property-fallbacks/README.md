# Custom Property Fallbacks

Explores CSS custom property fallback mechanisms using `var()`. Demonstrates single fallbacks, nested fallbacks, chained defaults, and theme-driven property overrides with four themes.

## Usage

Open `demo.html` and click the theme buttons (Default, Ocean, Forest, Sunset) to see how redefining custom properties changes the UI. The fallback cards show how `var()` resolves when properties are undefined.

## Browser Support

CSS custom properties are supported in all modern browsers. Nested `var()` fallbacks work in Chrome 49+, Firefox 48+, Safari 10+, and Edge 15+. The dark theme uses `#0a0f1e` background with `#e2e8f0` text for consistent readability across themes.
