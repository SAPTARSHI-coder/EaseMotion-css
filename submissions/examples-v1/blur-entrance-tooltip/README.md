# Blur-Entrance Tooltip (Neumorphic Soft Layouts)

A sleek, pure CSS tooltip designed around soft, extrusion-based Neumorphic UI standards. It incorporates an architectural transition that decants background filters smoothly from a blurry state to clean readability.

## Structural Design Details
- **Hardware Accelerated Blur:** Employs the CSS `filter: blur()` property optimized alongside scale transitions for a soft, fluid appearance.
- **Pure Soft Neumorphism:** Uses opposing dark/light drop-shadow vectors to produce an extruded surface look matching the body baseline.

## Customization Control

Variables exposed inside the `:root` pseudo-class:

| Target Property | Default Settings | Implementation Purpose |
| :--- | :--- | :--- |
| `--tooltip-blur-start` | `8px` | Maximum focal blur width applied to the hidden element container |
| `--tooltip-scale-start` | `0.92` | Base scale offset factor before entrance interpolation loops |
| `--tooltip-duration` | `0.35s` | Total animation velocity loop length |