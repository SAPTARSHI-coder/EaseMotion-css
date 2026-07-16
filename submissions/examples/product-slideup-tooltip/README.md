# Product Catalog Slide-Up Tooltip (CSS-Only)

An optimized, highly configurable pure-CSS slide-up tooltip component engineered specifically for high-density layouts such as product catalogs.

## Features
* **Zero JS Footprint:** Operates natively without script intervention using clean pseudo-interaction flows.
* **Fully Parameterized:** Timing, distance tracking offsets, and color parameters are fully controlled via native CSS variables (`--ease-tooltip-*`).
* **Accessible Foundation:** Integrates full focus mapping mechanisms (`:focus-within`) alongside implicit screen-reader state mapping.

## Configurable Variables
Modify global or contextual values inside your architecture mapping layer:

| Property | Default Value | Role |
| :--- | :--- | :--- |
| `--ease-tooltip-duration` | `0.35s` | Defines interaction pacing. |
| `--ease-tooltip-easing` | `cubic-bezier(...)` | Dictates physics curve. |
| `--ease-tooltip-translate-y` | `15px` | Sets structural baseline acceleration offset distance. |