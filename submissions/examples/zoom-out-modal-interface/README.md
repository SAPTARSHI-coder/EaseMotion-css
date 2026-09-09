# EaseMotion: Zoom-Out Interface Focus Modal

An elite immersive modal framework engineered specifically for complex system configuration workspaces, console panels, or simulation nodes with zero script execution locks.

## Interaction Mechanics
- **Focus Snap Mechanics**: Rather than scaling outwards from center baselines, the core container uses an inverted tracking paradigm. The modal starts oversized (`--zoom-scale-start`) and heavily blurred (`--zoom-blur-start`), then cleanly snaps *downward* into natural focal fields on state activation.
- **Concentric Scale Staggering**: Internal operational data blocks scale outward dynamically from their individual centers (`--stagger-drift-scale`), contrasting beautifully against the primary outer container's macro zoom-down transition.

## Tailoring Variable Hooks
Modify properties within the global root scope inside `style.css` to change choreography dynamics:

| Variable | Baseline Initialization Value | Operational Purpose |
| :--- | :--- | :--- |
| `--zoom-duration` | `0.65s` | Timing window span driving the full main frame snap transition. |
| `--zoom-scale-start` | `1.15` | Oversized initialization dimension factor mapping spatial depth. |
| `--zoom-blur-start` | `15px` | Out-of-focus Gaussian distortion strength tracking entry staging. |
| `--stagger-drift-scale` | `0.92` | Scale multiplier target controlling nested child asset emergence. |