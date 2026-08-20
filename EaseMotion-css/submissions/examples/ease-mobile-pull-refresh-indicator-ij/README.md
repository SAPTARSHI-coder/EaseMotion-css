# mobile-pull-refresh-indicator

A lightweight, gesture-driven pull-to-refresh component with a CSS-powered spinner indicator.

### Features

| Feature | Description |
|---------|-------------|
| Drag Gesture | Mouse and touch support with smooth progress tracking |
| Spinner Indicator | Circular spinner that rotates proportionally to pull distance |
| Threshold Trigger | Configurable threshold triggers refresh animation on release |
| Status Feedback | Text states guide the user through pull, release, and refresh phases |

### Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--pull-transition-duration` | `0.3s` | Duration of the content and spinner transition |
| `--pull-spinner-color` | `#3b82f6` | Color of the spinner's active border segment |
| `--pull-threshold` | `80` | Pull distance in pixels required to trigger refresh |
| `--pull-bg` | `#f8fafc` | Background color of the pull container |

### How to Use

1. Include `style.css` in your page.
2. Structure your HTML with a `.pull-container`, `.pull-header` (containing `.pull-spinner` and `.pull-status`), and `.pull-content`.
3. Copy the JavaScript into your script to handle drag/touch events and set `--pull-progress` on the document root.
4. Adjust the `--pull-threshold` custom property or the `THRESHOLD` JS constant to change the sensitivity.
5. Customize colors and timing via the custom properties in `:root`.
