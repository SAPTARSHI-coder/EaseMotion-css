# Skew-Active Accordion Component

A lightweight, pure CSS accordion module that applies a subtle angular skew transformation to active expanding panels while keeping text elements perfectly unskewed and readable.

## Features
- **Pure CSS/HTML**: Powered entirely by radio input state handling with zero JavaScript dependencies.
- **Accessibility Included**: Fully supports keyboard navigation and respects `prefers-reduced-motion` user preferences.
- **Responsive**: Clean layout adaptation across desktop, tablet, and mobile viewports.

## Customization Parameters
The following `:root` properties are exposed in `style.css`:
- `--skew-angle`: Sets the angular skew angle applied to active items.
- `--accordion-transition-duration`: Controls accordion slide and transform timing.
- `--accordion-easing`: Easing curve driving the fluid open/close interaction.