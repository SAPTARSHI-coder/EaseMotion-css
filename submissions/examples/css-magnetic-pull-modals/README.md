# CSS Magnetic Pull Modal Component

A cinematic modal presentation component designed with high-end SaaS application visuals. It uses an asymmetric acceleration model to replicate a magnetic "snapping pull" vector transition without relying on runtime script dependencies.

## Features
- **Zero-JS Reactive Flow**: Implemented with clean CSS active checkbox pseudo-classes.
- **Magnetic Physics Inversion**: Calibrated using spatial offset transformations and a snappy curve signature that pulls the modal instantly to center.
- **SaaS Dark Mode Aesthetics**: Features built-in backdrop blurring filters and sub-surface card shadows.

## Configurable Variables
Configure your interface variables inside `style.css`:

| Variable | Default Value | Description |
|---|---|---|
| `--magnetic-duration` | `0.55s` | The speed profile of the transition pull. |
| `--magnetic-easing` | `cubic-bezier(0.25, 1.4, 0.42, 1)` | The motion curve producing the high velocity pull effect. |
| `--magnetic-pull-y` | `-120px` | Total absolute vertical translation displacement before snap. |