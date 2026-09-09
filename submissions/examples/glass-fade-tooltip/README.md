# Glassmorphism Fade-In Tooltip (Pure CSS)

A zero-JS tooltip with a smooth fade + scale-in transition, styled with a frosted-glass aesthetic.

## Usage
Wrap your trigger element and tooltip text as shown in `demo.html`.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --tooltip-duration | Fade/scale transition speed | 250ms |
| --tooltip-easing | Transition easing | ease-out |
| --tooltip-scale-from | Starting scale before fade-in | 0.9 |
| --tooltip-blur | Glass blur intensity | 12px |
| --tooltip-bg / --tooltip-border | Glass color/border | see style.css |
| --tooltip-offset | Gap between trigger and tooltip | 10px |

## Accessibility
- Tooltip shows on `:hover`, `:focus`, and `:focus-within` (keyboard support)
- Uses `role="tooltip"` and `aria-describedby`
- Visible focus ring via `:focus-visible`