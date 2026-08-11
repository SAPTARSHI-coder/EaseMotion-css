# Micro Interaction Button — Subtle Press Feedback

**Component:** micro-interaction-btn  
**Issue:** [#36816](https://github.com/EaseMotion-css/EaseMotion-css/issues/36816)

A set of dark-theme buttons that respond to press with a micro-animation (translate + shadow shrink). Four colour variants demonstrate the same interaction pattern.

## CSS Variables

| Variable          | Default   | Description                   |
|-------------------|-----------|-------------------------------|
| `--btn-bg`        | `#2a2a4e` | Default button background     |
| `--btn-color`     | `#e0e0e0` | Button text colour            |
| `--feedback-color`| `#7c3aed` | Focus-ring / feedback accent  |
| `--press-duration`| `0.15s`   | Duration of the press anim    |

## Behaviour

- **Press** pushes the button down 2 px and reduces shadow depth.
- **Release** returns the button to rest.
- **Focus-visible** shows a coloured outline ring.
- Hover brightens the button slightly.
