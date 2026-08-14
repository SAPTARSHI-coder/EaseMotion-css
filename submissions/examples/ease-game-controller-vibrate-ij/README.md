# Game Controller Vibrate — Rumble Animation (#36681)

An interactive game controller that vibrates with a rumble effect on click.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--controller-color` | `#2a2a35` | Base color of the controller body |
| `--vibrate-intensity` | `4px` | Maximum displacement during vibration |
| `--rumble-duration` | `0.6s` | Duration of one rumble cycle |
| `--accent-color` | `#7c5cbf` | Accent color for buttons and indicators |

## Behavior

- Click the controller SVG to trigger the rumble animation.
- Two simultaneous keyframe sets: a translate shake on the wrapper and a combined translate + rotate on the SVG.
- The "RUMBLE!" label fades in during the animation.
- Animation can be re-triggered on each click via a reflow force.
