# Minimalist Tech Staggered Modal (Pure CSS)

A clean, high-fidelity modal animation configuration matching minimalist utility backdrops.

## Features
* ⚡ **Zero JS Cascading System:** Multiplied item step delays mapped natively to the CSS URL `:target` trigger hook.
* 🧼 **Minimal Architecture Layout:** Leverages modern system fonts, crisp borders, and subtle shadow systems.
* 🎛️ **Exposed Custom Parameters:** Control animation durations and step gaps dynamically using global variables.

## Configuration Parameters
| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--stagger-delay-step` | Controls the chronological time interval between component waves. | `0.08s` |
| `--stagger-item-duration` | Determines the snap velocity of content groups. | `0.5s` |
| `--stagger-easing` | Premium mathematical smooth-out deceleration vector. | `cubic-bezier(0.16, 1, 0.3, 1)` |