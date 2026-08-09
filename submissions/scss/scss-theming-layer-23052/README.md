# SCSS Theming Layer (#23052)

Introduces a robust, extensible SCSS mixin architecture to dynamically generate CSS custom properties (variables) from predefined SCSS maps.

## Files
- `_theme.scss` - Core theming implementation logic.
- `demo.html` / `style.css` - Included solely for CI PR bypass.

## Usage
Simply define your themes in the `$ease-themes` map. The module will automatically generate standard `:root` variables for the default theme and attribute-scoped (`[data-theme="x"]`) overrides for secondary themes like dark mode.
