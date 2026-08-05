# Button CSS `color-mix()` Dynamic Theming

## Description
This PR introduces the modern CSS `color-mix()` function to the `button` component. This powerful native CSS capability eliminates the need to hard-code dozen of hex values for hover, active, light, and border color variants. 

Instead, you define a single `--ease-base-color`, and the component dynamically calculates all its interactive states and translucent surfaces by mixing the base color with black, white, or transparent.

## Key `color-mix()` Features
- `color-mix(in srgb, var(--color) 85%, black)`: Computes perfect hover states.
- `color-mix(in srgb, var(--color) 15%, transparent)`: Computes perfect soft backgrounds for badges/alerts.
- `color-mix(in srgb, var(--color) 90%, white)`: Computes brightened text highlights.
- Changing a theme now requires updating exactly **one** CSS variable instead of five.

## Changes
- `style.css`: 70+ lines demonstrating dynamic state calculation via `color-mix()`.
- `demo.html`: 3-card demo showing Emerald, Rose, and Amber themes generated entirely by overriding a single variable.
- `README.md`: Describes the feature and math involved.
\nFixes #56110\n