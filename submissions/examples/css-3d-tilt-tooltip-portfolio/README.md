# CSS 3D Perspective Tilt Tooltip — Creative Portfolio Layouts

A premium pure CSS responsive tooltip module implementing 3D orientation projection, configurable tilt bounds, and hardware-accelerated composition layers.

## Specifications
- **Mechanical Physics**: Blends multi-axis orientation projections with cubic spring limits (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to settle popup content elegantly.
- **Declarative Operations**: Houses core variables (durations, perspectives, active tilt angles, and scale margins) natively inside global CSS custom properties.
- **Hardware Layering**: Anchors the tilt trajectory completely on device compositor tracks (`rotateX()`, `rotateY()`) to preserve clean repaint cycles.