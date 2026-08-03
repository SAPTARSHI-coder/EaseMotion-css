# Pure CSS Animated Hexagon Grid

A tessellating honeycomb structure relying entirely on CSS masking.

## Mechanics
- Uses `clip-path: polygon()` to physically shape a standard div into a hexagon.
- Relies on negative margins and `nth-child` transforms to interlock the shapes.
- Scales up on hover to provide a dynamic pop-out effect.
