# Brownout Fuse Controller

An advanced EaseMotion example for monitoring distributed Fuse Retrips, fuse debt, retry pressure, and Fuse margin recovery.

## Features

- Interactive controls for brownout load, fuse debt, retry pressure, and Fuse margin health.
- Animated radar, Fuse lanes, recovery metrics, Retrip timeline, decision matrix, and audit ledger.
- State-driven stable, watch, Trip, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Fuse-fuse control-radar-kp/README.md submissions/examples/Fuse-fuse control-radar-kp/demo.html submissions/examples/Fuse-fuse control-radar-kp/style.css
npx stylelint submissions/examples/Fuse-fuse control-radar-kp/style.css --allow-empty-input
git diff --check
```
