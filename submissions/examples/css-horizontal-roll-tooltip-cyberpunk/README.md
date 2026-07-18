# CSS Horizontal Roll Tooltip — Cyberpunk Neon Layouts

A high-fidelity pure CSS responsive tooltip module utilizing horizontal 3D rotation steps, back-bounce spring calculations, and distinct custom layout variables.

## Specifications
- **Mechanical Physics**: Directs spatial elements horizontally along Y-axis bounds utilizing back-overshoot properties (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).
- **Declarative Operations**: Exposes configurations like movement speeds, rotation thresholds, and padding constants via global custom variables.
- **Hardware Layering**: Offloads the entire 3D horizontal roll movement path inside GPU compositor loops (`rotateY()`) to shield system resources from layout redraw hits.