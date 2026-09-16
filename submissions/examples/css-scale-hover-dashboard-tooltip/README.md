# CSS Scale-Hover Tooltip (Responsive Dashboard Layouts)

A pure CSS, hardware-accelerated tooltip leveraging a smooth scale-up transition upon focus or hover. Designed to blend seamlessly into dense, asset-heavy analytical dashboards, it enables quick micro-interactions with zero JavaScript overhead.

## Features
- **Fluid Scale Elasticity:** Utilizes explicit transform scaling accompanied by dynamic cubic-bezier presets to generate an elegant zoom expansion effect.
- **Dashboard Optimized:** Clean UI footprint styled specifically for metrics cards, status indicators, and complex data grid layouts.
- **Full A11y Support:** Leverages sequential focus catching via `:focus-within` and structural `tabindex="0"` bindings for seamless keyboard use.

## Custom Properties
Configure or modify these tokens inside `style.css` to manage implementation footprints:
- `--tooltip-scale-duration`: Speed of the zoom expansion frame (default: `0.25s`).
- `--tooltip-scale-easing`: Custom spring curve physics parameters (default: `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- `--tooltip-initial-scale`: Starting transform scale boundary before hover/focus acceleration (default: `0.5`).