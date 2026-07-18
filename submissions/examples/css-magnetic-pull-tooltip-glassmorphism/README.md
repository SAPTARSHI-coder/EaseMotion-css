# CSS Magnetic Pull Tooltip — Glassmorphism UI Layouts

A fluid pure CSS responsive tooltip module utilizing magnetic translation dynamics, frosted glass backings, and performance-isolated composite layout variables.

## Specifications
- **Mechanical Physics**: Simulates gravity and magnetic pulls by moving the button upward while lowering the tooltip to join in space smoothly using elastic variables (`cubic-bezier(0.25, 1.25, 0.5, 1)`).
- **Declarative Operations**: Houses core layouts (timing channels, blur metrics, initial/target scales) natively within global custom properties.
- **Hardware Layering**: Confines translation and scale transformations entirely inside GPU hardware compositor lanes to preserve clean repainting performance. 