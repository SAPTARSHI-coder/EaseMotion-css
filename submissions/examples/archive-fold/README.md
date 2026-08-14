# Archive Fold Component (CSS-Only)

A highly tactile, responsive interface option designed using CSS 3D transforms (`rotateX` and `translate3d`) to simulate structural folder opening states.

## Features
* **Z-Axis Matrix Layering:** Relies on structural `transform-style: preserve-3d` allocations to allow nested components to burst forward smoothly on hover.
* **Decoupled Paint Channels:** Runs all key component tracking steps along hardware-accelerated transform lines, protecting core document trees from thread stalling.
* **Unified State Triggers:** Melds pointer interactions together with custom document states (`:focus-within`), securing equal animation stability across all device profiles.

## Variable Configuration Mapping

| Custom CSS Parameter Token | Default Frame Property | Context Assignment |
| :--- | :--- | :--- |
| `--ease-folder-base-color` | `#e2e8f0` | Surface styling assigned to back component panels. |
| `--ease-folder-duration` | `0.45s` | Pacing matrix constraints for panel rotations. |
| `--ease-folder-curve` | `cubic-bezier(...)` | Velocity profile map applied to card micro-movements. |