# Arm Robot Loading

An animated robot arm performing a pick-and-place operation on a conveyor belt.

## Features

- Multi-joint arm rotation animation
- Conveyor belt scrolling effect
- Gripper open/close motion
- Stage-based replayable sequence

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--arl-duration` | `0.6s` | Animation duration |
| `--arl-arm-color` | `#94a3b8` | Arm segment color |
| `--arl-base-color` | `#475569` | Robot base color |
| `--arl-grip-color` | `#64748b` | Gripper claw color |
| `--arl-belt-color` | `#1e293b` | Belt stripe color |

## Usage

```html
<div class="arl-stage">
  <div class="arl-robot">...</div>
  <div class="arl-belt"></div>
</div>
```

Call `playCycle()` or click **Play** to start the sequence.
