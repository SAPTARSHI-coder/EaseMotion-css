# will-change Animation Budget Demo

Side-by-side comparison of 25 animated elements using `margin-top` (layout) vs `transform: translateY` + `will-change: transform` (compositor-only).

## Classes

| Class | Role |
|---|---|
| `ease-panel` | Ball grid container |
| `ease-panel-layout` | Left panel — always uses layout-triggering `margin-top` |
| `ease-panel-compare` | Right panel — switches to `transform + will-change` when `#optimise` is checked |
| `ease-ball` | Individual animated element |

## How it works

`#optimise:checked ~ .panels .ease-panel-compare .ease-ball` is a pure CSS selector that switches the right panel's animation from `float-layout` (margin-top) to `float-transform` (transform) and adds `will-change: transform`. No JS state management — the checkbox state drives both the CSS change and the label update.

**Why it matters:**
- `margin-top` → triggers layout recalculation every frame on every sibling
- `transform` with `will-change` → runs on the GPU compositor, skips layout and paint entirely

Closes #9613
