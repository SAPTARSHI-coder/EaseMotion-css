# ease-mobile-tab-bar

A mobile-style tab bar with an animated active indicator. The indicator slides between tabs with a spring-like cubic-bezier curve. The active icon lifts and scales on selection.

## Usage

Open `demo.html` in a browser. Click any tab to see the indicator slide to the selected tab.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--indicator-color` | `#4f46e5` | Active indicator bar color |
| `--indicator-height` | `3px` | Height of the indicator bar |
| `--transition-speed` | `0.3s` | Speed of indicator slide animation |

## Notes

- JavaScript sets `--indicator-left` and `--indicator-width` based on the selected tab's position
- CSS handles all visual transitions
- No external dependencies
