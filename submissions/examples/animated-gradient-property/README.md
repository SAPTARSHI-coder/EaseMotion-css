# @property Animated Gradient Mesh

## Summary
Uses the CSS `@property` at-rule to register custom properties with explicit `<color>` syntax, enabling smooth gradient color transitions in keyframes.

## Key Concepts
- **`@property`** registers a custom property so the browser understands its type. Unregistered custom properties are treated as substitution-time strings and cannot be animated.
- **`syntax: "<color>"`** tells the browser the property holds a color value, permitting interpolation during animation.
- **`inherits: false`** prevents the gradient colors from leaking into child elements.
- **`initial-value`** sets the default color before any animation runs.

## Usage
Override the four `--gradient-color-*` custom properties in your keyframes to create custom color-cycling gradient meshes.
