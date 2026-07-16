# ease-hook-effect-animation

A CSS hook-sweep animation for cards that slides a color fill in from the top on hover with a satisfying overshoot spring effect.

## Usage
Open demo.html in a browser. Add the `.ease-hook-card` class to any card element. The animation triggers on hover.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --hook-color | #8b5cf6 | Primary fill color |
| --hook-shadow | rgba(139,92,246,0.35) | Hover shadow color |
| --hook-bg | #ffffff | Card background |
| --hook-speed | 0.4s | Animation duration |

## Notes
Uses a `::before` pseudo-element with `top` transition and `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring easing) to create the hook overshoot feel.
