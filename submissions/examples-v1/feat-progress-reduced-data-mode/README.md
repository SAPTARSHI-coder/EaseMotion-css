# Progress Battery & Data Saver Optimization

## Description
This PR adds native support for `@media (prefers-reduced-motion)` and `@media (prefers-reduced-data)` to the `progress` component. When users are on low battery or metered connections, this strips expensive CSS paints (gradients, shadows) and disables animations to save GPU cycles and comply with WCAG 2.2.2.

## Usage
Include the component as usual. It automatically reacts to OS-level Battery Saver or Accessibility settings.

## Changes
- `style.css`: 60+ lines adding media query performance fallbacks.
- `demo.html`: Demo testing layout.
- `README.md`: Describes the feature.
\nFixes #54946\n