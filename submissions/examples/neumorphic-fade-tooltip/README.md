# Neumorphic Soft Fade-In Tooltip (Pure CSS)

A zero-JS tooltip with a soft fade + scale-in transition, styled with a neumorphic (soft UI) aesthetic using dual-direction shadows.

## Usage
Wrap your trigger element and tooltip text as shown in `demo.html`.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --tooltip-duration | Fade/scale transition speed | 220ms |
| --tooltip-easing | Transition easing | ease-out |
| --tooltip-scale-from | Starting scale before fade-in | 0.94 |
| --tooltip-bg | Base surface color | #e0e5ec |
| --shadow-light | Light-direction shadow | #ffffff |
| --shadow-dark | Dark-direction shadow | #a3b1c6 |
| --tooltip-offset | Gap between trigger and tooltip | 12px |

## Accessibility
- Tooltip shows on `:hover`, `:focus`, and `:focus-within` (keyboard support)
- Uses `role="tooltip"` and `aria-describedby`
- Visible focus ring via `:focus-visible`