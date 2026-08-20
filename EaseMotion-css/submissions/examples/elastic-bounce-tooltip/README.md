# Elastic Bounce Tooltip (Dashboard Analytics Layouts)

A zero-JavaScript, highly performant tooltip solution engineered with a custom cubic-bezier animation frame mimicking an organic elastic bounce. Intended for data-dense analytical user interfaces.

## Features
- **Pure CSS Execution:** Zero runtime overhead or dependency injection.
- **Parametric Architecture:** Exposes key customization metrics through standard CSS custom properties (`:root`).
- **A11y Compliant:** Supports fully compliant focus state triggering via keyboard navigation (`:focus-within`) mapped alongside semantic `aria` roles.

## Parameters for Adjustment

You can tweak the variables located inside the `:root` pseudo-class in `style.css` to scale layout dynamics:

| CSS Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--tooltip-duration` | `0.4s` | Length of time to complete the deployment loop |
| `--tooltip-easing` | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Physics curve giving the elastic snapping signature |
| `--tooltip-scale-start` | `0.3` | The entry-scale coefficient prior to expansion |