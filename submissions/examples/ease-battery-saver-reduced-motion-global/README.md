# Global Battery Saver & Reduced Motion Support (`ease-battery-saver-reduced-motion-global`)

Adds global `@media (prefers-reduced-motion: reduce)` and `@media (prefers-reduced-data: reduce)` rules across components to ensure WCAG 2.2.2 compliance and low-power performance optimization.

## Features
- **Instant Motion Reduction:** Disables heavy transforms, infinite keyframe spins, and layout motion when requested by operating system preferences.
- **Battery Optimization:** Strips GPU-intensive `backdrop-filter` and heavy multi-layered `box-shadow` paints in low-data / low-power modes.

## Usage
Import these media rules into your stylesheet to enforce global performance overrides for UI components.