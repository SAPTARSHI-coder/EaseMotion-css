# Glowing Material Design Tab Bar

A minimalist, pure CSS mobile tab navigation bar adhering to Material Design principles while introducing a sleek glowing indicator.

## Features
- **Pure CSS State Management**: Uses the hidden `<input type="radio">` hack in combination with CSS Sibling Selectors (`~`) to animate the active tab indicator without relying on Javascript.
- **Material Motion**: All animations (`transform`, `color`) utilize the authentic Material Design standard easing curve `cubic-bezier(0.4, 0, 0.2, 1)` for a snappy, fluid physical feel.
- **Glowing Indicator**: The active tab features a top-aligned indicator line that casts a soft, colored drop-shadow, giving it a subtle neon glow effect against the dark surface.
- **Dark Mode Native**: Designed utilizing Material Dark surface (`#1e1e1e`) and background (`#121212`) colors.
- **Scalable**: The tab indicator's width is dynamically calculated using a CSS variable (`--tab-count`), making it extremely easy to add or remove tabs without complex math.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Roboto` font is loaded in your `<head>`. If you change the number of tabs, simply update the `--tab-count` variable in the `:root` of the CSS file.
