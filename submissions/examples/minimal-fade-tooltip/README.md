# Minimalist Tech Fade-In Tooltip (Pure CSS)

A zero-JS tooltip with a subtle fade + scale transition, styled for clean, minimalist tech interfaces.

## Usage
Wrap your trigger element and tooltip text as shown in `demo.html`.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --tooltip-duration | Fade/scale transition speed | 180ms |
| --tooltip-easing | Transition easing | cubic-bezier(0.4, 0, 0.2, 1) |
| --tooltip-scale-from | Starting scale before fade-in | 0.97 |
| --tooltip-bg | Tooltip background | #0a0a0a |
| --tooltip-text | Tooltip text color | #fafafa |
| --tooltip-border | Tooltip border color | #262626 |
| --tooltip-offset | Gap between trigger and tooltip | 8px |

## Accessibility
- Tooltip shows on `:hover`, `:focus`, and `:focus-within` (keyboard support)
- Uses `role="tooltip"` and `aria-describedby`
- Visible focus ring via `:focus-visible`