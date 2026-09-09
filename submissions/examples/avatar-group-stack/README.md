# Avatar Group Stack Component (CSS-Only)

A responsive, accessibly engineered profile layout designed to display overlapping item frames that smoothly expand and isolate on focus tracking states.

## Features
* **Proportional Spacing Expansion:** Combines group interaction flags (`:focus-within`, `:hover`) to natively calculate structural shifts without script layout updates.
* **GPU Context Elevation:** Handles dynamic visual layering (`z-index`) matching precise scale vectors to prevent interaction clipping loops.
* **Variable Driven Design:** Exposes structural variables (`--ease-avatar-*`) to easily configure properties like size, overlap offset depth, and transition parameters.

## Variable Reference Map

| CSS Custom Property | Default Token | Design Function |
| :--- | :--- | :--- |
| `--ease-avatar-size` | `44px` | Height and width boundary metrics. |
| `--ease-avatar-overlap` | `-14px` | Negative structural margin determining initial stacking overlap density. |
| `--ease-avatar-expand-gap` | `8px` | Positive element margin offset spacing utilized during layout expansion. |