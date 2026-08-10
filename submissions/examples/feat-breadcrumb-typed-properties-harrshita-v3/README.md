# Breadcrumb CSS `@property` Typed Custom Properties

## Description
This PR introduces CSS `@property` Typed Custom Properties to the `breadcrumb` component. By registering custom properties with explicit `syntax`, `inherits`, and `initial-value` declarations, the browser gains two major capabilities:

1. **Animatable custom properties**: CSS transitions can now interpolate between custom property values (e.g., a progress counter `0 -> 75`) because the browser knows the value is a `<number>`.
2. **Safe initial values**: If a consumer forgets to set a property, `initial-value` prevents undefined/inherited behavior.

## Registered Properties
- `--ease-breadcrumb-progress` (`<number>`): Animates the width of a progress bar from 0 to 100.
- `--ease-breadcrumb-hue` (`<number>`): Animates the HSL hue across color states.
- `--ease-breadcrumb-alpha` (`<number>`): Animates opacity of radial glow overlays.

## Changes
- `style.css`: 80+ lines with `@property` declarations and animated custom property usage.
- `demo.html`: Two interactive cards demonstrating smooth custom property animation on hover.
- `README.md`: Describes the @property feature and registered properties.
\nFixes #61484\n