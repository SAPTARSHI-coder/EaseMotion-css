# SaaS Showcase Fade-In Tooltip (Pure CSS)

A zero-JS tooltip with a clean fade + scale-in transition, styled for modern SaaS product UIs.

## Usage
Wrap your trigger element and tooltip text as shown in `demo.html`.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --tooltip-duration | Fade/scale transition speed | 200ms |
| --tooltip-easing | Transition easing | ease-out |
| --tooltip-scale-from | Starting scale before fade-in | 0.95 |
| --tooltip-bg | Tooltip background | #1e293b |
| --tooltip-text | Tooltip text color | #f8fafc |
| --tooltip-accent | Brand/button accent color | #6366f1 |
| --tooltip-offset | Gap between trigger and tooltip | 10px |

## Accessibility
- Tooltip shows on `:hover`, `:focus`, and `:focus-within` (keyboard support)
- Uses `role="tooltip"` and `aria-describedby`
- Visible focus ring via `:focus-visible`